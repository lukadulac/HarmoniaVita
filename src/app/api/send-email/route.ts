import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
	to: string;
	contactName: string;
	from: string;
	senderName: string;
	subject: string;
	message: string;
}

export async function POST(request: NextRequest) {
	try {
		const body: EmailRequest = await request.json();
		const { to, contactName, from, senderName, subject, message } = body;

		// Validate required fields
		if (!to || !contactName || !from || !senderName || !message) {
			return NextResponse.json(
				{ error: "Unesite sva obavezna polja" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(from) || !emailRegex.test(to)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		const data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: [to],
			replyTo: from,
			subject: `New Contact Form: ${senderName}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1e293b;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f8fafc;
                padding: 20px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #64748b;
              }
              .message-box {
                background-color: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #3b82f6;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Poruka za  ${contactName}</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From:</span> ${senderName}
                </div>
                <div class="field">
                  <span class="label">Email:</span> ${from}
                </div>
                
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
		});

		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{
				error: error instanceof Error ? error.message : "Failed to send email",
			},
			{ status: 500 }
		);
	}
}
