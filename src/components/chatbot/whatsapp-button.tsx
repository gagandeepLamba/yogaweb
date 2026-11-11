import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Floating WhatsApp button (bottom-left) and call button (bottom-right). */
export function WhatsAppButton() {
  return (
    <>
      <a
        href={siteConfig.contact.whatsappHref("Hi! I'd like to know more about your yoga classes.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
      >
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
            <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.35.615 4.646 1.783 6.666l-1.897 6.93 7.098-1.862a13.27 13.27 0 0 0 6.35 1.62h.006c7.362 0 13.332-5.97 13.332-13.333 0-3.56-1.386-6.907-3.903-9.424a13.24 13.24 0 0 0-9.436-3.93Zm0 24.4h-.005a11.06 11.06 0 0 1-5.638-1.543l-.404-.24-4.212 1.105 1.124-4.106-.263-.421a11.05 11.05 0 0 1-1.7-5.862c0-6.117 4.98-11.096 11.101-11.096 2.965 0 5.752 1.156 7.849 3.254a11.02 11.02 0 0 1 3.248 7.85c-.003 6.117-4.982 11.06-11.1 11.06Zm6.09-8.31c-.334-.167-1.974-.974-2.28-1.085-.306-.111-.529-.167-.751.167-.223.334-.863 1.085-1.058 1.307-.194.223-.39.25-.723.084-.334-.167-1.409-.52-2.684-1.655-.992-.885-1.663-1.978-1.858-2.312-.194-.334-.02-.514.146-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.556.111-.223.056-.417-.028-.584-.084-.167-.751-1.81-1.029-2.479-.271-.65-.546-.562-.751-.573l-.64-.011a1.23 1.23 0 0 0-.891.417c-.306.334-1.169 1.142-1.169 2.785s1.197 3.23 1.363 3.453c.167.223 2.354 3.593 5.703 5.039.797.344 1.418.55 1.902.704.799.254 1.526.218 2.101.132.641-.096 1.974-.807 2.252-1.586.278-.779.278-1.446.195-1.586-.084-.14-.306-.223-.64-.39Z" />
          </svg>
        </span>
        <span className="hidden rounded-md bg-white px-3 py-1 font-eyebrow text-[12px] font-medium text-charcoal shadow-md sm:block">
          Need Help?
        </span>
      </a>

      <a
        href={siteConfig.contact.phoneHref}
        aria-label="Call us"
        title="Call us"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#e0312c] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
