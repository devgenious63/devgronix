import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project, Service } from "@/data";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

/**
 * Service card — editorial row with a consistent hover language:
 * accent rule expands, icon lifts, arrow travels, title shifts.
 */
export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className?: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={cn(
        "group focus-ring relative flex flex-col gap-4 border-t border-border py-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon
          name={service.icon}
          className="size-5 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
        />
      </div>
      <h3 className="text-xl font-semibold transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-2xl">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground/70 transition-colors duration-200 group-hover:text-accent">
        Explore service
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className="group card-interactive flex flex-col overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <div className="grid-lines absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end p-6">
          <p className="font-display text-2xl leading-tight font-semibold text-ink-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 md:text-3xl">
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
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium transition-colors duration-200 group-hover:text-accent">
          View case study
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
