import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-cream-deep py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="From the Blog" title="Guides, tips, and stories from our instructors" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {latest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/blog" variant="outline" size="lg">
            Read More Articles <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
