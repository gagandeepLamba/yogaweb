import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, Info } from "lucide-react";
import { yogaStyles, getYogaStyleBySlug } from "@/data/yoga-styles";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlobField } from "@/components/ui/blob-field";
import { StyleIcon } from "@/components/ui/style-icon";
import { YogaStyleCard } from "@/components/yoga/yoga-style-card";
import { siteConfig } from "@/lib/site-config";
import { yogaStyleImages } from "@/lib/images";
import { jsonLdScriptProps } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return yogaStyles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const style = getYogaStyleBySlug(slug);
  if (!style) return {};

  const title = `${style.name} — ${style.tagline}`;
  const description = `${style.shortDescription} Level: ${style.level}. Duration: ${style.duration}.`;

  return {
    title,
    description,
    alternates: { canonical: `/yoga-styles/${style.slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/yoga-styles/${style.slug}` },
  };
}

export default async function YogaStyleDetailPage({ params }: Props) {
  const { slug } = await params;
  const style = getYogaStyleBySlug(slug);

  if (!style) notFound();

  const image = yogaStyleImages[style.slug];
  const related = style.relatedSlugs
    .map((relatedSlug) => getYogaStyleBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: style.name,
    description: style.shortDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    audience: { "@type": "Audience", audienceType: style.whoItsFor },
    url: `${siteConfig.url}/yoga-styles/${style.slug}`,
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />

      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <BlobField />
        <Container>
          <nav className="flex items-center gap-1.5 text-sm text-charcoal-faint" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sage-700">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/yoga-styles" className="hover:text-sage-700">Yoga Styles</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">{style.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:items-center">
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-sage-600 text-cream">
                  <StyleIcon icon={style.icon} className="h-10 w-10" />
                </div>
                <div>
                  <h1 className="font-display text-4xl font-medium text-balance text-charcoal sm:text-5xl">
                    {style.name}
                  </h1>
                  <p className="mt-2 text-lg font-medium text-terracotta-600">{style.tagline}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="sage">{style.level}</Badge>
                <Badge variant="terracotta">{style.duration}</Badge>
                <Badge variant="gold">{style.intensity} Intensity</Badge>
              </div>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal-soft">
                {style.shortDescription}
              </p>
            </div>

            {image ? (
              <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-sage-100 shadow-xl shadow-sage-900/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">Key Benefits</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {style.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 rounded-2xl bg-white/70 p-4 text-sm text-charcoal-soft shadow-sm shadow-charcoal/5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">Who It&rsquo;s For</h2>
              <p className="mt-4 leading-relaxed text-charcoal-soft">{style.whoItsFor}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">What to Expect in Class</h2>
              <ol className="mt-5 space-y-4">
                {style.whatToExpect.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 font-display text-sm font-semibold text-sage-800">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-charcoal-soft">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex gap-3 rounded-3xl border border-gold-400/50 bg-gold-300/15 p-5">
              <Info className="h-5 w-5 shrink-0 text-terracotta-600" />
              <p className="text-sm leading-relaxed text-charcoal-soft">
                <span className="font-semibold text-charcoal">Good to know: </span>
                {style.goodToKnow}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {style.focusAreas.map((area) => (
                <Badge key={area} variant="cream">{area}</Badge>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-charcoal/8 bg-white p-7 shadow-sm shadow-charcoal/5">
              <h3 className="font-display text-lg font-medium text-charcoal">Ready to try {style.name}?</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Available as a group class, private session, or live online — daily, weekly, or monthly.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button
                  href={siteConfig.contact.whatsappHref(`Hi! I'd like to book a ${style.name} class.`)}
                  variant="whatsapp"
                  className="w-full"
                >
                  Book on WhatsApp
                </Button>
                <Button href="/pricing" variant="outline" className="w-full">
                  See Pricing <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {related.length > 0 ? (
                <div className="mt-8 border-t border-charcoal/8 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal-faint">
                    You might also like
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/yoga-styles/${item.slug}`}
                          className="flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-charcoal-soft transition-colors hover:bg-sage-50 hover:text-sage-800"
                        >
                          <StyleIcon icon={item.icon} className="h-5 w-5 text-sage-600" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-cream-deep py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-2xl font-medium text-charcoal">Related Styles</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <YogaStyleCard key={item.slug} style={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
