"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

const label = "block text-[12px] font-semibold uppercase tracking-[0.12em] text-charcoal-faint";
const field =
  "mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal-faint/70 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-terracotta-300/50";

export function HomeContact({
  heading = "Do You Have Any Questions?",
  subheading = "Tell us a little about your goals and we’ll get back to you within one business day.",
  title = "Contact Shanti Yoga Studio",
  topic = "Home page enquiry",
  plain = false,
}: {
  heading?: string;
  subheading?: string;
  title?: string;
  topic?: string;
  plain?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const { address, phoneDisplay, phoneHref, email } = siteConfig.contact;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={`scroll-mt-24 py-16 sm:py-24 ${plain ? "" : "bg-white"}`}>
      <Container>
        <SectionHeading eyebrow="Get in touch" title={title} description="Questions about a class, pricing or a corporate program? Reach out — we're happy to help you plan your first visit." />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-3xl bg-cream-deep p-6 sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-2 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-sage-600" />
                <p className="font-display text-2xl font-semibold text-sage-600">Message sent!</p>
                <p className="text-[15px] text-charcoal-soft">Thanks for reaching out — we&rsquo;ll reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="topic" value={topic} />
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company
                    <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={label}>
                    Your name
                    <input className={field} name="name" placeholder="Full name" required minLength={2} />
                  </label>
                  <label className={label}>
                    Your email
                    <input className={field} type="email" name="email" placeholder="you@email.com" required />
                  </label>
                </div>
                <label className={`${label} block`}>
                  Phone (optional)
                  <input className={field} type="tel" name="phone" placeholder="+1 555 000 0000" />
                </label>
                <label className={`${label} block`}>
                  Your message
                  <textarea
                    className={`${field} min-h-[130px] resize-y`}
                    name="message"
                    placeholder="Tell us what you're looking for…"
                    required
                    minLength={10}
                  />
                </label>
                {status === "error" ? (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-sage-600 px-6 py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-sage-700 disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-sage-600">{heading}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-charcoal-soft">{subheading}</p>

            <ul className="mt-8 space-y-6">
              {[
                { icon: MapPin, title: "Find us", body: `${address.line1}, ${address.line2}, ${address.city}, ${address.region} ${address.postalCode}`, href: address.mapsHref },
                { icon: Phone, title: "Call us", body: phoneDisplay, href: phoneHref },
                { icon: Mail, title: "Mail us", body: email, href: `mailto:${email}` },
              ].map(({ icon: Icon, title: t, body, href }) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta-400 text-sage-800">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11.5px] font-semibold uppercase tracking-[0.18em] text-charcoal-faint">{t}</span>
                    <a href={href} className="mt-0.5 block break-words text-[16px] font-medium text-sage-600 hover:text-terracotta-600">
                      {body}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
