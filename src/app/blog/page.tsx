import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Yoga Blog — Guides, Tips & Stories",
  description:
    "Practical guides on yoga styles, wellness habits, prenatal practice, and studio life from the instructors at " +
    siteConfig.name +
    ".",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Shanti Journal"
        title="Guides, tips, and stories from our instructors"
        description="Practical, honest writing to help you choose the right practice and build a routine that actually sticks."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <BlogExplorer posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
