import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ProjectCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta";
import { Icon } from "@/components/site/icon";
import { getProjectsByService, getService, services } from "@/data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service, related: getProjectsByService(service.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — DEVGRONIX" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} — DEVGRONIX` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.title} — DEVGRONIX` },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, related } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow={service.tagline} title={service.title} description={service.summary}>
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
        </div>
      </PageHero>

      <Section className="border-t-0">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">What's included</p>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 border-t border-border pt-4 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Outcomes we aim for</p>
            <ul className="mt-6 space-y-4">
              {service.outcomes.map((item) => (
                <li key={item} className="border-t border-border pt-4 font-display text-xl font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 rounded-lg border border-border bg-card p-5">
              <Icon name={service.icon} className="size-5 text-accent" />
              <p className="text-sm text-muted-foreground">{service.tagline}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Our approach" title="How this engagement runs" />
        <div className="mt-12 grid gap-px md:grid-cols-3">
          {service.process.map((step, i) => (
            <div key={step.title} className="border-t border-border py-8 pr-6">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Related work"
            title="Sample projects using this capability"
            description="Demo and concept case studies illustrating the work in practice."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="bg-surface">
        <p className="eyebrow">Also explore</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
