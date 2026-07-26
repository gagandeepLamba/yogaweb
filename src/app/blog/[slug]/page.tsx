import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogCard } from "@/components/blog/blog-card";
import { CtaBanner } from "@/components/home/cta-banner";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";
import { jsonLdScriptProps } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script {...jsonLdScriptProps(jsonLd)} />

      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <nav className="flex items-center gap-1.5 text-sm text-charcoal-faint" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sage-700">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-sage-700">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="line-clamp-1 text-charcoal">{post.title}</span>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <Badge variant="sage">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-charcoal-faint">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-medium text-balance text-charcoal sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-y border-charcoal/8 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-700">
              <User className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-charcoal">{post.author}</p>
              <p className="text-charcoal-faint">
                {post.authorRole} · {formatDate(post.date)}
              </p>
            </div>
          </div>

          <div className="mt-8 text-lg">
            <BlogContent blocks={post.content} />
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-charcoal/8 pt-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="cream">#{tag}</Badge>
            ))}
          </div>
        </Container>
      </article>

      <section className="bg-cream-deep py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-2xl font-medium text-charcoal">Keep Reading</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {fallbackRelated.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
