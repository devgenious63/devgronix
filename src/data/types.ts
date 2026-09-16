/**
 * Centralized content model for DEVGRONIX.
 *
 * Every page reads from `src/data/*`. Swapping these arrays for a database or
 * CMS later only requires replacing the data source, not the pages.
 */

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string;
  deliverables: string[];
  process: { title: string; detail: string }[];
  outcomes: string[];
};

export type ProjectLabel = "Demo" | "Concept";

export type Project = {
  slug: string;
  title: string;
  client: string;
  label: ProjectLabel;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: { metric: string; label: string }[];
  stack: string[];
  serviceSlugs: string[];
};

export type Value = {
  title: string;
  detail: string;
  icon: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  detail: string;
};

export type TechGroup = {
  group: string;
  items: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type Faq = { question: string; answer: string };
