import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { yogaStyles } from "@/data/yoga-styles";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/yoga-styles",
    "/services",
    "/pricing",
    "/blog",
    "/about",
    "/testimonials",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const styleRoutes = yogaStyles.map((style) => ({
    url: `${siteConfig.url}/yoga-styles/${style.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...styleRoutes, ...serviceRoutes, ...blogRoutes];
}
