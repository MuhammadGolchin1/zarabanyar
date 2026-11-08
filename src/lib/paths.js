const base = import.meta.env.BASE_URL || '/';
const prefix = base === '/' ? '' : base.replace(/\/$/, '');

// Page data keeps the original site paths. Only rendered URLs gain the Pages prefix.
export function siteUrl(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || !prefix) return value;
  if (value === prefix || value.startsWith(`${prefix}/`) || value.startsWith(`${prefix}?`) || value.startsWith(`${prefix}#`)) return value;
  return `${prefix}${value}`;
}

export function sitePath(value) {
  if (prefix && (value === prefix || value.startsWith(`${prefix}/`))) return value.slice(prefix.length) || '/';
  return value;
}

export function withBaseProps(props) {
  const next = { ...props };
  for (const key of ['href', 'src', 'poster', 'action']) if (key in next) next[key] = siteUrl(next[key]);
  if (typeof next.srcSet === 'string') next.srcSet = next.srcSet.replace(/(^|[,\s])(\/(?!\/)[^,\s]*)/g, (_, separator, path) => separator + siteUrl(path));
  if (next.style) next.style = Object.fromEntries(Object.entries(next.style).map(([key, value]) => [key, typeof value === 'string' ? value.replace(/url\(\s*(['"]?)(\/(?!\/)[^)'"\s]+)\1\s*\)/g, (_, quote, path) => `url(${quote}${siteUrl(path)}${quote})`) : value]));
  return next;
}
