import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta";
import { Icon } from "@/components/site/icon";
import { getServicesByCategory, serviceCategories, site, techStack, trustStrip, values, workflow } from "@/data";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbSchema, canonicalLink, jsonLd, pageMeta } from "@/lib/seo";

const aboutCrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About Devgronix | Digital Technology & Software Agency",
      description:
        "Devgronix is a remote-first digital technology agency of engineers, designers and strategists building software that outlasts the launch.",
      path: "/about",
    }),
    links: canonicalLink("/about"),
    scripts: [jsonLd(breadcrumbSchema(aboutCrumbs))],
  }),
  component: AboutPage,
});

const team = [
  { role: "Engineering", detail: "Platform, application and mobile engineers with production ownership experience." },
  { role: "Design", detail: "Product designers who work in systems, not screens." },
  { role: "Infrastructure", detail: "Cloud and reliability specialists embedded from day one." },
  { role: "Strategy", detail: "Analysts who tie every build to a number the business cares about." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small team with production scars"
        description="DEVGRONIX was formed by engineers and designers who had spent years inheriting other people's shortcuts. We build the version that survives the handover."
      >
        <Breadcrumbs items={aboutCrumbs} className="mt-6" />
      </PageHero>

      <Section className="border-t-0">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              We work remote-first in small senior teams rather than large layered ones, serving
              clients in India, Saudi Arabia, the UAE and internationally. Every project has a named
              lead, a written scope and a weekly demo.
            </p>
            <p>
              Our tagline —{" "}
              <span className="font-display font-semibold text-accent">{site.tagline}</span> — is the
              shape of every engagement: create the right thing, develop it properly, then grow it
              with evidence.
            </p>
            <p className="text-base text-muted-foreground">{site.location}</p>
          </div>
          <div className="grid grid-cols-2 gap-px self-start">
            {trustStrip.map((item) => (
              <div key={item.label} className="border-t border-border py-6 pr-4">
                <p className="font-display text-3xl font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Capabilities"
          title="Three practices, one team"
          description="Technology, creative and growth work under a single point of contact."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <div key={category.slug} className="border-t border-border pt-6">
              <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {getServicesByCategory(category.slug).map((service) => (
                  <li key={service.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="Four commitments we don't trade away" />
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

      <Section>
        <SectionHeading eyebrow="Workflow" title="Six steps, every time" />
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

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The team"
          title="Disciplines in the room"
          description="Individual profiles are added once the team page goes live."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.role} className="rounded-lg border border-border bg-card p-6">
              <p className="font-display text-lg font-semibold">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technology"
          title="The tools we reach for"
          description="Chosen per project for fit and longevity, never for novelty."
        />
        <div className="mt-12 space-y-8">
          {techStack.map((group) => (
            <div
              key={group.group}
              className="grid gap-4 border-t border-border pt-6 md:grid-cols-[180px_1fr]"
            >
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

      <CtaBand title="Work with a team that stays accountable." />
    </>
  );
}
