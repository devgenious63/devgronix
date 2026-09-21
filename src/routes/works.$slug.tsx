import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta";
import { getAdjacentProjects, getProject, getService } from "@/data";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbSchema, canonicalLink, jsonLd, pageMeta } from "@/lib/seo";

const workCrumbs = (title: string, slug: string) => [
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
  { name: title, path: `/works/${slug}` },
];

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, ...getAdjacentProjects(project.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — DEVGRONIX" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} (${project.label}) — DEVGRONIX` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} — DEVGRONIX` },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { project, previous, next } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`${project.label} · ${project.category} · ${project.year}`}
        title={project.title}
        description={project.summary}
      >
        <div className="mt-8">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All works
          </Link>
        </div>
      </PageHero>

      <Section className="border-t-0">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div>
              <p className="eyebrow">The challenge</p>
              <p className="mt-4 text-lg leading-relaxed md:text-xl">{project.challenge}</p>
            </div>
            <div>
              <p className="eyebrow">Our approach</p>
              <ul className="mt-6 space-y-4">
                {project.approach.map((item, i) => (
                  <li key={item} className="flex gap-4 border-t border-border pt-4">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="eyebrow">Client</p>
              <p className="mt-2 text-sm">{project.client}</p>
              <p className="eyebrow mt-6">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
              <p className="eyebrow mt-6">Services</p>
              <div className="mt-3 flex flex-col gap-2">
                {project.serviceSlugs.map((slug) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return (
                    <Link
                      key={slug}
                      to="/services/$slug"
                      params={{ slug }}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              This is a {project.label.toLowerCase()} case study created to demonstrate our process.
              Figures are illustrative.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Outcome" title="What the work moved" />
        <div className="mt-12 grid gap-px sm:grid-cols-3">
          {project.outcome.map((o) => (
            <div key={o.label} className="border-t border-border py-8 pr-6">
              <p className="font-display text-4xl font-semibold text-accent md:text-5xl">{o.metric}</p>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-6">
          {previous ? (
            <Link
              to="/works/$slug"
              params={{ slug: previous.slug }}
              className="group inline-flex items-center gap-3"
            >
              <ArrowLeft className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              <span>
                <span className="eyebrow block">Previous</span>
                <span className="font-display text-lg font-semibold">{previous.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/works/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-3 text-right"
            >
              <span>
                <span className="eyebrow block">Next</span>
                <span className="font-display text-lg font-semibold">{next.title}</span>
              </span>
              <ArrowRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </Link>
          ) : null}
        </div>
      </Section>

      <CtaBand
        title="Want something like this, for real?"
        {...(project.serviceSlugs[0] ? { serviceSlug: project.serviceSlugs[0] } : {})}
      />
    </>
  );
}
