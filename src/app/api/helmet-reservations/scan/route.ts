import { NextRequest, NextResponse } from 'next/server';
import { helmetReservationService, userQRCodeService, scheduleService } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { qrCodeData, scheduleId } = body;

    // Validate required fields
    if (!qrCodeData || !scheduleId) {
      return NextResponse.json(
        { error: 'Missing required fields: qrCodeData and scheduleId' },
        { status: 400 }
      );
    }

    // Find user by QR code
    const userQRCode = await userQRCodeService.getByQRCodeData(qrCodeData);
    if (!userQRCode) {
      return NextResponse.json({
        valid: false,
        status: 'invalid_qr',
        message: 'Invalid QR code'
      });
    }

    // Get schedule details
    const schedule = await scheduleService.getById(scheduleId);
    if (!schedule) {
      return NextResponse.json({
        valid: false,
        status: 'invalid_schedule',
        message: 'Schedule not found'
      });
    }

    // Check if user has a reservation for this schedule
    const reservation = await helmetReservationService.getByUserAndSchedule(
      userQRCode.userId,
      scheduleId
    );

    if (!reservation) {
      return NextResponse.json({
        valid: false,
        status: 'no_reservation',
        message: 'No reservation found for this class',
        userName: ''
      });
    }

    // Check if already checked in
    if (reservation.status === 'checked_in') {
      return NextResponse.json({
        valid: false,
        status: 'already_checked_in',
        message: 'Already checked in',
        userName: reservation.userName,
        checkinTime: reservation.checkinTime
      });
    }

    // Check if reservation is cancelled
    if (reservation.status === 'cancelled') {
      return NextResponse.json({
        valid: false,
        status: 'cancelled',
        message: 'Reservation was cancelled',
        userName: reservation.userName
      });
    }

    // Valid reservation - check in the user
    await helmetReservationService.checkIn(reservation.id);

    return NextResponse.json({
      valid: true,
      status: 'success',
      message: `Welcome ${reservation.userName}!`,
      userName: reservation.userName,
      userEmail: reservation.userEmail,
      courseName: reservation.courseName,
      location: reservation.location,
      reservationId: reservation.id
    });

  } catch (error: any) {
    console.error('Error scanning QR code:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

