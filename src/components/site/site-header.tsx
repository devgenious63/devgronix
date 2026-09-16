import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <div className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full glass-pill px-3 py-2">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-sm font-bold tracking-[0.2em] uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="size-2 rounded-full bg-accent-gradient" />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-auto mx-auto mt-2 w-full max-w-5xl overflow-hidden rounded-3xl glass-pill transition-all md:hidden",
          open ? "max-h-96 p-3 opacity-100" : "max-h-0 border-0 p-0 opacity-0",
        )}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2 px-1">
            <ThemeToggle />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Start a project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
