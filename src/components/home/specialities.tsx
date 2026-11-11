import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";
import { serviceImages } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Staggered pill-shaped service cards. `all` shows every service instead of the first four. */
export function Specialities({ all = false }: { all?: boolean }) {
  const featured = all ? services : services.slice(0, 4);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Specialities" title="Our Services Will Make You Glow" />

        <div className="mx-auto mt-12 flex max-w-[1192px] flex-wrap justify-center gap-6 lg:gap-5">
          {featured.map((service, i) => {
            const image = serviceImages[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "group relative block aspect-[283/430] w-full max-w-[280px] overflow-hidden rounded-[999px] bg-sage-100 sm:w-[calc(50%-12px)] lg:w-[calc(25%-15px)]",
                  all && "lg:w-[calc(20%-16px)]",
                  i % 2 === 1 && "lg:mt-8"
                )}
              >
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors group-hover:from-sage-900/80" />
                <span className="absolute inset-x-6 bottom-9 text-center font-display text-[22px] leading-tight text-white">
                  {service.title.replace(/^Private 1-on-1 /, "Private ").replace(/^Group Public /, "Group ")}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
