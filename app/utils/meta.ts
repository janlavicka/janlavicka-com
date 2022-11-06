export function createMeta(meta: {
  canonical: string;
  title?: string;
  description?: string;
  [key: string]: string | undefined;
}) {
  meta["og:url"] = meta.canonical;

  if (meta.title) {
    meta["og:title"] = meta.title;
    meta["twitter:title"] = meta.title;
  }

  if (meta.description) {
    meta["og:description"] = meta.description;
    meta["twitter:description"] = meta.description;
  }

  return meta;
}
