import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ProjectCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta";
import { getService, projectServiceFilters, publishedProjects } from "@/data";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbSchema, canonicalLink, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
];

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: pageMeta({
      title: "Portfolio & Case Studies | Devgronix",
      description:
        "Sample Devgronix case studies across platforms, mobile apps, e-commerce, AI and infrastructure. Every project on this page is labelled demo or concept work.",
      path: "/works",
    }),
    links: canonicalLink("/works"),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [filter, setFilter] = useState("All");
  const filters = [
    { slug: "All", label: "All" },
    ...Array.from(projectServiceFilters().keys()).map((slug) => ({
      slug,
      label: getService(slug)?.title ?? slug,
    })),
  ];
  const visible =
    filter === "All"
      ? publishedProjects
      : publishedProjects.filter((p) => p.serviceSlugs.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="Works"
        title="Case studies, honestly labelled"
        description="Each project below is a demo or concept build. They show our structure, decisions and measurement — real client stories are added as approvals come through."
      />

      <Section className="border-t-0">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setFilter(item.slug)}
              className={cn(
                "focus-ring rounded-full border border-border px-4 py-2 text-sm transition-colors",
                filter === item.slug
                  ? "border-accent bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <CtaBand title="Your project could be the next one here." />
    </>
  );
}
