import { NextResponse } from "next/server";
import { QAIEmail } from "../../../../interfaces/form";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body: QAIEmail = await req.json();
    console.log(body);

    const { data, error } = await resend.emails.send({
      from: "Information Support <info@mostaqbli.co>",
      to: [body.email],
      subject: "تساؤلك تحت أنظارنا",
      react: EmailTemplate({ input: body }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
