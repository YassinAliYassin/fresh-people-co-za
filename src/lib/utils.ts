export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Resolve a public/ asset path against Vite's configured `base`.
 *
 * Vite only rewrites asset URLs emitted from index.html / the JS entry; it
 * does NOT touch string literals like "/images/foo.jpg" written in JSX or data
 * modules. On the GitHub Pages mirror the site is served from the
 * "/fresh-people-co-za/" subpath, so those absolute paths 404. Prefixing with
 * import.meta.env.BASE_URL (which Vite injects per-build) makes the same code
 * work for both the root-served production FTP site and the Pages subpath.
 *
 * @param path A path WITHOUT a leading slash, e.g. "images/extra1.jpg".
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
