import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta";
import { Icon } from "@/components/site/icon";
import { Reveal } from "@/components/site/reveal";
import { getServicesByCategory, serviceCategories } from "@/data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Technology, Design & Growth | DEVGRONIX" },
      {
        name: "description",
        content:
          "Web and mobile development, custom software, SaaS, AI, cloud, UI/UX, graphic design, branding, video, marketing, SEO and content services from DEVGRONIX.",
      },
      { property: "og:title", content: "Services — Technology, Design & Growth | DEVGRONIX" },
      {
        property: "og:description",
        content: "Fifteen services across technology, design and digital growth, delivered by one team.",
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
        title="Technology, design and growth under one team"
        description="Development, creative and marketing capabilities that work together, so a product launch does not need three agencies and four handovers."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {serviceCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="btn-outline !py-2 !text-sm"
            >
              {category.title}
            </a>
          ))}
        </div>
      </PageHero>

      {serviceCategories.map((category, catIndex) => {
        const items = getServicesByCategory(category.slug);
        return (
          <Section
            key={category.slug}
            id={category.slug}
            className={catIndex % 2 === 1 ? "bg-surface" : undefined}
          >
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow">
                  {String(category.order).padStart(2, "0")} — Practice
                </p>
                <h2 className="mt-3 text-3xl leading-[1.05] font-semibold text-balance-tight md:text-5xl">
                  {category.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {category.description}
                </p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {items.length} services
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-10 md:grid-cols-2 xl:grid-cols-3">
              {items.map((service, i) => (
                <Reveal key={service.slug} delay={i * 50}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group focus-ring relative flex h-full flex-col gap-4 border-t border-border py-8"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        name={service.icon}
                        className="size-5 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                      />
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(service.order).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold transition-transform duration-300 ease-out group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <li
                          key={cap}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-foreground/70 transition-colors duration-200 group-hover:text-accent">
                      Explore service
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      <Section>
        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-border bg-card p-8 md:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold md:text-3xl">Looking for pricing?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Every service has its own plans and starting points — packages, monthly retainers or
              per-project scopes, depending on the work.
            </p>
          </div>
          <Link to="/pricing" className="btn-primary group">
            View pricing
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Section>

      <CtaBand title="Not sure which service you need?" description="Describe the outcome you're after and we'll tell you honestly what it takes — and what it doesn't." />
    </>
  );
}
