/**
 * Centralized content model for DEVGRONIX.
 *
 * Every page reads from `src/data/*`. Swapping these arrays for a database or
 * CMS later only requires replacing the data source, not the pages.
 * Each record carries admin-facing fields (id/order/status/contentType) so the
 * same shapes can be served from an admin panel without redesigning the site.
 */

export type PublishStatus = "published" | "draft";
export type ContentType = "demo" | "verified";

export type ServiceCategorySlug = "technology" | "design" | "growth";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  title: string;
  description: string;
  order: number;
};

export type Service = {
  id: string;
  slug: string;
  category: ServiceCategorySlug;
  title: string;
  tagline: string;
  summary: string;
  overview: string;
  icon: string;
  offerings: { title: string; detail: string }[];
  capabilities: string[];
  tools: string[];
  process: { title: string; detail: string }[];
  outcomes: string[];
  faqs?: Faq[];
  featured: boolean;
  status: PublishStatus;
  order: number;
};

export type BillingType =
  | "per project"
  | "per month"
  | "per design"
  | "per video"
  | "per package"
  | "custom";

export type PricingPlan = {
  id: string;
  serviceId: string;
  name: string;
  description: string;
  price: string;
  billingType: BillingType;
  features: string[];
  popular: boolean;
  ctaText: string;
  status: PublishStatus;
  order: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  label: "Demo" | "Concept";
  contentType: ContentType;
  category: string;
  year: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string[];
  solution: string;
  features: string[];
  outcome: { metric: string; label: string }[];
  stack: string[];
  serviceSlugs: string[];
  featured: boolean;
  status: PublishStatus;
  order: number;
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
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  quote: string;
  photo?: string;
  rating: number;
  contentType: ContentType;
  status: PublishStatus;
};

export type Faq = { question: string; answer: string };
