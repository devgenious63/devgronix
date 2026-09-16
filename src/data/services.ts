import type { Service, ServiceCategory } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "technology",
    title: "Technology & Development",
    description:
      "Engineering teams for web, mobile, software, data and cloud — built for reliability and long-term maintainability.",
    order: 1,
  },
  {
    slug: "design",
    title: "Design & Creative",
    description:
      "Interfaces, brand systems and motion work that make complex products feel considered and credible.",
    order: 2,
  },
  {
    slug: "growth",
    title: "Digital Growth",
    description:
      "Marketing, search, social and content programmes that put the work you have built in front of the right people.",
    order: 3,
  },
];

export const services: Service[] = [
  {
    id: "svc-web-development",
    slug: "web-development",
    category: "technology",
    title: "Web Development",
    tagline: "Fast, accessible, search-ready websites",
    summary:
      "Marketing sites, corporate platforms and portals built on modern rendering with performance treated as a feature.",
    overview:
      "We build websites the way we build software: component systems, typed content models and a performance budget agreed before the first page ships. The result is a site your marketing team can run without a developer on standby.",
    icon: "Globe2",
    offerings: [
      { title: "Corporate & marketing websites", detail: "Multi-page sites with a design system behind them, not one-off templates." },
      { title: "Content platforms", detail: "Structured content models with an editing workflow your team actually uses." },
      { title: "Landing systems", detail: "Campaign pages assembled from tested blocks, launched in days." },
      { title: "Website modernisation", detail: "Rebuilds that keep your URLs, rankings and content intact." },
    ],
    capabilities: [
      "Server-rendered, SEO-ready pages",
      "Design system implementation",
      "Core Web Vitals performance pass",
      "Accessibility to WCAG AA",
      "CMS and content modelling",
      "Analytics and tracking setup",
    ],
    tools: ["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind CSS", "Sanity", "Vercel", "Cloudflare"],
    process: [
      { title: "Structure the content", detail: "Information architecture and routing decided up front." },
      { title: "Build the system", detail: "Reusable components tied to design tokens, not one-off pages." },
      { title: "Tune the metrics", detail: "Lighthouse, accessibility and crawlability verified before launch." },
    ],
    outcomes: ["Sub-second perceived loads", "Editor-friendly content", "Higher organic visibility"],
    faqs: [
      { question: "Can you work with our existing brand?", answer: "Yes. We can implement an existing brand system or extend it where the web needs more than print guidelines cover." },
      { question: "Will we be able to edit the site ourselves?", answer: "Yes. Content is modelled in a CMS with a preview workflow, and we run a handover session with your team." },
    ],
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "svc-mobile-app-development",
    slug: "mobile-app-development",
    category: "technology",
    title: "Mobile App Development",
    tagline: "Cross-platform apps that feel native",
    summary:
      "iOS and Android products with shared logic, offline resilience and release pipelines your team can actually run.",
    overview:
      "One codebase, two platforms, and a release process that does not depend on a single engineer. We design for poor networks and interrupted sessions from the start, because that is where mobile products are really used.",
    icon: "Smartphone",
    offerings: [
      { title: "Cross-platform apps", detail: "React Native and Expo builds sharing logic across iOS and Android." },
      { title: "Offline-first data layer", detail: "Local persistence and sync so the app works on a bad connection." },
      { title: "Push and messaging", detail: "Notification infrastructure wired to your backend events." },
      { title: "Store submission", detail: "Store listings, review preparation and staged rollouts." },
    ],
    capabilities: [
      "React Native / Expo builds",
      "Native module integration",
      "Offline sync and caching",
      "Push notifications",
      "Crash and usage telemetry",
      "App Store and Play submission",
    ],
    tools: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Firebase", "Sentry"],
    process: [
      { title: "Define the core loop", detail: "The one job the app must nail on day one." },
      { title: "Build for the edges", detail: "Poor networks, small screens, interrupted sessions." },
      { title: "Ship and iterate", detail: "Staged rollouts with crash and usage telemetry." },
    ],
    outcomes: ["One codebase, two platforms", "Stable release train", "Measurable retention signals"],
    featured: false,
    status: "published",
    order: 2,
  },
  {
    id: "svc-custom-software-development",
    slug: "custom-software-development",
    category: "technology",
    title: "Custom Software Development",
    tagline: "Systems built exactly around how you operate",
    summary:
      "Bespoke platforms, internal tools and business systems engineered for reliability, clarity and maintainability.",
    overview:
      "When off-the-shelf software forces your team into someone else's workflow, we model the operation you actually run and build around it — with tests, documentation and a codebase your own engineers can extend.",
    icon: "Code2",
    offerings: [
      { title: "Internal business systems", detail: "Operations, inventory, scheduling and back-office tooling." },
      { title: "Workflow automation", detail: "Replacing spreadsheets and manual handoffs with typed processes." },
      { title: "System integration", detail: "Connecting ERPs, CRMs and third-party APIs into one source of truth." },
      { title: "Legacy modernisation", detail: "Incremental migration paths that keep the business running." },
    ],
    capabilities: [
      "Technical discovery and architecture",
      "Role-based access and audit trails",
      "API design and integration",
      "Automated testing and CI",
      "Data migration",
      "Documentation and handover",
    ],
    tools: ["TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    process: [
      { title: "Map the operation", detail: "We model the real workflow before a line of code is written." },
      { title: "Prototype the core", detail: "The riskiest flow ships first so assumptions get tested early." },
      { title: "Harden and scale", detail: "Observability, tests and performance budgets before launch." },
    ],
    outcomes: ["Fewer manual handoffs", "A codebase your team can extend", "Predictable release cadence"],
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "svc-saas-web-applications",
    slug: "saas-web-applications",
    category: "technology",
    title: "SaaS & Web Applications",
    tagline: "Multi-tenant products built to be sold",
    summary:
      "Subscription products with authentication, billing, tenancy and admin tooling engineered in from the start.",
    overview:
      "A SaaS product is mostly the parts nobody demos: tenancy, permissions, billing edge cases and admin tooling. We build those properly so your team can spend its time on the features customers pay for.",
    icon: "Layers",
    offerings: [
      { title: "MVP to production", detail: "A focused first release designed to be extended, not thrown away." },
      { title: "Multi-tenant architecture", detail: "Workspace isolation, roles and permissions modelled carefully." },
      { title: "Subscriptions and billing", detail: "Plans, trials, upgrades and dunning wired to a payment provider." },
      { title: "Admin and support tooling", detail: "Internal consoles so your team can resolve issues without SQL." },
    ],
    capabilities: [
      "Authentication and SSO",
      "Multi-tenant data modelling",
      "Billing and subscription flows",
      "Usage metering and limits",
      "Admin dashboards",
      "Onboarding and activation flows",
    ],
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Supabase", "AWS"],
    process: [
      { title: "Scope the first release", detail: "The smallest product a customer would pay for." },
      { title: "Build the platform layer", detail: "Tenancy, auth and billing before feature sprawl." },
      { title: "Instrument and iterate", detail: "Activation and retention metrics from launch day." },
    ],
    outcomes: ["A product ready for paying users", "Clean tenancy boundaries", "Billing you can trust"],
    featured: false,
    status: "published",
    order: 4,
  },
  {
    id: "svc-ai-automation",
    slug: "ai-automation",
    category: "technology",
    title: "AI & Automation",
    tagline: "Practical intelligence inside your workflow",
    summary:
      "Assistants, document pipelines, classification and workflow automation grounded in your own data.",
    overview:
      "We start from a task with a number attached — hours spent, errors made, queue length — and automate that. Outputs stay traceable, costs stay visible, and a human stays in the loop wherever the stakes justify it.",
    icon: "Sparkles",
    offerings: [
      { title: "Internal assistants", detail: "Question answering grounded in your documents and systems." },
      { title: "Document pipelines", detail: "Extraction, classification and routing for high-volume paperwork." },
      { title: "Workflow automation", detail: "Rules plus models connecting the tools your team already uses." },
      { title: "Evaluation and guardrails", detail: "Test sets, logging and cost controls before anything goes live." },
    ],
    capabilities: [
      "Feasibility assessment",
      "Retrieval-augmented generation",
      "Model evaluation harnesses",
      "Human-in-the-loop review",
      "Prompt and cost optimisation",
      "Integration with existing tools",
    ],
    tools: ["OpenAI", "Anthropic", "Gemini", "LangChain", "pgvector", "Python", "TypeScript"],
    process: [
      { title: "Pick a measurable task", detail: "Automation with a number attached, not a demo." },
      { title: "Ground the model", detail: "Your documents, your rules, evaluated against real cases." },
      { title: "Keep it accountable", detail: "Traceable outputs and human review where it matters." },
    ],
    outcomes: ["Hours returned weekly", "Consistent output quality", "Auditable decisions"],
    featured: true,
    status: "published",
    order: 5,
  },
  {
    id: "svc-cloud-devops",
    slug: "cloud-devops",
    category: "technology",
    title: "Cloud & DevOps Solutions",
    tagline: "Infrastructure that stays quiet",
    summary:
      "Cloud architecture, pipelines, monitoring and cost control so shipping stops being an event.",
    overview:
      "Reproducible environments, automated releases and alerts that mean something. We codify your infrastructure so deployments become routine and incidents become short.",
    icon: "Cloud",
    offerings: [
      { title: "Infrastructure as code", detail: "Reproducible environments, no hand-configured servers." },
      { title: "CI/CD pipelines", detail: "Preview environments on every pull request." },
      { title: "Monitoring and alerting", detail: "Dashboards, alert routing and runbooks your team can follow." },
      { title: "Cloud cost review", detail: "Right-sizing and scaling policies with a documented saving." },
    ],
    capabilities: [
      "AWS / Azure / GCP architecture",
      "Terraform and IaC",
      "Containerisation and orchestration",
      "Zero-downtime deployments",
      "Observability and on-call runbooks",
      "Security and backup policy",
    ],
    tools: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Grafana"],
    process: [
      { title: "Audit the current state", detail: "Where deploys break and where the money goes." },
      { title: "Codify the environment", detail: "Reproducible infrastructure, no snowflake servers." },
      { title: "Automate the release", detail: "Every merge is a candidate for production." },
    ],
    outcomes: ["Deploy on demand", "Faster incident recovery", "Lower monthly cloud spend"],
    featured: false,
    status: "published",
    order: 6,
  },
  {
    id: "svc-data-analytics",
    slug: "data-analytics",
    category: "technology",
    title: "Data Analytics & Dashboards",
    tagline: "Decisions backed by your own numbers",
    summary:
      "Measurement plans, pipelines and dashboards that connect product and marketing activity to revenue.",
    overview:
      "One primary number per team, defined once and instrumented cleanly. We build the pipeline and the dashboards, then hand over definitions your teams can agree on.",
    icon: "BarChart3",
    offerings: [
      { title: "Measurement plan", detail: "Event schema and metric definitions agreed across teams." },
      { title: "Data pipelines", detail: "Reliable ingestion and transformation into a warehouse." },
      { title: "Executive dashboards", detail: "Product, revenue and operations views in one place." },
      { title: "Experimentation", detail: "A/B framework with a backlog and review cadence." },
    ],
    capabilities: [
      "Event tracking implementation",
      "Warehouse modelling",
      "BI dashboards",
      "Attribution reporting",
      "Automated reporting",
      "Data quality monitoring",
    ],
    tools: ["PostgreSQL", "BigQuery", "dbt", "Metabase", "Looker Studio", "GA4", "Python"],
    process: [
      { title: "Agree the metrics", detail: "One primary number per team, defined once." },
      { title: "Instrument cleanly", detail: "Typed events, no duplicate definitions." },
      { title: "Run the loop", detail: "Hypothesis, test, decision, repeat." },
    ],
    outcomes: ["Shared source of truth", "Faster product decisions", "Reporting that runs itself"],
    featured: false,
    status: "published",
    order: 7,
  },
  {
    id: "svc-ui-ux-design",
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    tagline: "Interfaces with a point of view",
    summary:
      "Research, flows, design systems and high-fidelity interfaces that make complex products feel obvious.",
    overview:
      "We design the system before the screens: tokens, type scale and components, then the flows that use them. Prototypes are tested with real tasks, not happy paths.",
    icon: "PenTool",
    offerings: [
      { title: "Product UX", detail: "Flows, information architecture and journey mapping." },
      { title: "Design systems", detail: "Tokens, components and documentation developers can build from." },
      { title: "Interface design", detail: "High-fidelity screens for web and mobile." },
      { title: "Usability testing", detail: "Prototype testing with task-based sessions." },
    ],
    capabilities: [
      "User research and interviews",
      "Wireframes and prototypes",
      "Design tokens and components",
      "Accessibility review",
      "Responsive and mobile design",
      "Developer-ready specifications",
    ],
    tools: ["Figma", "FigJam", "Framer", "Maze", "Storybook"],
    process: [
      { title: "Understand the user", detail: "Interviews and behavioural evidence over opinion." },
      { title: "Shape the system", detail: "Tokens, type scale and components before screens." },
      { title: "Prove it", detail: "Prototype testing with real tasks, not happy paths." },
    ],
    outcomes: ["Lower support load", "Faster feature delivery", "A consistent visual language"],
    featured: true,
    status: "published",
    order: 8,
  },
  {
    id: "svc-graphic-design",
    slug: "graphic-design",
    category: "design",
    title: "Graphic Design",
    tagline: "Visual work that carries the brand",
    summary:
      "Marketing collateral, social creative, presentations and print work produced to a consistent standard.",
    overview:
      "Design that stays on-brand across every channel. We work either per design or as an ongoing creative partner, with templates handed over so routine work stops needing a designer.",
    icon: "Palette",
    offerings: [
      { title: "Marketing collateral", detail: "Brochures, one-pagers, proposals and print-ready artwork." },
      { title: "Social creative", detail: "Post, story and ad sets built from a reusable template system." },
      { title: "Presentation design", detail: "Investor and sales decks with a master template." },
      { title: "Packaging and print", detail: "Print specification and pre-press handling." },
    ],
    capabilities: [
      "Concept and art direction",
      "Layout and typography",
      "Illustration and iconography",
      "Template systems",
      "Print-ready artwork",
      "Source file handover",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    process: [
      { title: "Brief and references", detail: "We agree direction before production starts." },
      { title: "Concepts", detail: "Initial routes for review, then focused refinement." },
      { title: "Production and handover", detail: "Final files, formats and editable templates." },
    ],
    outcomes: ["Consistent brand output", "Faster campaign turnaround", "Reusable templates in-house"],
    featured: true,
    status: "published",
    order: 9,
  },
  {
    id: "svc-branding-logo-design",
    slug: "branding-logo-design",
    category: "design",
    title: "Branding & Logo Design",
    tagline: "Identity systems, not just a mark",
    summary:
      "Positioning, naming support, logo systems and guidelines that hold up across every surface.",
    overview:
      "A logo is the smallest part of an identity. We define positioning and voice, then build the type scale, colour system and usage rules that let your team apply the brand without asking us.",
    icon: "Shapes",
    offerings: [
      { title: "Brand strategy", detail: "Positioning, audience and messaging foundations." },
      { title: "Logo systems", detail: "Primary mark, variants, lockups and favicon set." },
      { title: "Visual identity", detail: "Colour, typography, imagery direction and layout rules." },
      { title: "Brand guidelines", detail: "A document your team and vendors can follow." },
    ],
    capabilities: [
      "Positioning workshops",
      "Logo and mark design",
      "Colour and type systems",
      "Brand voice guidance",
      "Stationery and templates",
      "Guideline documentation",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe InDesign"],
    process: [
      { title: "Discover", detail: "Workshops on audience, competitors and ambition." },
      { title: "Design the system", detail: "Routes explored, one direction developed fully." },
      { title: "Document", detail: "Guidelines, asset library and rollout support." },
    ],
    outcomes: ["A recognisable identity", "Consistent application", "Assets ready for every channel"],
    featured: true,
    status: "published",
    order: 10,
  },
  {
    id: "svc-video-editing",
    slug: "video-editing-motion-graphics",
    category: "design",
    title: "Video Editing & Motion Graphics",
    tagline: "Motion that explains, not decorates",
    summary:
      "Short-form edits, product explainers, brand films and animated graphics produced on a predictable schedule.",
    overview:
      "From reels to product explainers, we handle scripting, editing, motion graphics, sound and delivery in every aspect ratio you need — with a template system for recurring formats.",
    icon: "Clapperboard",
    offerings: [
      { title: "Short-form editing", detail: "Reels, shorts and ad cutdowns in vertical and square formats." },
      { title: "Product explainers", detail: "Scripted walkthroughs with screen capture and motion." },
      { title: "Motion graphics", detail: "Animated logos, lower thirds and title systems." },
      { title: "Brand films", detail: "Longer-form edits with colour grading and sound design." },
    ],
    capabilities: [
      "Scripting and storyboarding",
      "Editing and pacing",
      "Motion graphics and animation",
      "Colour grading",
      "Sound design and mixing",
      "Subtitles and multi-format delivery",
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Figma"],
    process: [
      { title: "Script and storyboard", detail: "Agreed before any footage is touched." },
      { title: "Edit and animate", detail: "Rough cut for review, then motion and sound." },
      { title: "Deliver", detail: "Final masters in every format and ratio you need." },
    ],
    outcomes: ["A steady content pipeline", "On-brand motion language", "Assets sized for every channel"],
    featured: true,
    status: "published",
    order: 11,
  },
  {
    id: "svc-digital-marketing",
    slug: "digital-marketing",
    category: "growth",
    title: "Digital Marketing",
    tagline: "Campaigns measured against revenue",
    summary:
      "Paid and organic campaign management with tracking that ties spend to pipeline, not impressions.",
    overview:
      "We run campaigns the way we run software: hypothesis, instrumentation, review. Budget moves toward what converts, and the reporting shows you why.",
    icon: "Megaphone",
    offerings: [
      { title: "Paid search and social", detail: "Campaign structure, creative testing and budget management." },
      { title: "Conversion tracking", detail: "Clean attribution from click to enquiry to deal." },
      { title: "Landing page optimisation", detail: "Focused pages built and tested per campaign." },
      { title: "Email and lifecycle", detail: "Automated sequences tied to product or sales events." },
    ],
    capabilities: [
      "Channel strategy",
      "Google and Meta Ads management",
      "Creative testing",
      "Conversion tracking setup",
      "Landing page builds",
      "Monthly performance reporting",
    ],
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Google Tag Manager", "HubSpot"],
    process: [
      { title: "Audit and plan", detail: "Current spend, tracking gaps and channel fit." },
      { title: "Launch and test", detail: "Structured campaigns with creative variants." },
      { title: "Scale what works", detail: "Budget follows verified performance." },
    ],
    outcomes: ["Lower cost per qualified lead", "Clear channel reporting", "Creative that keeps improving"],
    featured: true,
    status: "published",
    order: 12,
  },
  {
    id: "svc-social-media-management",
    slug: "social-media-management",
    category: "growth",
    title: "Social Media Management",
    tagline: "A consistent presence, professionally run",
    summary:
      "Content calendars, creative production, publishing and community management across your key platforms.",
    overview:
      "Consistency beats intensity. We plan a monthly calendar, produce the creative, publish on schedule and report on what actually moved — across the platforms that matter for your market.",
    icon: "Share2",
    offerings: [
      { title: "Content calendars", detail: "Monthly planning aligned to campaigns and launches." },
      { title: "Creative production", detail: "Static, carousel and short-form video assets." },
      { title: "Publishing and scheduling", detail: "Platform-native posting on an agreed cadence." },
      { title: "Community management", detail: "Comment and message handling within response targets." },
    ],
    capabilities: [
      "Platform strategy",
      "Content calendar planning",
      "Copywriting and creative",
      "Scheduling and publishing",
      "Community engagement",
      "Monthly analytics reporting",
    ],
    tools: ["Meta Business Suite", "LinkedIn", "Buffer", "Canva", "Figma", "Adobe Premiere Pro"],
    process: [
      { title: "Set the direction", detail: "Audience, pillars and tone agreed per platform." },
      { title: "Produce and publish", detail: "A calendar approved in advance, posted on schedule." },
      { title: "Review monthly", detail: "What performed, what changes next month." },
    ],
    outcomes: ["A reliable posting rhythm", "On-brand creative every week", "Engagement you can measure"],
    featured: false,
    status: "published",
    order: 13,
  },
  {
    id: "svc-seo",
    slug: "seo-search-optimization",
    category: "growth",
    title: "SEO & Search Optimization",
    tagline: "Technical and content search work",
    summary:
      "Technical audits, content strategy and authority building aimed at qualified organic traffic.",
    overview:
      "Search work that starts with the technical foundation — crawlability, speed, structure — then builds content against keywords your buyers actually use, with rankings and traffic reported monthly.",
    icon: "Search",
    offerings: [
      { title: "Technical SEO audit", detail: "Crawl, indexation, speed and structured data fixes." },
      { title: "Keyword and content strategy", detail: "Clusters mapped to buyer intent and market." },
      { title: "On-page optimisation", detail: "Titles, structure, internal linking and schema." },
      { title: "Local and multi-region SEO", detail: "Market-specific pages for India, GCC and international search." },
    ],
    capabilities: [
      "Technical audits",
      "Keyword research",
      "Content briefs",
      "Structured data",
      "Internal linking strategy",
      "Rank and traffic reporting",
    ],
    tools: ["Google Search Console", "GA4", "Ahrefs", "Semrush", "Screaming Frog"],
    process: [
      { title: "Audit", detail: "Technical and content baseline with a prioritised fix list." },
      { title: "Fix and publish", detail: "Technical work first, then content against target clusters." },
      { title: "Report and refine", detail: "Monthly reporting on rankings, traffic and conversions." },
    ],
    outcomes: ["Cleaner technical foundation", "Growing qualified traffic", "Content aligned to intent"],
    featured: false,
    status: "published",
    order: 14,
  },
  {
    id: "svc-content-creative",
    slug: "content-creative-services",
    category: "growth",
    title: "Content & Creative Services",
    tagline: "Words and assets that carry weight",
    summary:
      "Website copy, technical writing, blog programmes and campaign creative produced to a consistent voice.",
    overview:
      "Copy and creative produced against a documented voice, so everything from a product page to a case study sounds like the same company — whichever market it is written for.",
    icon: "FileText",
    offerings: [
      { title: "Website and product copy", detail: "Clear messaging for pages that need to convert." },
      { title: "Blog and article programmes", detail: "Research-backed pieces on a monthly schedule." },
      { title: "Technical and case-study writing", detail: "Documentation, whitepapers and project stories." },
      { title: "Campaign creative", detail: "Ad copy, email sequences and supporting assets." },
    ],
    capabilities: [
      "Messaging and tone of voice",
      "Website copywriting",
      "Long-form content",
      "Editorial calendars",
      "Editing and proofreading",
      "Localisation-ready copy",
    ],
    tools: ["Notion", "Google Docs", "Grammarly", "Figma", "Ahrefs"],
    process: [
      { title: "Define the voice", detail: "Audience, tone and vocabulary written down once." },
      { title: "Plan the calendar", detail: "Topics mapped to search demand and sales questions." },
      { title: "Write and review", detail: "Drafts, subject-matter review and publication." },
    ],
    outcomes: ["A consistent brand voice", "A dependable publishing rhythm", "Copy that supports sales"],
    featured: false,
    status: "published",
    order: 15,
  },
];

export const publishedServices = services
  .filter((s) => s.status === "published")
  .sort((a, b) => a.order - b.order);

export const featuredServices = publishedServices.filter((s) => s.featured);

export const getService = (slug: string) =>
  publishedServices.find((s) => s.slug === slug);

export const getServicesByCategory = (category: string) =>
  publishedServices.filter((s) => s.category === category);

export const getAdjacentServices = (slug: string) => {
  const index = publishedServices.findIndex((s) => s.slug === slug);
  return {
    previous: index > 0 ? publishedServices[index - 1] : publishedServices[publishedServices.length - 1],
    next: index < publishedServices.length - 1 ? publishedServices[index + 1] : publishedServices[0],
  };
};
