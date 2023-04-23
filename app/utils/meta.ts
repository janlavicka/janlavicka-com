import {
  SerializeFrom,
  V2_HtmlMetaDescriptor,
  V2_MetaArgs,
} from "@remix-run/node";

export function createMeta(
  overrides: V2_HtmlMetaDescriptor[],
  args: V2_MetaArgs,
) {
  const data = args.matches.reduce((acc, match) => {
    return acc.concat((match as any).meta || []);
  }, [] as V2_HtmlMetaDescriptor[]);

  const canonical = overrides.find(
    (meta) => "name" in meta && meta.name === "canonical",
  );

  if (canonical) {
    overrides.push({
      property: "og:url",
      content: "content" in canonical && canonical.content,
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

  for (let override of overrides) {
    let index = data.findIndex(
      (meta) =>
        ("name" in meta && "name" in override && meta.name === override.name) ||
        ("property" in meta &&
          "property" in override &&
          meta.property === override.property) ||
        ("title" in meta && "title" in override),
    );
    if (index !== -1) {
      data.splice(index, 1, override);
    }
  }

  return data;
}

export function getMatchesData<T = any>(
  id: string,
  args: V2_MetaArgs,
): SerializeFrom<T> {
  return args.matches.find((match) => match.id === id)
    ?.data as SerializeFrom<T>;
}
