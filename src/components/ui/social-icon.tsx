import { cn } from "@/lib/utils";

const paths: Record<"instagram" | "facebook" | "youtube", React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h2.5l.5-4H14V9a1 1 0 0 1 1-1Z" />,
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10.5 10 4 2-4 2Z" fill="currentColor" stroke="none" />
    </>
  ),
};

export function SocialIcon({
  network,
  className,
}: {
  network: "instagram" | "facebook" | "youtube";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      {paths[network]}
    </svg>
  );
}
