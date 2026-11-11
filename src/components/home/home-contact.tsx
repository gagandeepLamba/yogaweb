"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-[3px] border-0 bg-white px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal-faint focus:outline-none focus:ring-2 focus:ring-terracotta-200";

export function HomeContact({
  heading = "Book a free consultation",
  subheading = "Tell us a little about your goals and we’ll be in touch.",
  title = "Visit Our Location",
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
    <section id="contact" className={`scroll-mt-24 py-16 sm:py-20 ${plain ? "" : "bg-cream-deep"}`}>
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-xl bg-sage-600 p-6 sm:p-8">
          <h3 className="font-display text-3xl text-white">{heading}</h3>
          <span className="mt-3 block h-[2px] w-10 bg-terracotta-200" />
          <p className="mt-3 text-[15px] text-white/85">{subheading}</p>

          {status === "success" ? (
            <div className="mt-6 flex flex-col items-center gap-2 rounded-[3px] bg-white p-8 text-center">
              <CheckCircle2 className="h-9 w-9 text-sage-600" />
              <p className="font-display text-xl text-charcoal">Message sent!</p>
              <p className="text-sm text-charcoal-soft">Thanks for reaching out — we&rsquo;ll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
              <input type="hidden" name="topic" value={topic} />
              <div className="hidden" aria-hidden="true">
                <label>
                  Company
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={field} name="name" placeholder="Your Name" required minLength={2} aria-label="Your name" />
                <input className={field} type="email" name="email" placeholder="Your Email" required aria-label="Your email" />
              </div>
              <input className={field} type="tel" name="phone" placeholder="Your Phone" aria-label="Your phone" />
              <textarea
                className={`${field} min-h-[130px] resize-y`}
                name="message"
                placeholder="Your Message"
                required
                minLength={10}
                aria-label="Your message"
              />
              {status === "error" ? (
                <p role="alert" className="rounded-[3px] bg-white/90 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              ) : null}
              <div className="text-right">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-[3px] bg-terracotta-200 px-6 py-3 font-display text-[15px] uppercase tracking-wide text-sage-900 transition-colors hover:bg-terracotta-300 disabled:opacity-60"
                >
                  {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Get a Solution
                </button>
              </div>
            </form>
          )}
        </div>

        <div>
          <span className="block font-eyebrow text-[17px] text-sage-600">Contact Us</span>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{title}</h2>
          <span className="mt-4 block h-[2px] w-14 bg-sage-600" />

          <ul className="mt-8 space-y-6">
            {[
              { icon: MapPin, title: "Our Location", body: `${address.line1}, ${address.line2}, ${address.city}, ${address.region} ${address.postalCode}`, href: address.mapsHref },
              { icon: Phone, title: "Looking For Consultation", body: phoneDisplay, href: phoneHref },
              { icon: Mail, title: "Email Us", body: email, href: `mailto:${email}` },
            ].map(({ icon: Icon, title, body, href }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-600 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-charcoal">{title}</span>
                  <a href={href} className="text-[15px] text-charcoal-soft hover:text-sage-600">
                    {body}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
