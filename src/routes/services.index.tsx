import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ServiceCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta";
import { services, workflow } from "@/data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — DEVGRONIX" },
      {
        name: "description",
        content:
          "Custom software, web platforms, mobile apps, product design, cloud and DevOps, AI automation, e-commerce and growth analytics from DEVGRONIX.",
      },
      { property: "og:title", content: "Services — DEVGRONIX" },
      {
        property: "og:description",
        content: "Eight core capabilities covering design, engineering, infrastructure and growth.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities built to work together"
        description="We combine design, engineering, infrastructure and measurement in one team, so nothing gets lost between disciplines."
      />

      <Section className="border-t-0">
        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <p className="eyebrow">Delivery model</p>
        <ol className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step) => (
            <li key={step.step} className="border-t border-border py-8 pr-6">
              <span className="font-mono text-xs text-accent">{step.step}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="Not sure which of these you need?" description="Describe the outcome you're after and we'll tell you what it actually takes." />
    </>
  );
}
