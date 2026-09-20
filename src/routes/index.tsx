import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { Section, SectionHeading } from "@/components/site/section";
import { ProjectCard, ServiceCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta";
import { Icon } from "@/components/site/icon";
import {
  featuredServices,
  publishedProjects,
  publishedTestimonials,
  serviceCategories,
  site,
  techStack,
  trustStrip,
  values,
  workflow,
} from "@/data";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Software Development & Digital Growth Agency | Devgronix",
      description:
        "Devgronix is a digital technology and software solutions agency building custom software, web platforms, mobile apps, cloud infrastructure and AI automation.",
      path: "/",
    }),
    links: canonicalLink("/"),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="Abstract wireframe network of illuminated nodes and glass panels"
          width={1536}
          height={1152}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="grid-lines relative mx-auto w-full max-w-6xl px-5 pt-40 pb-24 md:px-8 md:pt-52 md:pb-36">
          <p className="eyebrow reveal text-ink-foreground/60">{site.tagline}</p>
          <h1 className="reveal mt-6 max-w-4xl text-5xl leading-[0.98] font-semibold text-balance-tight md:text-8xl">
            Software that carries
            <span className="block text-accent"> your business forward.</span>
          </h1>
          <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-xl">
            DEVGRONIX is a digital technology and software solutions agency. We design, engineer and
            grow products for teams who need their systems to hold up under real load.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8">
          {trustStrip.map((item) => (
            <div key={item.label} className="px-2 py-8">
              <p className="font-display text-3xl font-semibold md:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section className="border-t-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technology, creative and digital growth"
            description={`${serviceCategories.map((c) => c.title).join(" · ")} — featured services below, with the full directory one click away.`}
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
          >
            All services <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.slice(0, 8).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section className="bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Sample projects, shown in full"
            description="These case studies are demo and concept builds created to show how we think, structure and measure work."
          />
          <Link
            to="/works"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
          >
            All works <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publishedProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading eyebrow="What we stand for" title="Four commitments we don't trade away" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex gap-5 border-t border-border pt-8">
              <Icon name={value.icon} className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How we work"
          title="A six-step path from idea to growth"
          description="Same structure on every engagement, scaled to the size of the problem."
        />
        <ol className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step) => (
            <li key={step.step} className="border-t border-border py-8 pr-6">
              <span className="font-mono text-xs text-accent">{step.step}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Tech ecosystem */}
      <Section>
        <SectionHeading
          eyebrow="Ecosystem"
          title="The tools we reach for"
          description="Chosen per project for fit and longevity, never for novelty."
        />
        <div className="mt-12 space-y-8">
          {techStack.map((group) => (
            <div key={group.group} className="grid gap-4 border-t border-border pt-6 md:grid-cols-[180px_1fr]">
              <p className="eyebrow pt-1">{group.group}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Sample testimonials"
          title="Illustrative words from sample clients"
          description="Placeholder quotes shown while real client approvals are pending."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {publishedTestimonials.map((t) => (
            <figure key={t.id} className="flex flex-col rounded-lg border border-border bg-card p-7">
              <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="block text-muted-foreground">
                  {t.role}, {t.company} · {t.country}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
