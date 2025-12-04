import { NextRequest, NextResponse } from 'next/server';
import { addDoc, collection, Timestamp, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { userService } from '@/lib/database';
import QRCode from 'qrcode';

// Interface for discount card data
interface DiscountCard {
  id?: string;
  coachId: string;
  coachName: string;
  title: string;
  description: string;
  discountPercentage: number;
  code: string;
  qrCodeImage?: string; // Base64 data URL for QR code
  isActive: boolean;
  expirationDate?: Date;
  usageLimit?: number;
  timesUsed: number;
  createdAt: Date;
  updatedAt: Date;
  userEmail?: string;
}

// Generate unique discount code
const generateDiscountCode = (coachName: string, percentage: number): string => {
  const timestamp = Date.now().toString().slice(-6);
  const cleanName = coachName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 4);
  return `${cleanName}${percentage}${timestamp}`;
};

export async function POST(request: NextRequest) {
  console.log('=== Discount Card Creation Request Started ===');
  
  try {
    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
      console.log('Request body parsed successfully:', JSON.stringify(body, null, 2));
    } catch (parseError: any) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body', details: parseError?.message },
        { status: 400 }
      );
    }
    const {
      coachId,
      title,
      description,
      discountPercentage,
      userEmail,
      courseId,
      cardType,
      expirationDate,
      maxUsage,
      courseSessions, // Array of session IDs for this course
      code: providedCode, // Optional: for duplication
      qrCodeImage: providedQrCodeImage // Optional: for duplication
    } = body;

    // Validate required fields
    if (!coachId || !discountPercentage) {
      return NextResponse.json(
        { error: 'Missing required fields: coachId, discountPercentage' },
        { status: 400 }
      );
    }

    // Validate discount percentage
    if (discountPercentage < 1 || discountPercentage > 100) {
      return NextResponse.json(
        { error: 'Discount percentage must be between 1 and 100' },
        { status: 400 }
      );
    }

    // Get coach details
    const coach = await userService.getById(coachId);
    if (!coach) {
      return NextResponse.json(
        { error: 'Coach not found' },
        { status: 404 }
      );
    }

    // Validate coach role
    if (coach.role !== 'coach') {
      return NextResponse.json(
        { error: 'Only coaches can create discount cards' },
        { status: 403 }
      );
    }

    // If userEmail is provided, validate it exists
    if (userEmail) {
      const targetUser = await userService.getByEmail(userEmail);
      if (!targetUser) {
        return NextResponse.json(
          { error: 'Target user email not found' },
          { status: 400 }
        );
      }
    }

    // Generate unique discount code (or use provided one for duplication)
    let code = providedCode;
    let qrCodeImage = providedQrCodeImage;

    if (!code) {
      // Generate new code if not provided
      const coachName = (coach.firstName || '') + (coach.lastName || '');
      if (!coachName) {
        return NextResponse.json(
          { error: 'Coach name is missing. Cannot generate discount code.' },
          { status: 400 }
        );
      }
      code = generateDiscountCode(coachName, discountPercentage);

      // Check if code already exists (very unlikely but good to check)
      const existingCodeQuery = query(
        collection(db, 'discount_cards'),
        where('code', '==', code)
      );
      const existingCodeSnapshot = await getDocs(existingCodeQuery);
      
      if (!existingCodeSnapshot.empty) {
        // Regenerate with additional timestamp
        const coachName = (coach.firstName || '') + (coach.lastName || '');
        code = generateDiscountCode(coachName, discountPercentage) + Math.random().toString(36).substr(2, 3);
      }
    } else {
      // If code is provided, check if it already exists
      const existingCodeQuery = query(
        collection(db, 'discount_cards'),
        where('code', '==', code.toUpperCase())
      );
      const existingCodeSnapshot = await getDocs(existingCodeQuery);
      
      if (!existingCodeSnapshot.empty) {
        return NextResponse.json(
          { error: 'This discount code already exists. Please try again.' },
          { status: 400 }
        );
      }
      code = code.toUpperCase();
    }

    // Ensure code is uppercase for consistency
    code = code.toUpperCase();
    
    // Generate QR code if not provided
    if (!qrCodeImage) {
      try {
        console.log('Generating QR code for code:', code);
        qrCodeImage = await QRCode.toDataURL(code, {
          width: 200, // Reduced size to prevent Firestore size limits
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        
        // Check QR code size (Firestore has 1MB limit per document)
        if (qrCodeImage.length > 1000000) { // ~1MB
          console.warn('QR code is very large, regenerating with smaller size...');
          qrCodeImage = await QRCode.toDataURL(code, {
            width: 150,
            margin: 1,
            color: {
              dark: '#000000',
              light: '#FFFFFF',
            },
          });
        }
        
        console.log('✅ QR code generated successfully');
        console.log('   Code stored in QR:', code);
        console.log('   QR code size:', qrCodeImage.length, 'bytes');
      } catch (qrError: any) {
        console.error('❌ Error generating QR code:', qrError);
        throw new Error(`Failed to generate QR code: ${qrError?.message || 'Unknown error'}`);
      }
    } else {
      console.log('Using provided QR code image');
    }

    // Prepare Firestore document data
    // Convert dates to Timestamps for Firestore
    const firestoreData: any = {
      coachId,
      coachName: `${coach.firstName} ${coach.lastName}`,
      title: title || 'Special Discount',
      description: description || '',
      discountPercentage,
      code,
      qrCodeImage,
      isActive: true,
      usageLimit: maxUsage || null,
      timesUsed: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      ...(userEmail ? { userEmail } : {}),
      ...(courseId ? { courseId } : {}),
      ...(cardType ? { cardType } : {}),
      // Handle courseSessions - can be array (legacy) or Record<string, string[]> (new format)
      ...(courseSessions ? { 
        courseSessions: Array.isArray(courseSessions) 
          ? courseSessions 
          : (typeof courseSessions === 'object' ? courseSessions : undefined)
      } : {})
    };

    // Add expiration date if provided (convert to Firestore Timestamp)
    if (expirationDate) {
      try {
        const expDate = new Date(expirationDate);
        if (isNaN(expDate.getTime())) {
          throw new Error('Invalid expiration date format');
        }
        firestoreData.expirationDate = Timestamp.fromDate(expDate);
      } catch (dateError: any) {
        console.error('Error parsing expiration date:', dateError);
        throw new Error(`Invalid expiration date: ${dateError?.message || 'Unknown error'}`);
      }
    }

    console.log('Saving discount card to Firestore...');
    console.log('Firestore data keys:', Object.keys(firestoreData));
    
    // Save to Firestore
    let docRef;
    try {
      docRef = await addDoc(collection(db, 'discount_cards'), firestoreData);
      console.log('✅ Discount card saved successfully with ID:', docRef.id);
    } catch (firestoreError: any) {
      console.error('❌ Firestore save error:', firestoreError);
      console.error('Firestore error code:', firestoreError?.code);
      console.error('Firestore error message:', firestoreError?.message);
      throw new Error(`Failed to save to Firestore: ${firestoreError?.message || 'Unknown error'}`);
    }

    // Convert back to regular format for response (with Date objects)
    const responseCard = {
      id: docRef.id,
      coachId: firestoreData.coachId,
      coachName: firestoreData.coachName,
      title: firestoreData.title,
      description: firestoreData.description,
      discountPercentage: firestoreData.discountPercentage,
      code: firestoreData.code,
      qrCodeImage: firestoreData.qrCodeImage,
      isActive: firestoreData.isActive,
      expirationDate: firestoreData.expirationDate ? firestoreData.expirationDate.toDate() : undefined,
      usageLimit: firestoreData.usageLimit,
      timesUsed: firestoreData.timesUsed,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...(firestoreData.userEmail ? { userEmail: firestoreData.userEmail } : {}),
      ...(firestoreData.courseId ? { courseId: firestoreData.courseId } : {}),
      ...(firestoreData.cardType ? { cardType: firestoreData.cardType } : {}),
      ...(firestoreData.courseSessions ? { courseSessions: firestoreData.courseSessions } : {})
    };

    console.log('=== Discount Card Creation Completed Successfully ===');
    return NextResponse.json({
      success: true,
      discountCard: responseCard
    });

  } catch (error: any) {
    console.error('Error creating discount card:', error);
    console.error('Error stack:', error?.stack);
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      code: error?.code
    });
    
    // Return detailed error message
    let errorMessage = 'Failed to create discount card';
    
    if (error?.message) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    // In development, include more details
    const response: any = {
      error: errorMessage
    };
    
    if (process.env.NODE_ENV === 'development') {
      response.details = error?.stack;
      response.errorType = error?.name;
      response.errorCode = error?.code;
    }
    
    return NextResponse.json(
      response,
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const coachId = searchParams.get('coachId');

    if (!coachId) {
      return NextResponse.json(
        { error: 'coachId parameter is required' },
        { status: 400 }
      );
    }

    // Get coach's discount cards
    const discountCardsQuery = query(
      collection(db, 'discount_cards'),
      where('coachId', '==', coachId)
    );
    
    const querySnapshot = await getDocs(discountCardsQuery);
    const discountCards = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore timestamps to dates
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      expirationDate: doc.data().expirationDate?.toDate() || null
    }));

    return NextResponse.json({
      success: true,
      discountCards
    });

  } catch (error) {
    console.error('Error fetching discount cards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch discount cards' },
      { status: 500 }
    );
  }
}