import type { IconKey } from "@/types";
import { cn } from "@/lib/utils";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Glyph({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "lotus":
      return (
        <>
          <path d="M24 34c0-8 4-13 4-13s4 5 4 13-4 8-4 8-4 0-4-8Z" {...common} />
          <path d="M24 34c0-8-4-13-4-13s-4 5-4 13 4 8 4 8 4 0 4-8Z" {...common} />
          <path d="M24 32c-2-9-9-13-9-13s-2 8 3 15 6 6 6 6" {...common} />
          <path d="M24 32c2-9 9-13 9-13s2 8-3 15-6 6-6 6" {...common} />
          <path d="M14 38h20" {...common} />
        </>
      );
    case "flow":
      return (
        <path
          d="M6 20c4-6 8-6 12 0s8 6 12 0 8-6 12 0M6 30c4-6 8-6 12 0s8 6 12 0 8-6 12 0"
          {...common}
        />
      );
    case "discipline":
      return (
        <>
          <rect x="12" y="12" width="24" height="24" rx="3" {...common} />
          <circle cx="24" cy="24" r="6" {...common} />
        </>
      );
    case "energy":
      return (
        <path
          d="M24 24c0-4-4-4-4 0s4 6 4 0-6-8-6 0 6 10 6 0-8-10-8 0"
          {...common}
        />
      );
    case "moon":
      return <path d="M28 10a15 15 0 1 0 10 24 12 12 0 0 1-10-24Z" {...common} />;
    case "rest":
      return (
        <>
          <path d="M8 30c6 4 26 4 32 0" {...common} />
          <circle cx="14" cy="21" r="3.5" {...common} />
          <path d="M19 24c3 3 12 3 17-1" {...common} />
        </>
      );
    case "power":
      return <path d="M26 6 12 27h9l-3 15 17-24h-10l3-12Z" {...common} />;
    case "alignment":
      return (
        <>
          <line x1="24" y1="6" x2="24" y2="42" {...common} />
          <circle cx="24" cy="12" r="3" {...common} />
          <line x1="16" y1="24" x2="32" y2="24" {...common} />
          <line x1="18" y1="34" x2="30" y2="34" {...common} />
        </>
      );
    case "flame":
      return (
        <path
          d="M24 6c2 6-4 8-4 14a4 4 0 0 0 8 0c2 2 3 5 3 8a11 11 0 1 1-22 0c0-9 9-13 9-13s2-4 6-9Z"
          {...common}
        />
      );
    case "baby":
      return (
        <>
          <circle cx="24" cy="14" r="6" {...common} />
          <path d="M12 40c0-8 5-14 12-14s12 6 12 14" {...common} />
        </>
      );
    case "aerial":
      return (
        <>
          <line x1="8" y1="10" x2="40" y2="10" {...common} />
          <path d="M12 10v8M36 10v8" {...common} />
          <path d="M12 18c0 10 6 16 12 16s12-6 12-16" {...common} />
        </>
      );
    case "chair":
      return (
        <path
          d="M14 8v18M34 20v18M14 26h20M14 20h20v-1a5 5 0 0 0-5-5H19a5 5 0 0 0-5 5v1ZM14 32H10M34 32h4"
          {...common}
        />
      );
    case "kids":
      return (
        <path
          d="m24 6 4.5 11.5L40 20l-9 8 2.5 12L24 33l-9.5 7L17 28l-9-8 11.5-2.5Z"
          {...common}
        />
      );
    case "breath":
      return (
        <>
          <circle cx="24" cy="24" r="6" {...common} />
          <circle cx="24" cy="24" r="12" {...common} />
          <circle cx="24" cy="24" r="18" {...common} strokeOpacity={0.5} />
        </>
      );
    case "private":
      return (
        <>
          <circle cx="24" cy="15" r="6" {...common} />
          <path d="M11 40c1-9 6-14 13-14s12 5 13 14" {...common} />
        </>
      );
    case "group":
      return (
        <>
          <circle cx="16" cy="16" r="5" {...common} />
          <circle cx="32" cy="16" r="5" {...common} />
          <circle cx="24" cy="15" r="5.5" {...common} />
          <path d="M6 39c1-7 5-11 10-11M42 39c-1-7-5-11-10-11" {...common} />
          <path d="M15 39c1-8 5-12 9-12s8 4 9 12" {...common} />
        </>
      );
    case "online":
      return (
        <>
          <circle cx="24" cy="35" r="2.5" fill="currentColor" stroke="none" />
          <path d="M16 29a11 11 0 0 1 16 0" {...common} />
          <path d="M9 22a20 20 0 0 1 30 0" {...common} />
        </>
      );
    case "corporate":
      return (
        <path
          d="M10 42V10h16v32M26 42V18h12v24M10 42h28M15 16h4M15 22h4M15 28h4M31 24h4M31 30h4M31 36h4"
          {...common}
        />
      );
    case "retreat":
      return (
        <>
          <circle cx="34" cy="12" r="4" {...common} />
          <path d="M6 38 18 18l7 9 5-7 12 18Z" {...common} />
        </>
      );
    default:
      return <circle cx="24" cy="24" r="16" {...common} />;
  }
}

export function StyleIcon({ icon, className }: { icon: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <Glyph icon={icon} />
    </svg>
  );
}
