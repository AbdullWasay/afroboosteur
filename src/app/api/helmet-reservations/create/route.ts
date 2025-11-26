import { NextRequest, NextResponse } from 'next/server';
import { helmetReservationService, scheduleService, userService, userQRCodeService, notificationService } from '@/lib/database';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, scheduleId } = body;

    // Validate required fields
    if (!userId || !scheduleId) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and scheduleId' },
        { status: 400 }
      );
    }

    // Get user details
    const user = await userService.getById(userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get schedule details
    const schedule = await scheduleService.getById(scheduleId);
    if (!schedule) {
      return NextResponse.json(
        { error: 'Schedule not found' },
        { status: 404 }
      );
    }

    // Check if user already has a reservation for this schedule
    const existingReservation = await helmetReservationService.getByUserAndSchedule(userId, scheduleId);
    if (existingReservation && existingReservation.status !== 'cancelled') {
      return NextResponse.json(
        { error: 'You already have a reservation for this class' },
        { status: 400 }
      );
    }

    // Get or create user's QR code
    let userQRCode = await userQRCodeService.getByUserId(userId);
    if (!userQRCode) {
      // Generate QR code for the user
      const qrCodeData = `USER_${userId}_${Date.now()}`;
      const qrCodeImage = await QRCode.toDataURL(qrCodeData, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      const qrCodeId = await userQRCodeService.create({
        userId,
        qrCodeData,
        qrCodeImage
      });

      userQRCode = await userQRCodeService.getByUserId(userId);
    }

    if (!userQRCode) {
      return NextResponse.json(
        { error: 'Failed to generate QR code' },
        { status: 500 }
      );
    }

    // Create helmet reservation
    const reservationId = await helmetReservationService.create({
      userId,
      userName: `${user.firstName} ${user.lastName}`,
      userEmail: user.email,
      courseId: schedule.courseId,
      courseName: schedule.title,
      scheduleId,
      coachId: schedule.createdBy,
      coachName: '', // Will be populated from course data if needed
      reservationDate: new Date(),
      classDate: schedule.startTime,
      classStartTime: schedule.startTime,
      classEndTime: schedule.endTime,
      location: schedule.location,
      status: 'booked',
      qrCode: userQRCode.qrCodeData
    });

    // Format dates for email
    const classDate = schedule.startTime instanceof Date
      ? schedule.startTime
      : schedule.startTime.toDate();
    const endTime = schedule.endTime instanceof Date
      ? schedule.endTime
      : schedule.endTime.toDate();

    const formattedDate = classDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = `${classDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })} - ${endTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;

    // Send confirmation notification to user
    await notificationService.create({
      userId,
      title: 'Helmet Reserved!',
      message: `Your helmet is reserved for ${schedule.title} on ${formattedDate}`,
      type: 'booking',
      read: false
    });

    // Send email notification with QR code
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/helmet-reservations/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user.email,
          userName: `${user.firstName} ${user.lastName}`,
          courseName: schedule.title,
          classDate: formattedDate,
          classTime: formattedTime,
          location: schedule.location,
          qrCodeImage: userQRCode.qrCodeImage
        })
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the reservation if email fails
    }

    return NextResponse.json({
      success: true,
      reservationId,
      qrCode: userQRCode.qrCodeImage,
      message: 'Helmet reservation created successfully'
    });

  } catch (error: any) {
    console.error('Error creating helmet reservation:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

