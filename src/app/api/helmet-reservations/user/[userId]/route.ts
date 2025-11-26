import { NextRequest, NextResponse } from 'next/server';
import { helmetReservationService, userQRCodeService } from '@/lib/database';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get user's reservations
    const reservations = await helmetReservationService.getByUserId(userId);

    // Get user's QR code
    const userQRCode = await userQRCodeService.getByUserId(userId);

    return NextResponse.json({
      success: true,
      reservations,
      qrCode: userQRCode?.qrCodeImage || null,
      qrCodeData: userQRCode?.qrCodeData || null
    });

  } catch (error: any) {
    console.error('Error fetching user reservations:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

