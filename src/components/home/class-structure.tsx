import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const rows = [
  { n: "01", title: "Asana practice", tag: "The posture", body: "How to move, align and safely adjust yoga postures, drawn from traditional Hatha and flowing Vinyasa." },
  { n: "02", title: "Pranayama", tag: "The breath", body: "Breathing techniques and the science of prana that underpins every pose." },
  { n: "03", title: "Meditation & mantra", tag: "The mind", body: "Concentration and meditation methods, supported by simple mantra and quiet stillness." },
  { n: "04", title: "Philosophy & lifestyle", tag: "The roots", body: "The roots of the tradition — the Yoga Sutras, the eight limbs and how yogic principles apply to everyday life." },
  { n: "05", title: "Anatomy & alignment", tag: "The body", body: "Understanding muscles, joints and the spine so you can practise safely and adapt poses to your own body." },
  { n: "06", title: "Relaxation & integration", tag: "The rest", body: "Guided relaxation at the end of class to let the benefits of practice settle into body and mind." },
];

export function ClassStructure() {
  return (
    <section className="px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1360px] rounded-[2rem] bg-cream-deep py-16 sm:rounded-[2.5rem] sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What you'll learn"
            title="What Happens in a Typical Class?"
            description="Whatever the style, each class is built from the same six areas of study."
          />

          <ol className="mx-auto mt-12 max-w-5xl divide-y divide-charcoal/10 border-y border-charcoal/10">
            {rows.map((row, i) => (
              <li
                key={row.n}
                className="grid items-center gap-3 py-7 sm:grid-cols-[90px_1.1fr_1.4fr] sm:gap-8"
              >
                <span className={`font-display text-4xl ${i % 2 === 0 ? "text-terracotta-400" : "text-charcoal-faint/60"}`}>
                  {row.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-sage-600">{row.title}</h3>
                  <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-charcoal-soft">
                    {row.tag}
                  </span>
                </div>
                <p className="text-[15.5px] leading-relaxed text-charcoal-soft">{row.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}
