# DEVGRONIX — Premium Tech Agency Website

"Create. Develop. Grow." A polished marketing site for a digital technology and software solutions agency, built fresh with an editorial-tech look, dark/light theming, and a floating pill navigation bar.

## Pages

- **Home** — original generated tech hero visual, headline + tagline, trust strip, 8 core services, curated sample projects (each clearly labeled Demo / Concept), agency values, 6-step workflow, tech ecosystem logos/wordmarks, sample testimonials (labeled as samples), closing call to action.
- **Services** (`/services`) — all 8 services as editorial cards.
- **Service detail** (`/services/<name>`) — overview, what's included, process, related work, CTA.
- **Works** (`/works`) — filterable grid of sample projects with Demo/Concept badges.
- **Work detail** (`/works/<name>`) — challenge, approach, outcome, tech used, next/prev project.
- **About** — story, values, workflow, team placeholder.
- **Pricing** — three tiers plus custom-quote option, FAQ.
- **Contact** — inquiry form (name, email, company, service interest, budget, message) with validation and a success state.

## Design system

- Editorial tech direction: large display headings, tight tracking, generous whitespace, thin rules, restrained accent color.
- Full dark and light token sets in the global stylesheet (background, surface, foreground, muted, accent, borders, shadows, gradients). No hardcoded colors in components.
- Floating pill navigation: rounded, glass-like, centered, with theme toggle and a primary CTA; collapses to a sheet menu on small screens.
- One distinctive font pairing (display + text) loaded in the app shell.
- Restrained motion: section reveals and subtle hover states only.

## Content model

A single centralized data layer (`src/data/`) holds services, projects, values, workflow steps, tech stack, testimonials, pricing tiers, and site settings — typed, with slugs and helper lookups. Every page reads from it, so a future admin panel or database can replace the source without touching the pages.

## Notes

- All projects, testimonials, and figures are clearly labeled as demo/sample content; you supply real details later.
- The inquiry form validates and shows confirmation but does not yet send anywhere. Storing submissions or emailing them needs a backend — I can add that next if you want.
- Each page gets its own title, description, and social preview text.
