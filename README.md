# Shanti Yoga Studio

A fully-built, SEO- and Google Ads-friendly yoga studio website: 14 detailed yoga styles, 5 service formats, daily/weekly/monthly pricing (group & private), a blog, WhatsApp + a rule-based chatbot, and a working contact form — built with Next.js 16 (App Router, Turbopack, React 19) and Tailwind CSS v4.

## Before you launch: swap the placeholders

Everything below currently uses placeholder content. Update it before going live:

1. **Brand & contact info** — edit `src/lib/site-config.ts` (studio name, address, phone, WhatsApp number, email, hours, social links) or set the matching env vars from `.env.example`.
2. **Content** — all copy lives in `src/data/*.ts`:
   - `yoga-styles.ts` — the 14 style pages
   - `services.ts` — the 5 service pages
   - `pricing.ts` — every plan/price shown on `/pricing`
   - `blog.ts` — blog posts
   - `testimonials.ts`, `faq.ts`, `schedule.ts`, `instructors.ts`
3. **Contact form email** — set `RESEND_API_KEY` (from [resend.com](https://resend.com)) and `CONTACT_TO_EMAIL` so `/contact` actually delivers messages. Until then, the form shows a friendly error pointing visitors to WhatsApp instead.
4. **Analytics / Google Ads** — set `NEXT_PUBLIC_GA_ID` and/or `NEXT_PUBLIC_GOOGLE_ADS_ID` to enable tracking (see `src/components/analytics/google-analytics.tsx`). Nothing loads until these are set.
5. **Photography** — the design intentionally uses illustration/gradient placeholders instead of stock photos so nothing is hot-linked to a third party. Drop real photos into `public/` and swap them into the relevant components (`Hero`, `InstructorCard`, etc.) using `next/image` when ready.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js 16** (App Router, Turbopack, async `params`/`searchParams`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config in `src/app/globals.css`)
- **Resend** for contact-form email delivery
- **Zod** for server-side form validation
- **lucide-react** for UI icons; a small hand-rolled icon set (`src/components/ui/style-icon.tsx`) for yoga/service glyphs

## SEO & Google Ads notes

- Every page sets its own `<title>`/description via the Metadata API; canonical URLs are set per route.
- `src/app/sitemap.ts` and `robots.ts` are generated automatically from the data files — new yoga styles, services, or blog posts are picked up with no extra work.
- JSON-LD structured data is included for the Organization, each Course (yoga style), each Service, BlogPosting, FAQPage, and aggregate Reviews — see `src/lib/seo.ts`.
- Route structure (`/yoga-styles/hatha-yoga`, `/services/private-yoga-sessions`, etc.) is clean and keyword-rich, which plays well with Google Ads landing-page relevance/Quality Score.
- A dynamic Open Graph image (`src/app/opengraph-image.tsx`) is generated at build time for social sharing.

## Chatbot & WhatsApp

- The chatbot (`src/components/chatbot/chatbot-widget.tsx`) is a **free, rule-based** assistant — no API key required. Its keyword → answer logic lives in `src/lib/chatbot.ts`; add new topics there.
- WhatsApp links are generated from `NEXT_PUBLIC_WHATSAPP_NUMBER` via `siteConfig.contact.whatsappHref()` — used by the floating button, chatbot quick-replies, and every "Book" CTA.
- Want a real LLM-powered chatbot instead? Replace the logic in `chatbot-widget.tsx`'s `respondTo` with a call to an API route wired to the Claude API.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in [Vercel](https://vercel.com/new) — no config needed, it's a standard Next.js app.
3. Add the environment variables from `.env.example` in Project Settings → Environment Variables.
4. Deploy. `next build` runs Turbopack by default in Next.js 16.

## Known warnings

`npm audit` currently reports high-severity advisories in `eslint`'s transitive `minimatch`/`brace-expansion` chain and in Next.js's bundled `postcss`/`sharp`. These are upstream, dev-tooling-only issues with no fix available yet that doesn't downgrade Next.js itself — safe to ignore for now, worth re-running `npm audit` after your next `npm update`.
