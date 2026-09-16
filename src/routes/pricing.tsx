import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs, pricingTiers } from "@/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DEVGRONIX" },
      {
        name: "description",
        content:
          "Transparent starting prices for DEVGRONIX engagements: focused launches, full product builds and embedded partner retainers.",
      },
      { property: "og:title", content: "Pricing — DEVGRONIX" },
      { property: "og:description", content: "Indicative pricing for launches, builds and retainers." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear starting points, fixed proposals"
        description="These figures are where engagements typically begin. After a discovery call you receive a fixed-scope proposal with a firm number."
      />

      <Section className="border-t-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-xl border border-border bg-card p-8",
                tier.featured && "border-accent shadow-float",
              )}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold">{tier.name}</p>
                {tier.featured ? (
                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] tracking-widest text-accent-foreground uppercase">
                    Most chosen
                  </span>
                ) : null}
              </div>
              <p className="mt-6 font-display text-4xl font-semibold">{tier.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tier.cadence}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90",
                  tier.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground",
                )}
              >
                Request a proposal
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="font-display text-xl font-semibold">Something larger or regulated?</p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Multi-team programmes, compliance-heavy sectors and migrations are quoted individually
              after a technical assessment.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent md:mt-0"
          >
            Book an assessment
          </Link>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="Questions we get before signing" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {pricingFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <CtaBand title="Get a fixed number for your scope." />
    </>
  );
}
