import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(values: Request) {
  try {
    const body = await values.json();
    const { firstName, lastName, email, attending, specialDietary, message } = body;
    const data = await resend.emails.send({
      from: 'Scott <NoReply@futurejones.co.uk>',
      to: email,
      bcc: ['scott-w-jones@hotmail.com', 'djkeel@live.co.uk'],
      subject: "Scott's & Deanna's Wedding Invitation! 🎉",
      react: EmailTemplate({ firstName: firstName, lastName: lastName, attending: attending, specialDietary: specialDietary, message: message }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
