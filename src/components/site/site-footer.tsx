import { Link } from "@tanstack/react-router";
import { navLinks, services, site } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.2em] uppercase">{site.name}</p>
            <p className="mt-3 max-w-sm text-2xl leading-tight font-display font-semibold">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{site.location}</p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Portfolio items shown are demo and concept work.
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
              {site.email}
            </a>
            {site.social.map((s) => (
              <a key={s.label} href={s.href} className="transition-colors hover:text-foreground">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
