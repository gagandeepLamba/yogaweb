import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  topic: z.string().trim().min(2).max(60),
  message: z.string().trim().min(10, "Please share a few more details.").max(2000),
  // Honeypot field: real users never see or fill this input. Accept any value here —
  // rejecting it in validation would tip off bots that the field was checked.
  company: z.string().max(200).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form for errors and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, phone, topic, message, company } = parsed.data;

  if (company) {
    // Honeypot tripped — pretend success so bots don't learn to avoid it.
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form email was not sent.");
    return NextResponse.json(
      {
        error:
          "Email delivery isn't configured yet on this deployment. Please reach out via WhatsApp or phone instead.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

  try {
    await resend.emails.send({
      from: `${siteConfig.name} Website <onboarding@resend.dev>`,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry (${topic}) from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
