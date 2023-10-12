import { SerializeFrom, MetaDescriptor, MetaArgs } from "@remix-run/node";

export function overriteMeta(
  base: MetaDescriptor[],
  overrides: MetaDescriptor[],
) {
  return overrides.reduce((acc, meta) => {
    if ("charSet" in meta && base.find((m) => "charSet" in m)) {
      return acc;
    }

    const index = acc.findIndex((m) => {
      if ("title" in meta && "title" in m) {
        return true;
      }

      if ("name" in meta && "name" in m && meta.name === m.name) {
        return true;
      }

      if (
        "property" in meta &&
        "property" in m &&
        meta.property === m.property
      ) {
        return true;
      }

      if ("rel" in meta && "rel" in m && meta.rel === m.rel) {
        return true;
      }

      return false;
    });

    if (index !== -1) {
      acc[index] = meta;
    } else {
      acc.push(meta);
    }

    return acc;
  }, base);
}

export function createMeta(overrides: MetaDescriptor[], args: MetaArgs) {
  const data = args.matches.reduce((acc, match) => {
    return overriteMeta(acc, (match as any).meta || []);
  }, [] as MetaDescriptor[]);

  const canonical = overrides.find(
    (meta) => "rel" in meta && meta.rel === "canonical",
  );

  if (canonical) {
    overrides.push({
      property: "og:url",
      content: "href" in canonical && canonical.href,
    });
  }

  const title = overrides.find((meta) => "title" in meta);

  if (title) {
    overrides.push({
      property: "og:title",
      content: "title" in title && title.title,
    });
    overrides.push({
      name: "twitter:title",
      content: "title" in title && title.title,
    });
  }

  const description = overrides.find(
    (meta) => "name" in meta && meta.name === "description",
  );

  if (description) {
    overrides.push({
      property: "og:description",
      content: "content" in description && description.content,
    });
    overrides.push({
      name: "twitter:description",
      content: "content" in description && description.content,
    });
  }

  return overriteMeta(data, overrides);
}

export function getRouteLoaderData<T = any>(
  id: string,
  args: MetaArgs,
): SerializeFrom<T> {
  return args.matches.find((match) => match.id === id)
    ?.data as SerializeFrom<T>;
}
