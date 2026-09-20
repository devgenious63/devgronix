import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";
import { cn } from "@/lib/utils";

/**
 * Visible breadcrumb trail. Matching BreadcrumbList schema is emitted from the
 * route's head() via breadcrumbSchema() so the two always describe the same path.
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />}
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="focus-ring rounded transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
