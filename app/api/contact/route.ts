import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Semua field harus diisi." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "felixbintangelisha@gmail.com",
      subject: `[Portfolio] Pesan baru dari ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; border: 3px solid #0a0a0a; background: #fafaf0;">
          <h2 style="font-size: 28px; margin-bottom: 24px; border-bottom: 3px solid #0a0a0a; padding-bottom: 12px;">
            📬 Pesan Baru dari Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 100px; border: 2px solid #0a0a0a; background: #f5e642;">Nama</td>
              <td style="padding: 10px; border: 2px solid #0a0a0a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 2px solid #0a0a0a; background: #f5e642;">Email</td>
              <td style="padding: 10px; border: 2px solid #0a0a0a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 2px solid #0a0a0a; background: #f5e642; vertical-align: top;">Pesan</td>
              <td style="padding: 10px; border: 2px solid #0a0a0a;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #666;">
            Dikirim dari portfolio Felix Bintang Elisha
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}
