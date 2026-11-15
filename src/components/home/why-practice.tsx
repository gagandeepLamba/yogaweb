import { Brain, HeartPulse, Moon, Sparkles, Sprout, Wind } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StyleIcon } from "@/components/ui/style-icon";

const left = [
  {
    title: "Build strength and flexibility",
    body: "Consistent practice lengthens tight muscles, builds functional strength and protects joints — the foundation for moving well at any age.",
  },
  {
    title: "Calm your nervous system",
    body: "Slow breathing and mindful movement lower stress hormones, making it easier to stay steady when life gets loud.",
  },
  {
    title: "Sleep and recover better",
    body: "Evening Yin, restorative and breathwork practices help the body wind down so you fall asleep faster and wake up refreshed.",
  },
];

const right = [
  {
    title: "Sharpen focus and clarity",
    body: "Meditation and pranayama train attention, which carries over into work, study and relationships.",
  },
  {
    title: "Ease everyday aches",
    body: "Alignment-led classes relieve desk-bound stiffness in the back, neck and hips, and support long-term joint health.",
  },
  {
    title: "Grow as a person",
    body: "Yoga becomes a journey of self-awareness, discipline and inner balance that you bring into everyday life.",
  },
];

const orbit = [
  { Icon: Wind, angle: -60, tone: "bg-terracotta-100 text-terracotta-700" },
  { Icon: Moon, angle: 20, tone: "bg-sage-100 text-sage-600" },
  { Icon: HeartPulse, angle: 100, tone: "bg-terracotta-100 text-terracotta-700" },
  { Icon: Brain, angle: 180, tone: "bg-sage-100 text-sage-600" },
  { Icon: Sprout, angle: 250, tone: "bg-terracotta-100 text-terracotta-700" },
];

function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      {[100, 78, 56].map((size) => (
        <span
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/10"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sage-600 text-terracotta-300 shadow-lg shadow-sage-900/20">
        <StyleIcon icon="lotus" className="h-12 w-12" />
      </span>
      {orbit.map(({ Icon, angle, tone }) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 50;
        const y = 50 + Math.sin(rad) * 50;
        return (
          <span
            key={angle}
            className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md ${tone}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon className="h-5 w-5" />
          </span>
        );
      })}
    </div>
  );
}

export function WhyPractice() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Your next step"
          title="Why Make Yoga Part of Your Week?"
          description="A regular practice reshapes more than your body. Here is what students tell us changes first."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,340px)_1fr]">
          <div className="space-y-10 lg:text-right">
            {left.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-semibold text-sage-600">{item.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-charcoal-soft">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="order-first lg:order-none">
            <Orbit />
          </div>
          <div className="space-y-10">
            {right.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-semibold text-sage-600">{item.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-charcoal-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 flex items-center justify-center gap-2 text-center text-[13px] text-charcoal-faint">
          <Sparkles className="h-4 w-4 text-terracotta-400" />
          Yoga complements — and does not replace — medical care.
        </p>
      </Container>
    </section>
  );
}
