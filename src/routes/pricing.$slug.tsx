import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { PricingGrid } from "@/components/site/pricing-cards";
import { CtaBand } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPlansForService, getService, pricingFaqs, publishedServices } from "@/data";

export const Route = createFileRoute("/pricing/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service, plans: getPlansForService(service.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Pricing not found — DEVGRONIX" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const description = `Indicative pricing for ${service.title.toLowerCase()} from DEVGRONIX. Plans, starting points and what each one includes.`;
    return {
      meta: [
        { title: `${service.title} Pricing — DEVGRONIX` },
        { name: "description", content: description },
        { property: "og:title", content: `${service.title} Pricing — DEVGRONIX` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePricing,
});

function ServicePricing() {
  const { service, plans } = Route.useLoaderData();
  const others = publishedServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Pricing — ${service.title}`}
        title={`${service.title} pricing`}
        description={service.summary}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/services/$slug" params={{ slug: service.slug }} className="btn-outline">
            Explore service
          </Link>
          <Link to="/contact" search={{ service: service.slug }} className="btn-primary group">
            Get a Quote
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/pricing"
            className="focus-ring inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All pricing
          </Link>
        </div>
      </PageHero>

      <Section className="border-t-0">
        <PricingGrid plans={plans} serviceSlug={service.slug} />
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Switch service"
          title="Pricing for another service"
          description="Every service is priced independently. Pick another to compare."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/pricing/$slug"
              params={{ slug: s.slug }}
              className="focus-ring rounded-full border border-border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions" title="Pricing, answered plainly" />
        <Reveal>
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
        </Reveal>
      </Section>

      <CtaBand
        title="Custom requirements? Get a quote."
        description={`Tell us what you need from ${service.title.toLowerCase()} and we'll send a written, fixed-scope proposal.`}
        serviceSlug={service.slug}
      />
    </>
  );
}
