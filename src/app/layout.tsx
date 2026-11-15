import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps, organizationJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppButton } from "@/components/chatbot/whatsapp-button";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "yoga studio",
    "yoga classes near me",
    "hatha yoga",
    "vinyasa yoga",
    "private yoga sessions",
    "online yoga classes",
    "prenatal yoga",
    "yoga pricing",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-charcoal">
        <script {...jsonLdScriptProps(organizationJsonLd())} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <ChatbotWidget />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
