import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { budgetOptions, publishedServices, serviceCategories, site } from "@/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search['service'] === "string" ? search['service'] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — DEVGRONIX" },
      {
        name: "description",
        content:
          "Tell DEVGRONIX about your project. Share your goals, timeline and budget and get a scoped proposal back.",
      },
      { property: "og:title", content: "Contact — DEVGRONIX" },
      { property: "og:description", content: "Start a project with DEVGRONIX." },
    ],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
  service: z.string().trim().min(1, "Choose a service"),
  budget: z.string().trim().min(1, "Choose a budget range"),
  message: z
    .string()
    .trim()
    .min(20, "Please give us at least a couple of sentences")
    .max(2000, "Message is too long"),
});

type Errors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

const fieldClass =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function ContactPage() {
  const { service: serviceSlug } = Route.useSearch();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const preselected =
    publishedServices.find((s) => s.slug === serviceSlug)?.title ?? "";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = inquirySchema.safeParse(Object.fromEntries(form.entries()));

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSent(true);
    toast.success("Inquiry received. We'll reply within one business day.");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building"
        description="Share the problem, the deadline and the constraints. We reply within one business day with next steps or a scoping call."
      />

      <Section className="border-t-0">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          {sent ? (
            <div className="rounded-xl border border-accent bg-card p-10">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-5" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">Inquiry received</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. A member of the team will read your brief and reply within
                one business day. Note that this form currently confirms locally — connect a backend
                to store and email submissions.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input name="name" className={fieldClass} placeholder="Your full name" maxLength={100} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input name="email" type="email" className={fieldClass} placeholder="you@company.com" maxLength={255} />
                </Field>
              </div>

              <Field label="Company" hint="Optional" error={errors.company}>
                <input name="company" className={fieldClass} placeholder="Company or project name" maxLength={120} />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Service interest" error={errors.service}>
                  <select
                    name="service"
                    key={preselected}
                    defaultValue={preselected}
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceCategories.map((category) => (
                      <optgroup key={category.slug} label={category.title}>
                        {publishedServices
                          .filter((s) => s.category === category.slug)
                          .map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
                <Field label="Budget range" error={errors.budget}>
                  <select name="budget" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project details" error={errors.message}>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={2000}
                  className={cn(fieldClass, "resize-y")}
                  placeholder="What are you building, who is it for, and when does it need to be live?"
                />
              </Field>

              <button
                type="submit"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Send inquiry
              </button>
            </form>
          )}

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="eyebrow">Direct</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{site.phone}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{site.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-display text-base font-semibold text-foreground">What happens next</p>
              <p className="mt-3">
                We read every brief ourselves. If it's a fit, you get a 30-minute scoping call, then
                a written proposal with scope, timeline and a fixed figure.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm font-medium">
        {label}
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
