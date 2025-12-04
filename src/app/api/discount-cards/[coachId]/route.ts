import { NextRequest, NextResponse } from 'next/server';
import { query, where, getDocs, collection, doc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ coachId: string }> }
) {
  try {
    const { coachId } = await context.params;

    if (!coachId) {
      return NextResponse.json(
        { error: 'Coach ID is required' },
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

    // Sort by creation date (newest first)
    discountCards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

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

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ coachId: string }> }
) {
  try {
    const { coachId } = await context.params;
    const body = await request.json();
    const { 
      cardId, 
      isActive, 
      title, 
      description, 
      expirationDate, 
      expiryDate,
      usageLimit,
      userEmail,
      userId,
      userName,
      courseId,
      courseIds,
      discountPercentage,
      recurringSchedule,
      courseSessions
    } = body;

    if (!cardId) {
      return NextResponse.json(
        { error: 'Card ID is required' },
        { status: 400 }
      );
    }

    // Update the discount card
    const updateData: any = {
      updatedAt: Timestamp.now()
    };

    if (typeof isActive === 'boolean') updateData.isActive = isActive;
    if (title) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    
    // Handle expiration date (support both expirationDate and expiryDate)
    const expDate = expirationDate || expiryDate;
    if (expDate) {
      try {
        const dateObj = new Date(expDate);
        if (!isNaN(dateObj.getTime())) {
          const timestamp = Timestamp.fromDate(dateObj);
          updateData.expirationDate = timestamp;
          updateData.expiryDate = timestamp; // Update both for compatibility
        }
      } catch (dateError) {
        console.error('Error parsing expiration date:', dateError);
      }
    }
    
    if (usageLimit !== undefined) updateData.usageLimit = usageLimit;
    if (userEmail !== undefined) updateData.userEmail = userEmail;
    if (userId !== undefined) updateData.userId = userId;
    if (userName !== undefined) updateData.userName = userName;
    if (courseId !== undefined) updateData.courseId = courseId;
    if (courseIds !== undefined) updateData.courseIds = courseIds;
    if (discountPercentage !== undefined) updateData.discountPercentage = discountPercentage;
    if (recurringSchedule !== undefined) updateData.recurringSchedule = recurringSchedule;
    if (courseSessions !== undefined) updateData.courseSessions = courseSessions;

    await updateDoc(doc(db, 'discount_cards', cardId), updateData);

    return NextResponse.json({
      success: true,
      message: 'Discount card updated successfully'
    });

  } catch (error) {
    console.error('Error updating discount card:', error);
    return NextResponse.json(
      { error: 'Failed to update discount card', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ coachId: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const cardId = searchParams.get('cardId');

    if (!cardId) {
      return NextResponse.json(
        { error: 'Card ID is required' },
        { status: 400 }
      );
    }

    // Delete the discount card
    await deleteDoc(doc(db, 'discount_cards', cardId));

    return NextResponse.json({
      success: true,
      message: 'Discount card deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting discount card:', error);
    return NextResponse.json(
      { error: 'Failed to delete discount card' },
      { status: 500 }
    );
  }
}