// Shared helper: prefixes an internal path with Vite's BASE_URL so it
// resolves correctly whether we're in dev (base "/") or the GitHub Pages
// build (base "/svdc_website/"). Use this for any hardcoded internal
// href/src that isn't already going through a React Router <Link> —
// plain <a> tags don't know about the router's basename on their own.
//
// Usage: withBase("#locations") -> "/svdc_website/#locations"
//        withBase("patient-forms") -> "/svdc_website/patient-forms"
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // always ends with "/"
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}
