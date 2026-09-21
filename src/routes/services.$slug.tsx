import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ProjectCard } from "@/components/site/cards";
import { PricingGrid } from "@/components/site/pricing-cards";
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
  getAdjacentServices,
  getPlansForService,
  getProjectsByService,
  getService,
  publishedServices,
} from "@/data";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  breadcrumbSchema,
  canonicalLink,
  faqSchema,
  jsonLd,
  pageMeta,
  serviceSchema,
} from "@/lib/seo";

const serviceCrumbs = (title: string, slug: string) => [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: title, path: `/services/${slug}` },
];

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return {
      service,
      related: getProjectsByService(service.slug),
      plans: getPlansForService(service.slug),
      ...getAdjacentServices(service.slug),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Devgronix" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const path = `/services/${service.slug}`;
    const title = `${service.title} Services | Devgronix`;
    return {
      meta: pageMeta({ title, description: service.summary, path }),
      links: canonicalLink(path),
      scripts: [
        jsonLd(serviceSchema({ name: service.title, description: service.summary, path })),
        jsonLd(breadcrumbSchema(serviceCrumbs(service.title, service.slug))),
        ...(service.faqs && service.faqs.length > 0 ? [jsonLd(faqSchema(service.faqs))] : []),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, related, plans, previous, next } = Route.useLoaderData();
  const others = publishedServices.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <PageHero eyebrow={service.tagline} title={service.title} description={service.summary}>
        <Breadcrumbs items={serviceCrumbs(service.title, service.slug)} className="mt-6" />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/contact" search={{ service: service.slug }} className="btn-primary group">
            Get a Quote
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link to="/pricing/$slug" params={{ slug: service.slug }} className="btn-outline">
            View pricing
          </Link>
          <Link
            to="/services"
            className="focus-ring inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <Section className="border-t-0">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <p className="mt-6 text-xl leading-relaxed text-balance-tight md:text-2xl">
              {service.overview}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl border border-border bg-card p-7">
              <Icon name={service.icon} className="size-6 text-accent" />
              <p className="mt-5 font-display text-lg font-semibold">Outcomes we aim for</p>
              <ul className="mt-4 space-y-3 text-sm">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What we offer */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="What we offer" title="Where this service applies" />
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {service.offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group border-t border-border py-8">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capabilities + tools */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-2.5 border-t border-border pt-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Tools & technologies</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Pricing"
            title={`${service.title} plans`}
            description="Indicative starting points for this service. Combined engagements are scoped as one proposal."
          />
          <Link
            to="/pricing/$slug"
            params={{ slug: service.slug }}
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
          >
            Full pricing page <ArrowRight className="size-4" />
          </Link>
        </div>
        <PricingGrid plans={plans} serviceSlug={service.slug} className="mt-12" />
      </Section>

      {/* Related work */}
      {related.length > 0 ? (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects using this capability"
              description="Demo and concept case studies illustrating the work in practice."
            />
            <Link
              to="/works"
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
            >
              View all work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* Process */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="Our approach" title="How this engagement runs" />
        <div className="mt-12 grid gap-x-10 md:grid-cols-3">
          {service.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <div className="border-t border-border py-8">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Questions" title="Common questions" />
          <Accordion type="single" collapsible className="mt-10 max-w-3xl">
            {service.faqs.map((faq) => (
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
        </Section>
      ) : null}

      {/* Explore other services */}
      <Section className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Link
              to="/services/$slug"
              params={{ slug: previous.slug }}
              className="group card-interactive rounded-xl border border-border bg-card p-6"
            >
              <span className="eyebrow">Previous service</span>
              <p className="mt-3 inline-flex items-center gap-2 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                {previous.title}
              </p>
            </Link>
          ) : null}
          {next ? (
            <Link
              to="/services/$slug"
              params={{ slug: next.slug }}
              className="group card-interactive rounded-xl border border-border bg-card p-6 sm:text-right"
            >
              <span className="eyebrow">Next service</span>
              <p className="mt-3 inline-flex items-center gap-2 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                {next.title}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </p>
            </Link>
          ) : null}
        </div>

        <p className="eyebrow mt-12">Explore other services</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="focus-ring rounded-full border border-border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Need ${service.title.toLowerCase()}?`}
        serviceSlug={service.slug}
      />
    </>
  );
}
