import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { getYogaStyleBySlug } from "@/data/yoga-styles";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlobField } from "@/components/ui/blob-field";
import { StyleIcon } from "@/components/ui/style-icon";
import { ServiceCard } from "@/components/services/service-card";
import { siteConfig } from "@/lib/site-config";
import { jsonLdScriptProps } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, url: `${siteConfig.url}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedStyles = service.relatedStyleSlugs
    .map((styleSlug) => getYogaStyleBySlug(styleSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: siteConfig.name, sameAs: siteConfig.url },
    areaServed: siteConfig.contact.address.city,
    url: `${siteConfig.url}/services/${service.slug}`,
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
            <Link href="/services" className="hover:text-sage-700">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">{service.title}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-terracotta-500 text-cream">
              <StyleIcon icon={service.icon} className="h-10 w-10" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-medium text-balance text-charcoal sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-sage-700">{service.tagline}</p>
            </div>
          </div>

          <Badge variant="cream" className="mt-6">{service.format}</Badge>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal-soft">{service.summary}</p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="space-y-4">
              {service.description.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-charcoal-soft">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">What&rsquo;s Included</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 rounded-2xl bg-white/70 p-4 text-sm text-charcoal-soft shadow-sm shadow-charcoal/5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">Ideal For</h2>
              <p className="mt-4 leading-relaxed text-charcoal-soft">{service.idealFor}</p>
            </div>

            {relatedStyles.length > 0 ? (
              <div>
                <h2 className="font-display text-2xl font-medium text-charcoal">Popular Styles for This Format</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {relatedStyles.map((style) => (
                    <Link key={style.slug} href={`/yoga-styles/${style.slug}`}>
                      <Badge variant="sage" className="cursor-pointer hover:bg-sage-200">
                        {style.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-charcoal/8 bg-white p-7 shadow-sm shadow-charcoal/5">
              <h3 className="font-display text-lg font-medium text-charcoal">Ready to get started?</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Message us with your goals and schedule — we&rsquo;ll help you find the right fit.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button
                  href={siteConfig.contact.whatsappHref(`Hi! I'd like to learn more about ${service.title}.`)}
                  variant="whatsapp"
                  className="w-full"
                >
                  Book on WhatsApp
                </Button>
                <Button href="/pricing" variant="outline" className="w-full">
                  See Pricing <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="ghost" className="w-full">
                  Send a Message
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-cream-deep py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-2xl font-medium text-charcoal">Other Ways to Practice</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
