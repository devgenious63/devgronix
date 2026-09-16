import type { Project } from "./types";

/**
 * Sample portfolio. Every entry is clearly labelled Demo or Concept and exists
 * to demonstrate presentation structure until real client work replaces it.
 */
export const projects: Project[] = [
  {
    slug: "atlas-logistics-platform",
    title: "Atlas Logistics Platform",
    client: "Sample Client",
    label: "Demo",
    category: "Platform",
    year: "2026",
    summary:
      "A fleet and freight operations console unifying dispatch, tracking and billing in a single workspace.",
    challenge:
      "Dispatchers juggled three disconnected systems and a spreadsheet, so every delay was discovered late and reconciled by hand.",
    approach: [
      "Mapped the dispatch day hour by hour with operations staff",
      "Built a live consignment board backed by event streaming",
      "Automated invoice generation from completed delivery events",
      "Shipped a driver-facing mobile view for proof of delivery",
    ],
    outcome: [
      { metric: "-42%", label: "Time spent on manual reconciliation" },
      { metric: "3x", label: "Faster dispatch adjustments" },
      { metric: "99.9%", label: "Tracking event delivery" },
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    serviceSlugs: ["custom-software-development", "cloud-devops"],
  },
  {
    slug: "nordwell-health-app",
    title: "Nordwell Health App",
    client: "Sample Client",
    label: "Concept",
    category: "Mobile",
    year: "2026",
    summary:
      "A care companion concept pairing medication tracking with clinician-reviewed guidance.",
    challenge:
      "Patients dropped off treatment plans because reminders felt clinical and progress was invisible.",
    approach: [
      "Designed a calm, low-anxiety visual language",
      "Modelled adherence streaks without punitive mechanics",
      "Prototyped offline-first logging for low-connectivity areas",
      "Defined a clinician review queue for escalations",
    ],
    outcome: [
      { metric: "+28%", label: "Simulated adherence in usability testing" },
      { metric: "6", label: "Care flows prototyped end to end" },
      { metric: "AA", label: "Accessibility target met in design" },
    ],
    stack: ["React Native", "Expo", "Supabase", "Figma"],
    serviceSlugs: ["mobile-app-development", "ui-ux-product-design"],
  },
  {
    slug: "kiln-commerce",
    title: "Kiln Commerce",
    client: "Sample Client",
    label: "Demo",
    category: "E-commerce",
    year: "2025",
    summary:
      "A ceramics marketplace with made-to-order lead times and studio-level inventory accuracy.",
    challenge:
      "Handmade stock and long lead times made standard checkout promises inaccurate and refunds frequent.",
    approach: [
      "Rebuilt the product model around batch availability",
      "Introduced honest lead-time messaging at every step",
      "Reduced checkout to two screens with saved payment",
      "Synced studio production status back to the storefront",
    ],
    outcome: [
      { metric: "+31%", label: "Checkout completion" },
      { metric: "-55%", label: "Lead-time support tickets" },
      { metric: "1.2s", label: "Median page load" },
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Cloudflare"],
    serviceSlugs: ["ecommerce-solutions", "web-platform-engineering"],
  },
  {
    slug: "sable-ai-desk",
    title: "Sable AI Desk",
    client: "Sample Client",
    label: "Concept",
    category: "AI",
    year: "2026",
    summary:
      "An internal support assistant grounded in policy documents with traceable citations on every answer.",
    challenge:
      "Support agents spent their first ten minutes of every ticket hunting through outdated policy PDFs.",
    approach: [
      "Built a retrieval pipeline over versioned policy documents",
      "Required source citations before an answer could render",
      "Added an evaluation set drawn from historical tickets",
      "Routed low-confidence answers to a human queue",
    ],
    outcome: [
      { metric: "-6min", label: "Average handling time in pilot" },
      { metric: "94%", label: "Citation accuracy on eval set" },
      { metric: "100%", label: "Answers with traceable sources" },
    ],
    stack: ["TypeScript", "Vector search", "Edge functions", "Observability tooling"],
    serviceSlugs: ["ai-automation", "custom-software-development"],
  },
  {
    slug: "meridian-brand-site",
    title: "Meridian Brand Site",
    client: "Sample Client",
    label: "Demo",
    category: "Web",
    year: "2025",
    summary:
      "An editorial marketing site for a climate analytics firm, built on a token-driven design system.",
    challenge:
      "A dense, technical story was being flattened into generic SaaS templates that nobody finished reading.",
    approach: [
      "Developed an editorial layout grid with real typographic hierarchy",
      "Built a component library mapped to design tokens",
      "Structured content so every section is its own indexable page",
      "Instrumented scroll depth and CTA engagement",
    ],
    outcome: [
      { metric: "+64%", label: "Average time on page" },
      { metric: "98", label: "Lighthouse performance score" },
      { metric: "2x", label: "Qualified inbound enquiries" },
    ],
    stack: ["TanStack Start", "Tailwind CSS", "TypeScript"],
    serviceSlugs: ["web-platform-engineering", "ui-ux-product-design"],
  },
  {
    slug: "forge-devops-overhaul",
    title: "Forge DevOps Overhaul",
    client: "Sample Client",
    label: "Concept",
    category: "Infrastructure",
    year: "2026",
    summary:
      "A pipeline and infrastructure rebuild turning a fortnightly release ritual into an everyday event.",
    challenge:
      "Deployments needed four people, two hours and a rollback plan nobody trusted.",
    approach: [
      "Codified every environment as reproducible infrastructure",
      "Added preview environments on every pull request",
      "Introduced progressive rollouts with automatic rollback",
      "Wrote runbooks and alert routing for on-call",
    ],
    outcome: [
      { metric: "12x", label: "Deployment frequency" },
      { metric: "-70%", label: "Mean time to recovery" },
      { metric: "-23%", label: "Monthly cloud spend" },
    ],
    stack: ["Terraform", "GitHub Actions", "Kubernetes", "Grafana"],
    serviceSlugs: ["cloud-devops", "growth-analytics"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export const getProjectsByService = (serviceSlug: string) =>
  projects.filter((p) => p.serviceSlugs.includes(serviceSlug));

export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
};
