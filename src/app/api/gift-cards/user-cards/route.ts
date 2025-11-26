import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const businessId = searchParams.get('businessId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Query gift cards that are assigned to this user or available for this business
    const giftCardsRef = collection(db, 'gift_cards');
    let q;

    if (businessId) {
      // Get cards issued by this business that are assigned to the user
      q = query(
        giftCardsRef,
        where('issuerId', '==', businessId),
        where('usedBy', '==', userId)
      );
    } else {
      // Get all cards assigned to the user
      q = query(
        giftCardsRef,
        where('usedBy', '==', userId)
      );
    }

    const querySnapshot = await getDocs(q);
    const giftCards = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({
      success: true,
      giftCards
    });

  } catch (error) {
    console.error('Error fetching user gift cards:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

