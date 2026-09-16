import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Systems built exactly around how you operate",
    summary:
      "Bespoke platforms, internal tools and business systems engineered for reliability, clarity and long-term maintainability.",
    icon: "Code2",
    deliverables: [
      "Technical discovery and architecture blueprint",
      "Production-grade application build",
      "Automated testing and CI pipeline",
      "Documentation and handover sessions",
    ],
    process: [
      { title: "Map the operation", detail: "We model the real workflow before a line of code is written." },
      { title: "Prototype the core", detail: "The riskiest flow ships first so assumptions get tested early." },
      { title: "Harden and scale", detail: "Observability, tests and performance budgets before launch." },
    ],
    outcomes: ["Fewer manual handoffs", "A codebase your team can extend", "Predictable release cadence"],
  },
  {
    slug: "web-platform-engineering",
    title: "Web Platform Engineering",
    tagline: "Fast, accessible, search-ready web products",
    summary:
      "Marketing sites, portals and web apps built on modern rendering strategies with performance treated as a feature.",
    icon: "Globe2",
    deliverables: [
      "Design system implementation",
      "Server-rendered, SEO-ready pages",
      "Content model and editing workflow",
      "Core Web Vitals performance pass",
    ],
    process: [
      { title: "Structure the content", detail: "Information architecture and routing decided up front." },
      { title: "Build the system", detail: "Reusable components tied to design tokens, not one-off pages." },
      { title: "Tune the metrics", detail: "Lighthouse, accessibility and crawlability verified before launch." },
    ],
    outcomes: ["Sub-second perceived loads", "Editor-friendly content", "Higher organic visibility"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Cross-platform apps that feel native",
    summary:
      "iOS and Android products with shared logic, offline resilience and release pipelines your team can actually run.",
    icon: "Smartphone",
    deliverables: [
      "Cross-platform application build",
      "Offline-first data layer",
      "Push notification infrastructure",
      "App store submission support",
    ],
    process: [
      { title: "Define the core loop", detail: "The one job the app must nail on day one." },
      { title: "Build for the edges", detail: "Poor networks, small screens, interrupted sessions." },
      { title: "Ship and iterate", detail: "Staged rollouts with crash and usage telemetry." },
    ],
    outcomes: ["One codebase, two platforms", "Stable release train", "Measurable retention signals"],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    tagline: "Interfaces with a point of view",
    summary:
      "Research, flows, design systems and high-fidelity interfaces that make complex products feel obvious.",
    icon: "PenTool",
    deliverables: [
      "User flows and journey maps",
      "Design system with tokens and components",
      "High-fidelity interactive prototypes",
      "Developer-ready specifications",
    ],
    process: [
      { title: "Understand the user", detail: "Interviews and behavioural evidence over opinion." },
      { title: "Shape the system", detail: "Tokens, type scale and components before screens." },
      { title: "Prove it", detail: "Prototype testing with real tasks, not happy paths." },
    ],
    outcomes: ["Lower support load", "Faster feature delivery", "A consistent visual language"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Infrastructure that stays quiet",
    summary:
      "Cloud architecture, pipelines, monitoring and cost control so shipping stops being an event.",
    icon: "Cloud",
    deliverables: [
      "Infrastructure as code",
      "CI/CD pipelines with preview environments",
      "Monitoring, alerting and on-call runbooks",
      "Cost and scaling review",
    ],
    process: [
      { title: "Audit the current state", detail: "Where deploys break and where the money goes." },
      { title: "Codify the environment", detail: "Reproducible infrastructure, no snowflake servers." },
      { title: "Automate the release", detail: "Every merge is a candidate for production." },
    ],
    outcomes: ["Deploy on demand", "Faster incident recovery", "Lower monthly cloud spend"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tagline: "Practical intelligence inside your workflow",
    summary:
      "Assistants, document pipelines, classification and workflow automation grounded in your own data.",
    icon: "Sparkles",
    deliverables: [
      "Use-case assessment and feasibility study",
      "Retrieval and evaluation pipeline",
      "Assistant or automation integrated into your tools",
      "Guardrails, logging and cost controls",
    ],
    process: [
      { title: "Pick a measurable task", detail: "Automation with a number attached, not a demo." },
      { title: "Ground the model", detail: "Your documents, your rules, evaluated against real cases." },
      { title: "Keep it accountable", detail: "Traceable outputs and human review where it matters." },
    ],
    outcomes: ["Hours returned weekly", "Consistent output quality", "Auditable decisions"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    tagline: "Storefronts engineered to convert",
    summary:
      "Commerce experiences, checkout optimisation and back-office integrations that keep orders flowing.",
    icon: "ShoppingBag",
    deliverables: [
      "Storefront build and theming",
      "Checkout and payment integration",
      "Inventory and fulfilment sync",
      "Analytics and conversion tracking",
    ],
    process: [
      { title: "Find the leak", detail: "Funnel analysis before redesign." },
      { title: "Rebuild the path", detail: "Fewer steps, clearer pricing, faster pages." },
      { title: "Connect the back office", detail: "Stock, shipping and finance in sync." },
    ],
    outcomes: ["Higher checkout completion", "Fewer stock errors", "Clear channel reporting"],
  },
  {
    slug: "growth-analytics",
    title: "Growth & Analytics",
    tagline: "Decisions backed by your own numbers",
    summary:
      "Measurement plans, dashboards and experimentation programmes that connect product changes to revenue.",
    icon: "TrendingUp",
    deliverables: [
      "Measurement plan and event schema",
      "Dashboards for product and revenue metrics",
      "Experiment framework and backlog",
      "Quarterly insight reviews",
    ],
    process: [
      { title: "Agree the metrics", detail: "One primary number per team, defined once." },
      { title: "Instrument cleanly", detail: "Typed events, no duplicate definitions." },
      { title: "Run the loop", detail: "Hypothesis, test, decision, repeat." },
    ],
    outcomes: ["Shared source of truth", "Faster product decisions", "Compounding conversion gains"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
