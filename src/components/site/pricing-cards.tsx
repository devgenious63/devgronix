import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { PricingPlan } from "@/data";
import { pricingNote } from "@/data";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function PricingGrid({
  plans,
  serviceSlug,
  className,
}: {
  plans: PricingPlan[];
  serviceSlug: string;
  className?: string;
}) {
  if (plans.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Pricing for this service is scoped individually. Request a quote and we'll send a written
        proposal.
      </p>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 60}>
            <article
              className={cn(
                "card-interactive flex h-full flex-col rounded-xl border bg-card p-7",
                plan.popular ? "border-accent shadow-soft" : "border-border",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                {plan.popular ? (
                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] tracking-widest text-accent-foreground uppercase">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <div className="mt-6 border-t border-border pt-6">
                {plan.billingType !== "custom" ? (
                  <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                    Starting from
                  </p>
                ) : null}
                <p className="mt-1 font-display text-3xl font-semibold">{plan.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.billingType === "custom" ? "Scoped to requirements" : plan.billingType}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                search={{ service: serviceSlug }}
                className={cn(
                  "group mt-8 w-full",
                  plan.popular ? "btn-primary" : "btn-outline",
                )}
              >
                {plan.ctaText}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">{pricingNote}</p>
    </div>
  );
}
