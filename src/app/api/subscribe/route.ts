import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";
import { z } from "zod";

const SubscribeSchema = z.object({
    email: z.string().email(),
    source: z.string().optional(),
    token: z.string().optional(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const parsed = SubscribeSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        // Honeypot token: if present, assume bot
        if (parsed.data.token) {
            return NextResponse.json({ ok: true });
        }

        const { email, source } = parsed.data;

        // Send confirmation to user and notify team
        try {
            const resend = new Resend(process.env.RESEND_API_KEY!);

            // Send confirmation email to user
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: email,
                subject: "Welcome to JustJapa Waitlist! 🎉",
                html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Welcome to JustJapa!</title>
          </head>
          <body style="margin:0; padding:0; background-color:#f9fafb; font-family:Arial, sans-serif; color:#333;">
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">
              <tr>
                <td style="background-color:#0178FF; padding:30px; text-align:center;">
                  <h1 style="margin:0; font-size:28px; color:white;">Welcome to JustJapa!</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:30px;">
                  <p style="font-size:16px; line-height:1.5; margin-bottom:20px;">
                    Thank you for joining our waitlist! We're thrilled to have you on board.
                  </p>
                  <p style="font-size:16px; line-height:1.5; margin-bottom:20px;">
                    You'll be among the first to know when we launch our amazing app that helps you with your <strong>Japa journey</strong>.
                  </p>
                  <p style="font-size:16px; line-height:1.5; margin-bottom:20px;">
                    Stay tuned — exciting things are coming your way soon!
                  </p>
                  <p style="font-size:16px; margin-bottom:0;">
                    Best regards,<br/>
                    <strong>The JustJapa Team</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background-color:#f3f4f6; padding:20px; text-align:center; font-size:12px; color:#6b7280;">
                  © 2025 JustJapa. All rights reserved.
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
            });

            // Send notification to admin
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: "justjapa10@gmail.com",
                subject: "New JustJapa Waitlist Signup 🚀",
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0178FF;">New Waitlist Signup!</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source || "direct"}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
            });
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
