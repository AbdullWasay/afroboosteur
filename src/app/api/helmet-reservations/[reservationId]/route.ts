import { NextRequest, NextResponse } from 'next/server';
import { helmetReservationService } from '@/lib/database';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ reservationId: string }> }
) {
  try {
    const { reservationId } = await params;

    if (!reservationId) {
      return NextResponse.json(
        { error: 'Reservation ID is required' },
        { status: 400 }
      );
    }

    // Get reservation to check status
    const reservation = await helmetReservationService.getById(reservationId);
    if (!reservation) {
      return NextResponse.json(
        { error: 'Reservation not found' },
        { status: 404 }
      );
    }

    // Don't allow cancelling already checked-in reservations
    if (reservation.status === 'checked_in') {
      return NextResponse.json(
        { error: 'Cannot cancel a reservation that has already been checked in' },
        { status: 400 }
      );
    }

    // Cancel the reservation
    await helmetReservationService.cancel(reservationId);

    return NextResponse.json({
      success: true,
      message: 'Reservation cancelled successfully'
    });

  } catch (error: any) {
    console.error('Error cancelling reservation:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

