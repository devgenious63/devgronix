import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ProjectCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta";
import { projectCategories, projects } from "@/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Works — DEVGRONIX" },
      {
        name: "description",
        content:
          "Sample case studies from DEVGRONIX across platforms, mobile, e-commerce, AI and infrastructure. All projects are labelled demo or concept.",
      },
      { property: "og:title", content: "Works — DEVGRONIX" },
      { property: "og:description", content: "Demo and concept case studies across our capabilities." },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Works"
        title="Case studies, honestly labelled"
        description="Each project below is a demo or concept build. They show our structure, decisions and measurement — real client stories are added as approvals come through."
      />

      <Section className="border-t-0">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm transition-colors",
                filter === category
                  ? "border-accent bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {category}
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
