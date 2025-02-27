import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/emailSender";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, phone, email, city, comment, messageFormat } = await req.json();

    let text, html;
    if (messageFormat === "modal") {
      text = `Новая заявка:\n\nИмя: ${name}\nНомер телефона: ${phone}\nEmail: ${email}`;
      html = `
        <h2>Новая заявка с модального окна</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Номер телефона:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
    } else if (messageFormat === "contactForm") {
      text = `Новая заявка:\n\nИмя: ${name}\nГород: ${city}\nНомер телефона: ${phone}\nEmail: ${email}\nКомментарий: ${comment}`;
      html = `
        <h2>Новая заявка с формы обратной связи</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Город:</strong> ${city}</p>
        <p><strong>Номер телефона:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Комментарий:</strong> ${comment}</p>
      `;
    } else {
      
      text = `Новая заявка:\n\nИмя: ${name}\nНомер телефона: ${phone}\nEmail: ${email}`;
      html = `
        <h2>Новая заявка </h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Номер телефона:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
    }

    await sendEmail({
      subject: "Новая заявка",
      text,
      html,
    });

    return NextResponse.json({ success: true, message: "Письмо отправлено!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при отправке письма" },
      { status: 500 }
    );
  }
}
