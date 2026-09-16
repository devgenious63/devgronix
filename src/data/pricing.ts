import type { BillingType, Faq, PricingPlan } from "./types";

/**
 * Service-specific pricing. Every plan belongs to exactly one service through
 * `serviceId` (the service slug), so an admin panel can manage plans per
 * service and both /pricing/:slug and the service detail page update together.
 *
 * All figures are indicative starting points, not fixed quotes.
 */

type PlanSeed = {
  name: string;
  description: string;
  price: string;
  billingType: BillingType;
  features: string[];
  popular?: boolean;
  ctaText?: string;
};

const buildPlans = (serviceId: string, seeds: PlanSeed[]): PricingPlan[] =>
  seeds.map((seed, index) => ({
    id: `${serviceId}-plan-${index + 1}`,
    serviceId,
    name: seed.name,
    description: seed.description,
    price: seed.price,
    billingType: seed.billingType,
    features: seed.features,
    popular: seed.popular ?? false,
    ctaText: seed.ctaText ?? "Get a quote",
    status: "published" as const,
    order: index + 1,
  }));

const customPlan = (
  serviceId: string,
  order: number,
  description: string,
): PricingPlan => ({
  id: `${serviceId}-plan-custom`,
  serviceId,
  name: "Custom",
  description,
  price: "Let's talk",
  billingType: "custom",
  features: [
    "Scoped to your exact requirements",
    "Fixed written proposal before work starts",
    "Dedicated point of contact",
  ],
  popular: false,
  ctaText: "Request a quote",
  status: "published",
  order,
});

