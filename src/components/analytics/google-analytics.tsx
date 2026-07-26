import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * Renders nothing until NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GOOGLE_ADS_ID are set on Vercel.
 * Wires both Google Analytics (GA4) and Google Ads conversion tracking off a single gtag.js load.
 */
export function GoogleAnalytics() {
  const { gaId, googleAdsId } = siteConfig.analytics;
  const ids = [gaId, googleAdsId].filter(Boolean);

  if (ids.length === 0) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ids.map((id) => `gtag('config', '${id}');`).join("\n")}
        `}
      </Script>
    </>
  );
}
