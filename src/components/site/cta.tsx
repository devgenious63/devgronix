import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site } from "@/data";

export function CtaBand({
  title = "Let's build something worth keeping.",
  description = "Tell us the problem, the deadline and the constraints. We'll come back with a scope, a timeline and a fixed figure.",
  serviceSlug,
}: {
  title?: string;
  description?: string;
  serviceSlug?: string;
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
              search={serviceSlug ? { service: serviceSlug } : undefined}
              className="btn-primary group"
            >
              Get a Quote
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="btn-outline !border-white/20 text-ink-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
