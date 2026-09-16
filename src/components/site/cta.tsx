import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site } from "@/data";

export function CtaBand({
  title = "Let's build something worth keeping.",
  description = "Tell us the problem, the deadline and the constraints. We'll come back with a scope, a timeline and a fixed figure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid-lines rounded-xl border border-white/10 p-8 md:p-14">
          <p className="eyebrow text-ink-foreground/60">{site.tagline}</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-[1.05] font-semibold text-balance-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base text-ink-foreground/70 md:text-lg">{description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
