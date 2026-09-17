import type { TechGroup, Testimonial, Value, WorkflowStep } from "./types";

export const site = {
  name: "DEVGRONIX",
  tagline: "Create. Develop. Grow.",
  description:
    "DEVGRONIX is a digital technology and software solutions agency delivering development, design and digital growth services for clients in India, Saudi Arabia, the UAE and worldwide.",
  email: "hello@devgronix.com",
  phone: "+1 (555) 014-2200",
  location: "Serving India, Saudi Arabia, the UAE and international clients",
  markets: ["India", "Saudi Arabia", "UAE", "International"],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

/** Capability statements — deliberately free of unverifiable claims. */
export const trustStrip = [
  { value: "3", label: "Practice areas: technology, design, growth" },
  { value: "15", label: "Services under one team" },
  { value: "4", label: "Markets served, India to the GCC" },
  { value: "1", label: "Point of contact per engagement" },
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
  { group: "Design & Creative", items: ["Figma", "Illustrator", "Photoshop", "After Effects", "Premiere Pro"] },
  { group: "Growth & Data", items: ["GA4", "Google Ads", "Meta Ads", "Ahrefs", "dbt", "Metabase"] },
];

/**
 * Demo testimonials. `contentType: "demo"` marks illustrative content; real
 * approved quotes are added as `contentType: "verified"` without redesign.
 */
export const testimonials: Testimonial[] = [
  {
    id: "tst-1",
    quote:
      "They spent the first week understanding our operation instead of pitching a stack. The platform they built now runs our entire dispatch floor.",
    name: "A. Rendell",
    role: "Operations Director",
    company: "Sample Client",
    country: "United Arab Emirates",
    rating: 5,
    contentType: "demo",
    status: "published",
  },
  {
    id: "tst-2",
    quote:
      "The clearest engineering partner we've worked with. Weekly demos, honest trade-offs, and a codebase our own team could pick up immediately.",
    name: "M. Okonjo",
    role: "Head of Product",
    company: "Sample Client",
    country: "India",
    rating: 5,
    contentType: "demo",
    status: "published",
  },
  {
    id: "tst-3",
    quote:
      "We asked for a website and got a design system. Six months later we're still shipping pages without going back to the agency.",
    name: "L. Fischer",
    role: "Marketing Lead",
    company: "Sample Client",
    country: "Saudi Arabia",
    rating: 5,
    contentType: "demo",
    status: "published",
  },
];

export const publishedTestimonials = testimonials.filter((t) => t.status === "published");

export const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];
