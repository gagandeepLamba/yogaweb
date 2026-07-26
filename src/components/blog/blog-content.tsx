import type { ContentBlock } from "@/types";

export function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} className="pt-4 font-display text-2xl font-medium text-charcoal">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="pt-2 font-display text-xl font-medium text-charcoal">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 leading-relaxed text-charcoal-soft">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="rounded-2xl border-l-4 border-terracotta-400 bg-terracotta-50 px-6 py-5 italic leading-relaxed text-charcoal"
              >
                &ldquo;{block.text}&rdquo;
                {block.cite ? <footer className="mt-2 text-sm not-italic text-charcoal-faint">— {block.cite}</footer> : null}
              </blockquote>
            );
          case "p":
          default:
            return (
              <p key={index} className="leading-relaxed text-charcoal-soft">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
