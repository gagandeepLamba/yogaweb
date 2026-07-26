"use client";

import { useState } from "react";
import type { Frequency, PricingContent, SessionType } from "@/types";
import { PriceCard } from "@/components/pricing/price-card";
import { cn } from "@/lib/utils";

const sessionTypes: { id: SessionType; label: string }[] = [
  { id: "group", label: "Group Classes" },
  { id: "private", label: "Private Sessions" },
];

const frequencies: { id: Frequency; label: string }[] = [
  { id: "daily", label: "Daily / Drop-In" },
  { id: "weekly", label: "Weekly" },
  { id: "monthly", label: "Monthly" },
];

export function PricingTables({ pricing }: { pricing: PricingContent }) {
  const [sessionType, setSessionType] = useState<SessionType>("group");
  const [frequency, setFrequency] = useState<Frequency>("monthly");

  const plans = pricing[sessionType][frequency];

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-charcoal/10 bg-white p-1.5 shadow-sm shadow-charcoal/5">
          {sessionTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setSessionType(type.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                sessionType === type.id ? "bg-sage-600 text-cream" : "text-charcoal-soft hover:text-charcoal"
              )}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-charcoal/10 bg-white/60 p-1.5">
          {frequencies.map((freq) => (
            <button
              key={freq.id}
              type="button"
              onClick={() => setFrequency(freq.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                frequency === freq.id
                  ? "bg-terracotta-500 text-cream"
                  : "text-charcoal-soft hover:text-charcoal"
              )}
            >
              {freq.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PriceCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-charcoal-faint">
        Prices shown are indicative starting rates in USD and may vary by instructor or location.
        Message us on WhatsApp for exact, up-to-date pricing.
      </p>
    </div>
  );
}
