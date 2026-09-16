import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project, Service } from "@/data";
import { Icon } from "./icon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col gap-4 border-t border-border py-8 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon name={service.icon} className="size-5 text-accent" />
      </div>
      <h3 className="text-xl font-semibold md:text-2xl">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground/70 transition-colors group-hover:text-accent">
        Explore service
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-float"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink grid-lines">
        <div className="absolute inset-0 flex items-end p-6">
          <p className="font-display text-2xl leading-tight font-semibold text-ink-foreground md:text-3xl">
            {project.title}
          </p>
        </div>
        <span className="absolute top-4 right-4 rounded-full border border-accent/50 bg-accent/15 px-2.5 py-1 font-mono text-[10px] tracking-widest text-accent uppercase">
          {project.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          <span>{project.category}</span>
          <span className="h-px flex-1 bg-border" />
          <span>{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium transition-colors group-hover:text-accent">
          View case study
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
