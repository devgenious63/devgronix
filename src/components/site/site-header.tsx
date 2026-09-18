import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 px-4 md:top-7">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full glass-pill px-3 transition-all duration-300 ease-out",
          scrolled ? "py-1.5 shadow-float" : "py-2.5",
        )}
      >
        <Link
          to="/"
          className="focus-ring flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-sm font-bold tracking-[0.2em] uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="size-2 rounded-full bg-accent-gradient" />
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            to="/contact"
            className="btn-primary hidden !px-5 !py-2 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="focus-ring inline-flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "pointer-events-auto mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-3xl glass-pill transition-all duration-300 ease-out lg:hidden",
          open ? "max-h-[32rem] p-3 opacity-100" : "max-h-0 border-0 p-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: link.to === "/" }}
              className="focus-ring rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium bg-secondary" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2 px-1">
            <ThemeToggle />
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
