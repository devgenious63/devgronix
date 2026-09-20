/**
 * Central SEO configuration.
 *
 * The canonical/primary domain for the Devgronix brand is devgronix.com.
 * Change SITE_URL here (or set VITE_SITE_URL) and every canonical URL,
 * og:url, sitemap entry and schema URL follows — no other file needs editing.
 */
export const SITE_URL = (
  import.meta.env['VITE_SITE_URL'] ?? "https://devgronix.com"
).replace(/\/$/, "");

export const SITE_NAME = "Devgronix";

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/(?<!:)\/+$/, "") || SITE_URL;

type MetaTag = Record<string, string>;

export interface PageSeoInput {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/web-development". */
  path: string;
  type?: "website" | "article";
}

/** Meta tags for a leaf page: title, description, Open Graph and X/Twitter. */
export function pageMeta({ title, description, path, type = "website" }: PageSeoInput): MetaTag[] {
  const url = absoluteUrl(path);
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

/** Canonical link for a leaf page. Never added on the root route. */
export const canonicalLink = (path: string) => [
  { rel: "canonical" as const, href: absoluteUrl(path) },
];

export const jsonLd = (data: unknown) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

/** Service schema for a service landing page. */
export const serviceSchema = (input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: input.name,
  description: input.description,
  url: absoluteUrl(input.path),
  ...(input.serviceType ? { serviceType: input.serviceType } : {}),
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: ["India", "Saudi Arabia", "United Arab Emirates", "Worldwide"],
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
