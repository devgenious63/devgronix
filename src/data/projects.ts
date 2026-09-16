import type { Project } from "./types";

/**
 * Sample portfolio. Every entry is clearly labelled Demo or Concept and exists
 * to demonstrate presentation structure until real client work replaces it.
 * Projects relate to services through `serviceSlugs`, so a project appears on
 * the relevant service pages automatically.
 */
export const projects: Project[] = [
  {
    id: "prj-atlas",
    slug: "atlas-logistics-platform",
    title: "Atlas Logistics Platform",
    client: "Sample Client",
    label: "Demo",
    contentType: "demo",
    category: "Platform",
    year: "2026",
    summary:
      "A fleet and freight operations console unifying dispatch, tracking and billing in a single workspace.",
    overview:
      "A demonstration build showing how a mid-sized logistics operator could replace three disconnected tools with one operations console used by dispatchers, drivers and finance.",
    challenge:
      "Dispatchers juggled three disconnected systems and a spreadsheet, so every delay was discovered late and reconciled by hand.",
    approach: [
      "Mapped the dispatch day hour by hour with operations staff",
      "Built a live consignment board backed by event streaming",
      "Automated invoice generation from completed delivery events",
      "Shipped a driver-facing mobile view for proof of delivery",
    ],
    solution:
      "A single operations console with a live consignment board, automated billing from delivery events and a lightweight driver app for proof of delivery.",
    features: [
      "Live dispatch board with drag-to-assign",
      "Automated invoice generation",
      "Driver proof-of-delivery capture",
      "Role-based access and audit log",
    ],
    outcome: [
      { metric: "3", label: "Systems consolidated into one console" },
      { metric: "14", label: "Operational screens designed and built" },
      { metric: "99.9%", label: "Tracking event delivery target in testing" },
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    serviceSlugs: ["custom-software-development", "cloud-devops", "ui-ux-design"],
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "prj-nordwell",
    slug: "nordwell-health-app",
    title: "Nordwell Health App",
    client: "Sample Client",
    label: "Concept",
    contentType: "demo",
    category: "Mobile",
    year: "2026",
    summary: "A care companion concept pairing medication tracking with clinician-reviewed guidance.",
    overview:
      "A concept project exploring how a patient-facing app can support treatment adherence without feeling clinical or punitive.",
    challenge:
      "Patients dropped off treatment plans because reminders felt clinical and progress was invisible.",
    approach: [
      "Designed a calm, low-anxiety visual language",
      "Modelled adherence streaks without punitive mechanics",
      "Prototyped offline-first logging for low-connectivity areas",
      "Defined a clinician review queue for escalations",
    ],
    solution:
      "An offline-first mobile app with gentle reminders, visible progress and a clinician review queue for escalations.",
    features: [
      "Medication schedule and reminders",
      "Offline logging with background sync",
      "Progress view without punitive streaks",
      "Clinician escalation queue",
    ],
    outcome: [
      { metric: "6", label: "Care flows prototyped end to end" },
      { metric: "AA", label: "Accessibility target met in design" },
      { metric: "2", label: "Rounds of task-based usability testing" },
    ],
    stack: ["React Native", "Expo", "Supabase", "Figma"],
    serviceSlugs: ["mobile-app-development", "ui-ux-design"],
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "prj-kiln",
    slug: "kiln-commerce",
    title: "Kiln Commerce",
    client: "Sample Client",
    label: "Demo",
    contentType: "demo",
    category: "Web",
    year: "2025",
    summary:
      "A ceramics marketplace with made-to-order lead times and studio-level inventory accuracy.",
    overview:
      "A demonstration storefront showing how honest lead-time messaging and a shorter checkout can work for made-to-order products.",
    challenge:
      "Handmade stock and long lead times made standard checkout promises inaccurate and refunds frequent.",
    approach: [
      "Rebuilt the product model around batch availability",
      "Introduced honest lead-time messaging at every step",
      "Reduced checkout to two screens with saved payment",
      "Synced studio production status back to the storefront",
    ],
    solution:
      "A storefront where availability reflects real studio capacity, with a two-screen checkout and production status visible to buyers.",
    features: [
      "Batch-based availability model",
      "Lead-time messaging across the funnel",
      "Two-screen checkout",
      "Studio production dashboard",
    ],
    outcome: [
      { metric: "2", label: "Checkout steps, down from five" },
      { metric: "1.2s", label: "Median page load in testing" },
      { metric: "100%", label: "Products showing real lead times" },
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Cloudflare"],
    serviceSlugs: ["web-development", "ui-ux-design", "digital-marketing"],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "prj-meridian",
    slug: "meridian-ai-assistant",
    title: "Meridian AI Assistant",
    client: "Sample Client",
    label: "Concept",
    contentType: "demo",
    category: "AI",
    year: "2026",
    summary:
      "An internal assistant answering policy and process questions from a company's own documentation.",
    overview:
      "A concept build showing how a grounded assistant can cut the time support teams spend hunting through policy documents.",
    challenge:
      "Support staff spent hours each week searching scattered policy PDFs, and answers varied between agents.",
    approach: [
      "Indexed the document estate with source-level citations",
      "Built an evaluation set from real historic questions",
      "Added confidence thresholds with human escalation",
      "Instrumented per-answer cost and latency logging",
    ],
    solution:
      "A retrieval-grounded assistant embedded in the support tool, citing the source paragraph for every answer and escalating when confidence is low.",
    features: [
      "Citation-backed answers",
      "Evaluation harness on historic questions",
      "Confidence thresholds and escalation",
      "Cost and latency dashboard",
    ],
    outcome: [
      { metric: "120", label: "Evaluation questions in the test set" },
      { metric: "100%", label: "Answers returned with a source citation" },
      { metric: "3", label: "Systems integrated into the workflow" },
    ],
    stack: ["Python", "pgvector", "OpenAI", "TypeScript", "AWS"],
    serviceSlugs: ["ai-automation", "custom-software-development", "data-analytics"],
    featured: true,
    status: "published",
    order: 4,
  },
  {
    id: "prj-verdant",
    slug: "verdant-brand-identity",
    title: "Verdant Brand Identity",
    client: "Sample Client",
    label: "Concept",
    contentType: "demo",
    category: "Branding",
    year: "2026",
    summary:
      "A full identity system for a sustainable agriculture venture, from positioning to rollout templates.",
    overview:
      "A concept identity exploring how an agritech venture can look modern without losing the credibility its buyers expect.",
    challenge:
      "The venture spanned farming, logistics and software, and had no visual language that held those audiences together.",
    approach: [
      "Ran a positioning workshop across the three business lines",
      "Developed a mark that works at field-signage and app-icon scale",
      "Built a colour and type system with accessible contrast",
      "Produced rollout templates for print, social and decks",
    ],
    solution:
      "A single identity system with a flexible mark, documented colour and type rules, and templates that cover every surface the venture uses.",
    features: [
      "Primary mark with lockup variants",
      "Accessible colour and type system",
      "Brand guidelines document",
      "Print, social and presentation templates",
    ],
    outcome: [
      { metric: "3", label: "Business lines unified under one identity" },
      { metric: "28", label: "Pages of brand guidelines produced" },
      { metric: "40+", label: "Rollout templates delivered" },
    ],
    stack: ["Figma", "Adobe Illustrator", "Adobe InDesign"],
    serviceSlugs: ["branding-logo-design", "graphic-design", "content-creative-services"],
    featured: true,
    status: "published",
    order: 5,
  },
  {
    id: "prj-pulse",
    slug: "pulse-video-campaign",
    title: "Pulse Video Campaign",
    client: "Sample Client",
    label: "Demo",
    contentType: "demo",
    category: "Video",
    year: "2026",
    summary:
      "A short-form video system for a fitness brand: one shoot, a month of platform-native content.",
    overview:
      "A demonstration campaign showing how a single production day can supply a month of short-form content across platforms.",
    challenge:
      "The brand produced content in bursts, so posting stopped whenever the marketing team got busy.",
    approach: [
      "Built a repeatable shot list covering a month of formats",
      "Created an animated title and caption system",
      "Edited vertical, square and landscape masters from one grade",
      "Handed over editable templates for in-house cutdowns",
    ],
    solution:
      "A modular edit system: one shoot, one grade, and a template set producing platform-native cuts on a weekly schedule.",
    features: [
      "Animated title and lower-third system",
      "Multi-ratio export pipeline",
      "Auto-captioning workflow",
      "Editable in-house templates",
    ],
    outcome: [
      { metric: "24", label: "Finished cuts from one production day" },
      { metric: "3", label: "Aspect ratios delivered per edit" },
      { metric: "1", label: "Template system handed to the in-house team" },
    ],
    stack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    serviceSlugs: ["video-editing-motion-graphics", "social-media-management", "graphic-design"],
    featured: true,
    status: "published",
    order: 6,
  },
  {
    id: "prj-northline",
    slug: "northline-growth-programme",
    title: "Northline Growth Programme",
    client: "Sample Client",
    label: "Demo",
    contentType: "demo",
    category: "Marketing",
    year: "2025",
    summary:
      "A combined SEO, paid and content programme for a B2B services firm entering the GCC market.",
    overview:
      "A demonstration growth programme showing how search, paid and content work together when entering a new region.",
    challenge:
      "The firm had strong domestic demand but no visibility in a new region, and no tracking linking spend to enquiries.",
    approach: [
      "Rebuilt tracking so every enquiry had a verifiable source",
      "Published region-specific service pages against mapped intent",
      "Ran tightly structured paid campaigns per service line",
      "Reviewed performance fortnightly and moved budget accordingly",
    ],
    solution:
      "A single programme where content answers the search demand, paid covers the gaps, and one dashboard shows what each channel contributed.",
    features: [
      "Region-specific landing pages",
      "Keyword clusters mapped to service lines",
      "Attribution dashboard",
      "Fortnightly optimisation cycle",
    ],
    outcome: [
      { metric: "36", label: "Pages published against mapped intent" },
      { metric: "1", label: "Dashboard covering every channel" },
      { metric: "4", label: "Service lines with dedicated campaigns" },
    ],
    stack: ["GA4", "Google Ads", "Ahrefs", "Looker Studio", "Next.js"],
    serviceSlugs: ["seo-search-optimization", "digital-marketing", "content-creative-services"],
    featured: false,
    status: "published",
    order: 7,
  },
  {
    id: "prj-cadence",
    slug: "cadence-saas-console",
    title: "Cadence SaaS Console",
    client: "Sample Client",
    label: "Concept",
    contentType: "demo",
    category: "SaaS",
    year: "2026",
    summary:
      "A multi-tenant scheduling product with workspace billing, roles and an internal support console.",
    overview:
      "A concept SaaS build covering the parts that rarely get demoed: tenancy, permissions, billing states and internal tooling.",
    challenge:
      "Scheduling tools in the category handled the calendar well but fell apart on team permissions and billing edge cases.",
    approach: [
      "Modelled workspaces, roles and invitations first",
      "Implemented plans, trials, upgrades and failed-payment states",
      "Built an internal console for support without database access",
      "Instrumented activation and retention from day one",
    ],
    solution:
      "A production-shaped SaaS foundation where tenancy, billing and support tooling are first-class rather than retrofitted.",
    features: [
      "Workspace and role management",
      "Trials, upgrades and dunning flows",
      "Internal support console",
      "Activation analytics",
    ],
    outcome: [
      { metric: "4", label: "Billing states handled end to end" },
      { metric: "3", label: "Permission tiers modelled" },
      { metric: "1", label: "Support console replacing raw SQL access" },
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Stripe", "Supabase"],
    serviceSlugs: ["saas-web-applications", "ui-ux-design", "data-analytics"],
    featured: false,
    status: "published",
    order: 8,
  },
];

export const publishedProjects = projects
  .filter((p) => p.status === "published")
  .sort((a, b) => a.order - b.order);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export const getProject = (slug: string) => publishedProjects.find((p) => p.slug === slug);

export const getProjectsByService = (serviceSlug: string) =>
  publishedProjects.filter((p) => p.serviceSlugs.includes(serviceSlug));

export const getAdjacentProjects = (slug: string) => {
  const index = publishedProjects.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? publishedProjects[index - 1] : publishedProjects[publishedProjects.length - 1],
    next: index < publishedProjects.length - 1 ? publishedProjects[index + 1] : publishedProjects[0],
  };
};

/** Filters derived from service data rather than hard-coded. */
export const projectServiceFilters = () => {
  const counts = new Map<string, number>();
  for (const project of publishedProjects) {
    for (const slug of project.serviceSlugs) counts.set(slug, (counts.get(slug) ?? 0) + 1);
  }
  return counts;
};
