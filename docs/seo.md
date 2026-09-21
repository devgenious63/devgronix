# Devgronix SEO reference

Primary (canonical) domain: **https://devgronix.com**

All canonical URLs, Open Graph URLs, sitemap entries and Organization schema
are generated from `SITE_URL` in `src/lib/seo.ts`. It reads `VITE_SITE_URL`
when set and otherwise falls back to `https://devgronix.com`. Changing the
domain later is a one-line change there plus the `Sitemap:` line in
`public/robots.txt`.

## Page / keyword map

One primary intent per page so pages do not compete with each other.

| Page | URL | Primary intent | Type |
| --- | --- | --- | --- |
| Home | `/` | software development agency / digital technology agency | commercial |
| Services directory | `/services` | software, design and digital marketing services | commercial |
| Web Development | `/services/web-development` | web development company / services | commercial |
| Mobile App Development | `/services/mobile-app-development` | mobile app development company | commercial |
| Custom Software Development | `/services/custom-software-development` | custom software development services | commercial |
| SaaS & Web Applications | `/services/saas-web-applications` | saas application development | commercial |
| AI & Automation | `/services/ai-automation` | ai development / automation services | commercial |
| Cloud & DevOps | `/services/cloud-devops` | cloud and devops services | commercial |
| Data Analytics | `/services/data-analytics` | data analytics and dashboard services | commercial |
| UI/UX Design | `/services/ui-ux-design` | ui ux design services | commercial |
| Graphic Design | `/services/graphic-design` | graphic design services | commercial |
| Branding & Logo | `/services/branding-logo-design` | branding and logo design services | commercial |
| Video & Motion | `/services/video-editing-motion-graphics` | video editing and motion graphics services | commercial |
| Digital Marketing | `/services/digital-marketing` | digital marketing services | commercial |
| Social Media Management | `/services/social-media-management` | social media management services | commercial |
| SEO | `/services/seo-search-optimization` | seo services | commercial |
| Content & Creative | `/services/content-creative-services` | content writing and creative services | commercial |
| Pricing hub | `/pricing` | service pricing / cost | transactional |
| Service pricing | `/pricing/:service` | cost of <service> | transactional |
| Works | `/works` | portfolio / case studies | informational |
| Case study | `/works/:slug` | project-specific | informational |
| About | `/about` | brand / company information | brand |
| Contact | `/contact` | get a quote / hire | transactional |

## What is implemented

- Unique title, meta description, Open Graph and X/Twitter tags per route.
- Self-referencing canonical on every leaf route (never on `__root`).
- `Organization` + `WebSite` schema sitewide; `Service` + `BreadcrumbList`
  (+ `FAQPage` where FAQs exist) on service pages; `BreadcrumbList` on other
  sections.
- Visible breadcrumbs matching the breadcrumb schema.
- `/sitemap.xml` generated from the service and project data, so new entries
  appear automatically.
- `robots.txt` allows all crawlers and points to the sitemap.
- `noindex` only on not-found route states.

## Multi-site policy (devgronix.in and other Devgronix sites)

- devgronix.com is the primary property and holds the most complete content.
- Secondary sites must not republish these pages. If a secondary site has no
  unique purpose, 301-redirect it to the matching devgronix.com page, or add a
  cross-domain canonical to devgronix.com.
- Cross-links between properties should be contextual and few, with natural
  anchor text — never sitewide exact-match links.
- Once official brand profiles exist, add them to Organization `sameAs` in
  `src/lib/seo.ts` (currently omitted because placeholder links are not real
  profiles).

## Manual steps (not possible from the codebase)

1. Connect devgronix.com in Project Settings → Domains and set it as the
   Primary domain so the Lovable URL redirects to it.
2. Publish the project — head tags and the sitemap only reach the live URL
   after a publish.
3. Verify devgronix.com in Google Search Console and submit
   `https://devgronix.com/sitemap.xml`.
4. Decide the fate of devgronix.in and other Devgronix sites: unique purpose,
   redirect, cross-domain canonical, or noindex.
5. Replace demo testimonials and demo/concept case studies with real, approved
   client work as it becomes available.
