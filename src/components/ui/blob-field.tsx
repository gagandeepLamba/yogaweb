import { cn } from "@/lib/utils";

export function BlobField({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sage-200/60 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-terracotta-200/50 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gold-300/40 blur-3xl animate-float-slow" />
    </div>
  );
}
