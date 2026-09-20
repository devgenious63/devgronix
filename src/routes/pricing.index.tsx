import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta";
import { Icon } from "@/components/site/icon";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getPlansForService,
  getServicesByCategory,
  pricingFaqs,
  pricingNote,
  serviceCategories,
} from "@/data";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbSchema, canonicalLink, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

export const Route = createFileRoute("/pricing/")({
  head: () => ({
    meta: pageMeta({
      title: "Pricing by Service | Devgronix",
      description:
        "Choose a service to see its pricing. Starting points for web, mobile, software, AI, cloud, design, branding, video, digital marketing, SEO and content work.",
      path: "/pricing",
    }),
    links: canonicalLink("/pricing"),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: PricingIndex,
});

function PricingIndex() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Choose a service to see its pricing"
        description="Each service is priced the way it is actually delivered — per project, per month, per design or per video. Pick one below to see its plans."
      >
        <Breadcrumbs items={crumbs} className="mt-6" />
      </PageHero>

      {serviceCategories.map((category, catIndex) => (
        <Section
          key={category.slug}
          className={catIndex === 0 ? "border-t-0" : catIndex % 2 === 1 ? "bg-surface" : undefined}
        >
          <SectionHeading
            eyebrow={`${String(category.order).padStart(2, "0")} — Practice`}
            title={category.title}
            description={category.description}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {getServicesByCategory(category.slug).map((service, i) => {
              const plans = getPlansForService(service.slug);
              const entry = plans.find((p) => p.billingType !== "custom");
              return (
                <Reveal key={service.slug} delay={i * 50}>
                  <Link
                    to="/pricing/$slug"
                    params={{ slug: service.slug }}
                    className="group card-interactive flex h-full flex-col rounded-xl border border-border bg-card p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        name={service.icon}
                        className="size-5 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                      />
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                    {entry ? (
                      <p className="mt-6 border-t border-border pt-4 text-sm">
                        <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                          From
                        </span>
                        <span className="ml-2 font-display text-xl font-semibold">{entry.price}</span>
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          {entry.billingType}
                        </span>
                      </p>
                    ) : null}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{pricingNote}</p>
        <SectionHeading className="mt-16" eyebrow="Questions" title="Pricing, answered plainly" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {pricingFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link to="/contact" className="btn-primary group mt-10">
          Custom requirements? Get a Quote
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </Section>

      <CtaBand title="Tell us the scope, get a firm number." />
    </>
  );
}
