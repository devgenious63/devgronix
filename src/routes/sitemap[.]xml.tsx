import { createFileRoute } from "@tanstack/react-router";
import { publishedProjects, publishedServices } from "@/data";
import { absoluteUrl } from "@/lib/seo";

interface Entry {
  path: string;
  changefreq: string;
  priority: string;
}

function buildEntries(): Entry[] {
  const statics: Entry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "weekly", priority: "0.9" },
    { path: "/works", changefreq: "weekly", priority: "0.8" },
    { path: "/pricing", changefreq: "monthly", priority: "0.8" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
  ];

  const services = publishedServices.flatMap((s): Entry[] => [
    { path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.9" },
    { path: `/pricing/${s.slug}`, changefreq: "monthly", priority: "0.6" },
  ]);

  const works = publishedProjects.map(
    (p): Entry => ({ path: `/works/${p.slug}`, changefreq: "monthly", priority: "0.6" }),
  );

  return [...statics, ...services, ...works];
}

function renderSitemap() {
  const urls = buildEntries()
    .map(
      (e) =>
        `  <url>\n    <loc>${absoluteUrl(e.path)}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`.replace(
    "www.sitemap.org",
    "www.sitemaps.org",
  );
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
