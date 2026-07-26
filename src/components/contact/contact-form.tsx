"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";

const topics = [
  "General Inquiry",
  "Book a Trial Class",
  "Private Sessions",
  "Group Classes",
  "Online Classes",
  "Corporate Yoga",
  "Retreats & Workshops",
  "Something Else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

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
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-sage-300 bg-sage-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-sage-600" />
        <h3 className="font-display text-xl font-medium text-charcoal">Message sent!</h3>
        <p className="text-sm text-charcoal-soft">
          Thanks for reaching out — we&rsquo;ll get back to you within one business day. For anything
          urgent, message us on WhatsApp instead.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-sage-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field — hidden from real users, catches simple bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-charcoal">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            className="mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-sage-400 focus:outline-none"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-charcoal">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-sage-400 focus:outline-none"
            placeholder="jane@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-charcoal">
            Phone <span className="font-normal text-charcoal-faint">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-sage-400 focus:outline-none"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="topic" className="text-sm font-semibold text-charcoal">
            What can we help with?
          </label>
          <select
            id="topic"
            name="topic"
            required
            defaultValue="General Inquiry"
            className="mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-sage-400 focus:outline-none"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-sage-400 focus:outline-none"
          placeholder="Tell us your goals, preferred schedule, or any questions…"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-xl bg-terracotta-50 p-4 text-sm text-terracotta-700">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 text-base font-semibold text-cream transition-all hover:bg-sage-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
