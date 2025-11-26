import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { adminSettingsService } from '@/lib/database';

interface EmailSettings {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  senderName?: string;
  enabled?: boolean;
}

async function getEmailConfig(): Promise<EmailSettings | null> {
  try {
    const settings = await adminSettingsService.get('email_settings');
    const typed = settings as (EmailSettings & { enabled?: boolean }) | null;

    if (!typed || typed.enabled === false) {
      return null;
    }

    return typed;
  } catch (error) {
    console.error('Error fetching email config:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userEmail, userName, courseName, classDate, classTime, location, qrCodeImage } = body;

    if (!userEmail || !userName || !courseName || !classDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration
    const emailConfig = await getEmailConfig();
    if (!emailConfig) {
      console.log('Email service not configured, skipping email');
      return NextResponse.json({ success: true, message: 'Email service not configured' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass
      }
    });

    // Prepare email HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 10px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #D91CD2, #7000FF); padding: 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
          .content { padding: 30px; }
          .qr-section { text-align: center; margin: 30px 0; padding: 20px; background: #f9f9f9; border-radius: 10px; }
          .qr-section img { max-width: 250px; border: 3px solid #D91CD2; border-radius: 10px; }
          .details { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0; }
          .details p { margin: 10px 0; color: #333; }
          .details strong { color: #D91CD2; }
          .footer { background: #f4f4f4; padding: 20px; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Helmet Reserved!</h1>
          </div>
          <div class="content">
            <p>Hi <strong>${userName}</strong>,</p>
            <p>Your helmet has been successfully reserved for the following class:</p>
            
            <div class="details">
              <p><strong>Course:</strong> ${courseName}</p>
              <p><strong>Date:</strong> ${classDate}</p>
              ${classTime ? `<p><strong>Time:</strong> ${classTime}</p>` : ''}
              ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
            </div>

            ${qrCodeImage ? `
            <div class="qr-section">
              <h3 style="color: #D91CD2; margin-bottom: 15px;">Your QR Code</h3>
              <img src="${qrCodeImage}" alt="QR Code" />
              <p style="margin-top: 15px; color: #666; font-size: 14px;">
                Show this QR code at the entrance to check in
              </p>
            </div>
            ` : ''}

            <p style="margin-top: 30px;">
              <strong>Important:</strong> Please arrive 10 minutes early and have your QR code ready for scanning.
            </p>
            
            <p>See you at the class!</p>
            <p>The AfroBoost Team</p>
          </div>
          <div class="footer">
            <p>This email was sent from <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://afroboost.com'}">AfroBoost</a></p>
            <p>Questions? Contact us at support@afroboost.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: {
        name: emailConfig.senderName || 'AfroBoost',
        address: emailConfig.auth.user
      },
      to: userEmail,
      subject: `Helmet Reserved - ${courseName}`,
      html: htmlContent
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });

  } catch (error: any) {
    console.error('Error sending helmet reservation email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}

