import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const coachId = searchParams.get('coachId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get user document to fetch email
    const usersRef = collection(db, 'users');
    const userQuery = query(usersRef, where('id', '==', userId));
    const userSnapshot = await getDocs(userQuery);
    
    if (userSnapshot.empty) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const userEmail = userSnapshot.docs[0].data().email;

    // Query discount cards
    const discountCardsRef = collection(db, 'discount_cards');
    let q;

    if (coachId) {
      // Get cards from this coach that are either:
      // 1. Student-specific cards for this user (userEmail matches)
      // 2. Course-specific cards (no userEmail restriction)
      //
      // Firestore's `or()` helper has strict typings that can be tricky with TS;
      // instead, we perform two simple queries and merge the results.
      const studentCardsQuery = query(
        discountCardsRef,
        where('coachId', '==', coachId),
        where('userEmail', '==', userEmail)
      );

      const courseCardsQuery = query(
        discountCardsRef,
        where('coachId', '==', coachId),
        where('cardType', '==', 'course')
      );

      const [studentCardsSnap, courseCardsSnap] = await Promise.all([
        getDocs(studentCardsQuery),
        getDocs(courseCardsQuery)
      ]);

      const docsMap = new Map<string, any>();

      studentCardsSnap.forEach((doc) => {
        docsMap.set(doc.id, { id: doc.id, ...doc.data() });
      });

      courseCardsSnap.forEach((doc) => {
        if (!docsMap.has(doc.id)) {
          docsMap.set(doc.id, { id: doc.id, ...doc.data() });
        }
      });

      const discountCards = Array.from(docsMap.values());

      return NextResponse.json({
        success: true,
        discountCards
      });
    } else {
      // Get all cards for this user
      q = query(
        discountCardsRef,
        where('userEmail', '==', userEmail)
      );
    }

    const querySnapshot = await getDocs(q);
    const discountCards = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({
      success: true,
      discountCards
    });

  } catch (error) {
    console.error('Error fetching user discount cards:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

