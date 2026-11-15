import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=900&q=85`;

const steps = [
  {
    label: "Beginner-first teaching",
    body: "Every class opens with clear instruction and options, so a first-timer and a ten-year practitioner can share the same room and both be challenged.",
  },
  {
    label: "A real range of styles",
    body: "From grounding Hatha to energising Vinyasa, deep Yin and aerial yoga, you can change your practice as your life, body and goals change.",
  },
  {
    label: "Teachers who adapt",
    body: "Injuries, pregnancy, stiff hips, a stressful week — instructors modify poses and pacing so yoga works for the body you have today.",
  },
  {
    label: "Practice that goes beyond the mat",
    body: "Breathwork, meditation and philosophy are woven into classes, giving you tools for stress, sleep and focus long after you roll up your mat.",
  },
  {
    label: "A community, not a chain",
    body: `${siteConfig.shortName} is small on purpose. People know each other's names, celebrate progress and show up for one another.`,
  },
];

export function Timeline() {
  return (
    <section className="px-3 py-6 sm:px-5">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] bg-cream-deep py-16 sm:rounded-[2.5rem] sm:py-24">
        <Container className="relative">
          <SectionHeading
            eyebrow="Why practise with us"
            title={`What Makes ${siteConfig.shortName} the Best Place to Practise Yoga?`}
            description={`${siteConfig.contact.address.city} has plenty of studios — here is what sets ours apart, and why students stay for years.`}
          />

          <div className="relative mt-14 grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,640px)_1fr]">
            <div className="relative hidden aspect-[2/3] overflow-hidden rounded-3xl lg:block">
              <Image
                src={u("photo-1506126613408-eca07ce68773")}
                alt="Student holding a steady pose on a mat"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>

            <ol className="relative space-y-6 border-l-2 border-terracotta-300/70 pl-8 sm:pl-10">
              {steps.map((step) => (
                <li key={step.label} className="relative">
                  <span className="absolute -left-[2.6rem] top-7 h-4 w-4 rounded-full border-[3px] border-terracotta-400 bg-white sm:-left-[3.05rem]" />
                  <div className="rounded-2xl bg-white p-6 shadow-md shadow-sage-900/5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-terracotta-600">{step.label}</p>
                    <p className="mt-3 text-[16px] leading-relaxed text-charcoal-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="relative hidden aspect-[2/3] overflow-hidden rounded-3xl lg:block">
              <Image
                src={u("photo-1575052814086-f385e2e2ad1b")}
                alt="Energetic yoga practice in the studio"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
