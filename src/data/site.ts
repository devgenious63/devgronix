import type { Faq, PricingTier, TechGroup, Testimonial, Value, WorkflowStep } from "./types";

export const site = {
  name: "DEVGRONIX",
  tagline: "Create. Develop. Grow.",
  description:
    "DEVGRONIX is a digital technology and software solutions agency building custom software, web platforms, mobile apps and AI automation.",
  email: "hello@devgronix.com",
  phone: "+1 (555) 014-2200",
  location: "Remote-first — working across Europe, North America and Asia",
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
} as const;

export const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
] as const;

export const trustStrip = [
  { value: "40+", label: "Products shipped" },
  { value: "12", label: "Industries served" },
  { value: "9 yrs", label: "Average engineer experience" },
  { value: "4.9/5", label: "Client satisfaction" },
];

export const values: Value[] = [
  {
    title: "Engineering over theatre",
    detail: "We optimise for the codebase your team inherits, not the demo on launch day.",
    icon: "Hammer",
  },
  {
    title: "Clarity as a deliverable",
    detail: "Plain-language updates, visible scope and decisions written down where you can find them.",
    icon: "Compass",
  },
  {
    title: "Measured, then shipped",
    detail: "Every engagement names the number it should move before work begins.",
    icon: "Gauge",
  },
  {
    title: "Built to be handed over",
    detail: "Documentation, tests and onboarding are part of the build, never an afterthought.",
    icon: "KeyRound",
  },
];

export const workflow: WorkflowStep[] = [
  { step: "01", title: "Discover", detail: "Workshops to understand the business, the users and the constraints that are non-negotiable." },
  { step: "02", title: "Define", detail: "Scope, architecture and success metrics agreed in a document both sides sign off." },
  { step: "03", title: "Design", detail: "Flows, design system and prototypes tested against real tasks before build." },
  { step: "04", title: "Develop", detail: "Two-week increments, demoable every Friday, with tests and reviews as standard." },
  { step: "05", title: "Deploy", detail: "Automated pipelines, staged rollouts and monitoring wired in from the first release." },
  { step: "06", title: "Grow", detail: "Post-launch analytics, experiments and a roadmap that responds to real usage." },
];

export const techStack: TechGroup[] = [
  { group: "Frontend", items: ["React", "TypeScript", "TanStack", "Next.js", "Tailwind CSS", "Motion"] },
  { group: "Backend", items: ["Node.js", "Go", "Python", "GraphQL", "tRPC", "PostgreSQL"] },
  { group: "Mobile", items: ["React Native", "Expo", "Swift", "Kotlin"] },
  { group: "Cloud & Ops", items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { group: "Data & AI", items: ["Vector search", "LLM orchestration", "dbt", "Metabase", "Snowflake"] },
];

/** Sample testimonials — illustrative copy, replaced once real clients approve quotes. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They spent the first week understanding our operation instead of pitching a stack. The platform they built now runs our entire dispatch floor.",
    name: "A. Rendell",
    role: "Operations Director",
    company: "Sample Client",
  },
  {
    quote:
      "The clearest engineering partner we've worked with. Weekly demos, honest trade-offs, and a codebase our own team could pick up immediately.",
    name: "M. Okonjo",
    role: "Head of Product",
    company: "Sample Client",
  },
  {
    quote:
      "We asked for a website and got a design system. Six months later we're still shipping pages without going back to the agency.",
    name: "L. Fischer",
    role: "Marketing Lead",
    company: "Sample Client",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    price: "$6,500",
    cadence: "per project, from",
    description: "For focused builds: a marketing platform, a landing system or a contained internal tool.",
    features: [
      "Discovery workshop and scope document",
      "Design system and up to 8 pages or screens",
      "Responsive build with performance pass",
      "4 weeks of post-launch support",
    ],
  },
  {
    name: "Build",
    price: "$18,000",
    cadence: "per project, from",
    description: "For full product builds that need design, engineering and infrastructure working together.",
    features: [
      "Everything in Launch",
      "Custom application architecture",
      "Authentication, database and integrations",
      "CI/CD, monitoring and documentation",
      "12 weeks of post-launch support",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "$9,000",
    cadence: "per month",
    description: "An embedded team for organisations shipping continuously across multiple surfaces.",
    features: [
      "Dedicated cross-functional squad",
      "Two-week delivery increments",
      "Quarterly roadmap and analytics reviews",
      "Priority incident response",
    ],
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "Are these prices fixed?",
    answer:
      "They are indicative starting points. After a discovery call we send a fixed-scope proposal with a firm figure and timeline, so there are no moving numbers mid-project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A Launch engagement usually runs three to five weeks. A full Build is typically ten to sixteen weeks depending on integrations and compliance requirements.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do, completely. Repositories, infrastructure accounts and design files are transferred to you at handover along with documentation.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We regularly embed alongside in-house engineers, share the same board and review cycle, and hand over ownership progressively.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every engagement includes a support window. Beyond that, most clients move to a Partner retainer or a lighter maintenance agreement.",
  },
];

export const budgetOptions = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];