export const pricingPlans: PricingPlan[] = [
  ...buildPlans("web-development", [
    {
      name: "Starter Website",
      description: "A credible presence for a new business or a focused campaign.",
      price: "$1,200",
      billingType: "per project",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form and basic SEO",
        "Analytics setup",
        "2 weeks typical delivery",
      ],
    },
    {
      name: "Business Website",
      description: "A structured multi-page site with a content system your team runs.",
      price: "$3,500",
      billingType: "per project",
      features: [
        "Up to 15 pages",
        "Design system implementation",
        "CMS with editor training",
        "Performance and accessibility pass",
        "30 days post-launch support",
      ],
      popular: true,
    },
    {
      name: "Advanced Web Solution",
      description: "Portals, integrations and multi-language platforms.",
      price: "$8,500",
      billingType: "per project",
      features: [
        "Custom functionality and integrations",
        "Multi-language / multi-region support",
        "Authentication and gated content",
        "Automated deployment pipeline",
        "90 days post-launch support",
      ],
    },
  ]),
  customPlan("web-development", 4, "Large platforms, migrations or ongoing web retainers."),

  ...buildPlans("mobile-app-development", [
    {
      name: "App MVP",
      description: "A focused first release to validate the core use case.",
      price: "$9,000",
      billingType: "per project",
      features: [
        "Single core flow, iOS and Android",
        "Authentication and profiles",
        "Backend integration",
        "Store submission support",
      ],
    },
    {
      name: "Business App",
      description: "A production app with offline support and notifications.",
      price: "$18,000",
      billingType: "per project",
      features: [
        "Multiple modules and roles",
        "Offline-first data layer",
        "Push notifications",
        "Crash and usage telemetry",
        "60 days post-launch support",
      ],
      popular: true,
    },
    {
      name: "App Care Retainer",
      description: "Ongoing releases, monitoring and store maintenance.",
      price: "$1,800",
      billingType: "per month",
      features: [
        "Monthly release cycle",
        "OS and dependency upgrades",
        "Crash triage and hotfixes",
        "Feature backlog delivery",
      ],
    },
  ]),
  customPlan("mobile-app-development", 4, "Complex apps, hardware integrations or long roadmaps."),

  ...buildPlans("custom-software-development", [
    {
      name: "Discovery & Blueprint",
      description: "Architecture, scope and a costed delivery plan before you commit.",
      price: "$2,500",
      billingType: "per project",
      features: [
        "Workflow mapping workshops",
        "Technical architecture document",
        "Prioritised delivery roadmap",
        "Fixed-scope build proposal",
      ],
    },
    {
      name: "Core System Build",
      description: "A working internal system covering your primary operation.",
      price: "$15,000",
      billingType: "per project",
      features: [
        "Custom data model and workflows",
        "Role-based access and audit trail",
        "Third-party integrations",
        "Automated tests and CI",
        "Documentation and handover",
      ],
      popular: true,
    },
    {
      name: "Enterprise Platform",
      description: "Multi-module systems with migration and compliance requirements.",
      price: "$40,000",
      billingType: "per project",
      features: [
        "Multi-module architecture",
        "Legacy data migration",
        "SSO and compliance controls",
        "Monitoring and runbooks",
        "Structured team training",
      ],
    },
  ]),
  customPlan("custom-software-development", 4, "Phased programmes or embedded engineering teams."),

  ...buildPlans("saas-web-applications", [
    {
      name: "SaaS MVP",
      description: "The smallest product a customer would pay for.",
      price: "$12,000",
      billingType: "per project",
      features: [
        "Auth, workspaces and roles",
        "Core product flow",
        "Subscription billing integration",
        "Admin basics",
      ],
    },
    {
      name: "Growth Platform",
      description: "A production SaaS with billing, admin tooling and analytics.",
      price: "$28,000",
      billingType: "per project",
      features: [
        "Multi-tenant architecture",
        "Plans, trials and upgrades",
        "Admin and support console",
        "Usage metering and limits",
        "Activation analytics",
      ],
      popular: true,
    },
    {
      name: "Product Partner",
      description: "An embedded squad shipping continuously on your roadmap.",
      price: "$7,500",
      billingType: "per month",
      features: [
        "Dedicated cross-functional team",
        "Two-week delivery increments",
        "Quarterly roadmap reviews",
        "Priority incident response",
      ],
    },
  ]),
  customPlan("saas-web-applications", 4, "Marketplace, fintech or compliance-heavy products."),

  ...buildPlans("ai-automation", [
    {
      name: "AI Feasibility Sprint",
      description: "Two weeks to prove whether the use case is worth building.",
      price: "$3,000",
      billingType: "per project",
      features: [
        "Use-case assessment",
        "Working proof of concept",
        "Evaluation results on your data",
        "Cost and rollout estimate",
      ],
    },
    {
      name: "Automation Build",
      description: "One workflow automated end to end and integrated into your tools.",
      price: "$9,500",
      billingType: "per project",
      features: [
        "Retrieval pipeline on your data",
        "Integration with existing systems",
        "Evaluation harness and guardrails",
        "Logging and cost controls",
      ],
      popular: true,
    },
    {
      name: "AI Operations",
      description: "Ongoing tuning, evaluation and cost management.",
      price: "$2,200",
      billingType: "per month",
      features: [
        "Monthly evaluation runs",
        "Prompt and model tuning",
        "Cost monitoring and optimisation",
        "New use-case discovery",
      ],
    },
  ]),
  customPlan("ai-automation", 4, "Multi-workflow programmes or private model deployments."),

  ...buildPlans("cloud-devops", [
    {
      name: "Cloud Audit",
      description: "A written review of architecture, security posture and spend.",
      price: "$1,800",
      billingType: "per project",
      features: [
        "Architecture and security review",
        "Cost analysis with savings list",
        "Prioritised remediation plan",
        "Findings walkthrough session",
      ],
    },
    {
      name: "Pipeline & Infrastructure",
      description: "Infrastructure as code plus an automated release pipeline.",
      price: "$6,500",
      billingType: "per project",
      features: [
        "Terraform environments",
        "CI/CD with preview deployments",
        "Monitoring and alerting",
        "Backup and recovery policy",
        "Runbook documentation",
      ],
      popular: true,
    },
    {
      name: "Managed DevOps",
      description: "Ongoing operations, monitoring and release support.",
      price: "$2,500",
      billingType: "per month",
      features: [
        "Pipeline and infrastructure upkeep",
        "Monitoring and alert response",
        "Monthly cost review",
        "Security patching",
      ],
    },
  ]),
  customPlan("cloud-devops", 4, "Multi-account migrations or regulated environments."),

  ...buildPlans("data-analytics", [
    {
      name: "Measurement Setup",
      description: "Clean tracking and a first dashboard your team can trust.",
      price: "$2,000",
      billingType: "per project",
      features: [
        "Event schema and metric definitions",
        "Tracking implementation",
        "One executive dashboard",
        "Definitions documentation",
      ],
    },
    {
      name: "Analytics Platform",
      description: "Pipelines, warehouse modelling and role-specific dashboards.",
      price: "$7,500",
      billingType: "per project",
      features: [
        "Warehouse and data pipelines",
        "Modelled reporting layer",
        "Dashboards per team",
        "Data quality monitoring",
      ],
      popular: true,
    },
    {
      name: "Insights Retainer",
      description: "Ongoing reporting, experimentation and review sessions.",
      price: "$1,900",
      billingType: "per month",
      features: [
        "Monthly insight report",
        "Experiment design and analysis",
        "Dashboard maintenance",
        "Quarterly strategy review",
      ],
    },
  ]),
  customPlan("data-analytics", 4, "Complex data estates or bespoke modelling work."),

  ...buildPlans("ui-ux-design", [
    {
      name: "UX Audit",
      description: "An expert review of an existing product with a fix list.",
      price: "$1,500",
      billingType: "per project",
      features: [
        "Heuristic and accessibility review",
        "Annotated findings",
        "Prioritised recommendations",
        "Walkthrough session",
      ],
    },
    {
      name: "Product Design",
      description: "Research, flows and high-fidelity screens for a full product area.",
      price: "$6,000",
      billingType: "per project",
      features: [
        "Discovery and user flows",
        "Wireframes and prototypes",
        "High-fidelity screens",
        "Developer-ready specifications",
        "Two revision rounds",
      ],
      popular: true,
    },
    {
      name: "Design System",
      description: "A documented component and token library for your team.",
      price: "$9,000",
      billingType: "per project",
      features: [
        "Design tokens and type scale",
        "Component library in Figma",
        "Usage documentation",
        "Developer handover sessions",
      ],
    },
  ]),
  customPlan("ui-ux-design", 4, "Embedded design support or multi-product systems."),

  ...buildPlans("graphic-design", [
    {
      name: "Basic Design Package",
      description: "Individual assets when you need them, on a short turnaround.",
      price: "$45",
      billingType: "per design",
      features: [
        "Single social or print asset",
        "2 concept options",
        "2 revision rounds",
        "Source files included",
      ],
    },
    {
      name: "Professional Design Package",
      description: "A monthly creative set for teams publishing regularly.",
      price: "$650",
      billingType: "per month",
      features: [
        "Up to 20 designs per month",
        "Reusable template system",
        "Dedicated designer",
        "48-hour typical turnaround",
      ],
      popular: true,
    },
    {
      name: "Premium Design Package",
      description: "High-volume creative with art direction and print production.",
      price: "$1,600",
      billingType: "per month",
      features: [
        "Up to 50 designs per month",
        "Art direction and concepting",
        "Print-ready production",
        "Priority 24-hour turnaround",
      ],
    },
  ]),
  customPlan("graphic-design", 4, "Campaign-scale creative or ongoing studio support."),

  ...buildPlans("branding-logo-design", [
    {
      name: "Logo Essentials",
      description: "A primary mark with the variants you need day to day.",
      price: "$600",
      billingType: "per package",
      features: [
        "3 logo concepts",
        "Primary and secondary lockups",
        "Colour and mono versions",
        "Full file export set",
      ],
    },
    {
      name: "Brand Identity",
      description: "A complete visual identity with guidelines.",
      price: "$2,400",
      billingType: "per package",
      features: [
        "Positioning workshop",
        "Logo system",
        "Colour, type and imagery direction",
        "Brand guidelines document",
        "Stationery templates",
      ],
      popular: true,
    },
    {
      name: "Brand System",
      description: "Identity plus rollout assets across digital and print.",
      price: "$5,500",
      billingType: "per package",
      features: [
        "Everything in Brand Identity",
        "Social and campaign templates",
        "Presentation and document system",
        "Launch asset pack",
        "Team rollout session",
      ],
    },
  ]),
  customPlan("branding-logo-design", 4, "Rebrands, naming projects or multi-brand architecture."),

  ...buildPlans("video-editing-motion-graphics", [
    {
      name: "Short-form Editing",
      description: "Reels, shorts and ad cutdowns from your footage.",
      price: "$60",
      billingType: "per video",
      features: [
        "Up to 60 seconds",
        "Captions and basic graphics",
        "Licensed music",
        "Vertical and square exports",
      ],
    },
    {
      name: "Professional Video",
      description: "Product explainers and brand edits with motion graphics.",
      price: "$450",
      billingType: "per video",
      features: [
        "Up to 3 minutes",
        "Script and storyboard",
        "Custom motion graphics",
        "Colour grading and sound mix",
        "2 revision rounds",
      ],
      popular: true,
    },
    {
      name: "Premium Video Package",
      description: "A monthly content pipeline across long and short form.",
      price: "$2,200",
      billingType: "per month",
      features: [
        "2 long-form edits per month",
        "8 short-form cutdowns",
        "Animated title and lower-third system",
        "Priority turnaround",
      ],
    },
  ]),
  customPlan("video-editing-motion-graphics", 4, "Campaign films, event coverage or full production."),

  ...buildPlans("digital-marketing", [
    {
      name: "Campaign Launch",
      description: "One channel set up properly, with tracking that works.",
      price: "$900",
      billingType: "per month",
      features: [
        "Single channel management",
        "Campaign structure and setup",
        "Conversion tracking",
        "Monthly performance report",
      ],
    },
    {
      name: "Growth Campaigns",
      description: "Multi-channel management with creative testing.",
      price: "$2,200",
      billingType: "per month",
      features: [
        "Up to 3 channels",
        "Creative production and testing",
        "Landing page optimisation",
        "Bi-weekly optimisation cycles",
        "Full-funnel reporting",
      ],
      popular: true,
    },
    {
      name: "Performance Partner",
      description: "A full acquisition programme with strategy and lifecycle work.",
      price: "$4,500",
      billingType: "per month",
      features: [
        "Multi-market campaign strategy",
        "Dedicated performance lead",
        "Email and lifecycle automation",
        "Attribution dashboard",
        "Weekly reviews",
      ],
    },
  ]),
  customPlan("digital-marketing", 4, "Large ad budgets or multi-region launches. Media spend billed separately."),

  ...buildPlans("social-media-management", [
    {
      name: "Starter Social",
      description: "A consistent presence on one or two platforms.",
      price: "$550",
      billingType: "per month",
      features: [
        "12 posts per month",
        "2 platforms",
        "Content calendar",
        "Monthly report",
      ],
    },
    {
      name: "Business Social",
      description: "Regular content with video and community management.",
      price: "$1,200",
      billingType: "per month",
      features: [
        "20 posts plus 4 short videos",
        "Up to 4 platforms",
        "Community management",
        "Campaign support",
        "Monthly analytics review",
      ],
      popular: true,
    },
    {
      name: "Premium Social",
      description: "High-volume content with strategy and paid amplification support.",
      price: "$2,500",
      billingType: "per month",
      features: [
        "Daily posting cadence",
        "8 short-form videos",
        "Influencer and partnership support",
        "Paid amplification setup",
        "Dedicated social lead",
      ],
    },
  ]),
  customPlan("social-media-management", 4, "Multi-brand or multi-language social programmes."),

  ...buildPlans("seo-search-optimization", [
    {
      name: "SEO Audit",
      description: "A one-off technical and content baseline with a fix list.",
      price: "$800",
      billingType: "per project",
      features: [
        "Technical crawl and analysis",
        "Keyword gap review",
        "Prioritised action plan",
        "Findings walkthrough",
      ],
    },
    {
      name: "SEO Growth",
      description: "Ongoing technical fixes and content against target clusters.",
      price: "$1,400",
      billingType: "per month",
      features: [
        "Monthly technical fixes",
        "4 content briefs per month",
        "On-page optimisation",
        "Rank and traffic reporting",
      ],
      popular: true,
    },
    {
      name: "SEO Authority",
      description: "Aggressive programmes across competitive or multi-region search.",
      price: "$3,200",
      billingType: "per month",
      features: [
        "Multi-region / multi-language SEO",
        "10 content briefs per month",
        "Digital PR and link acquisition",
        "Structured data programme",
        "Monthly strategy call",
      ],
    },
  ]),
  customPlan("seo-search-optimization", 4, "Enterprise sites, migrations or marketplace SEO."),

  ...buildPlans("content-creative-services", [
    {
      name: "Copy Essentials",
      description: "Focused copy for a page, a launch or a campaign.",
      price: "$120",
      billingType: "per package",
      features: [
        "Up to 2 pages of copy",
        "Messaging alignment",
        "2 revision rounds",
        "SEO-aware structure",
      ],
    },
    {
      name: "Content Programme",
      description: "A monthly publishing rhythm with research and editing.",
      price: "$1,100",
      billingType: "per month",
      features: [
        "4 long-form articles per month",
        "Editorial calendar",
        "Research and interviews",
        "Editing and proofreading",
      ],
      popular: true,
    },
    {
      name: "Full Creative",
      description: "Content plus campaign creative across channels.",
      price: "$2,400",
      billingType: "per month",
      features: [
        "8 pieces per month",
        "Ad and email copy",
        "Case-study production",
        "Tone-of-voice guidelines",
        "Dedicated editor",
      ],
    },
  ]),
  customPlan("content-creative-services", 4, "Technical documentation or localisation programmes."),
];

export const getPlansForService = (serviceSlug: string) =>
  pricingPlans
    .filter((plan) => plan.serviceId === serviceSlug && plan.status === "published")
    .sort((a, b) => a.order - b.order);

export const pricingNote =
  "Final pricing depends on project scope, requirements and complexity. Every figure below is a starting point, confirmed in a written proposal after a short discovery call.";

export const pricingFaqs: Faq[] = [
  {
    question: "Are these prices fixed?",
    answer:
      "No. They are indicative starting points. After a discovery call we send a fixed-scope proposal with a firm figure and timeline, so nothing moves mid-project.",
  },
  {
    question: "Which currencies and markets do you work in?",
    answer:
      "Prices are shown in USD for clarity. We work with clients in India, Saudi Arabia, the UAE and internationally, and can invoice in local currency where appropriate.",
  },
  {
    question: "Can services be combined?",
    answer:
      "Yes, and most engagements do. A website build often runs alongside branding, content and SEO. We scope combined work as a single proposal.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do, completely. Repositories, infrastructure accounts, design files and source assets are transferred to you at handover.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "Project work includes a support window. Beyond that, most clients move to a monthly retainer or a lighter maintenance agreement.",
  },
];
