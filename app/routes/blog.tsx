import { Item, List } from "@/components";
import { getPosts } from "@/models/post.server";
import { MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type Loader = typeof loader;

export const meta: MetaFunction<Loader> = (args) => {
  if (!args.data) return [];

  return [
    {
      tagName: "link",
      rel: "canonical",
      content: args.data.meta.url,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Blog • Jan Lavička",
    },
    {
      name: "description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },

    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site_name",
      content: "Jan Lavička",
    },
    {
      property: "og:url",
      content: args.data.meta.url,
    },
    {
      property: "og:title",
      content: "Blog",
    },
    {
      property: "og:description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:image",
      content: args.data.meta.image,
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@janlavicka",
    },
    {
      name: "twitter:title",
      content: "Blog",
    },
    {
      name: "twitter:description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: args.data.meta.image,
    },
  ];
};

export const loader = async () => {
  const posts = await getPosts();

  return json({
    posts,
    meta: {
      url: `${process.env.APP_URL}/blog`,
      image: `${process.env.APP_URL}/images/social.jpg`,
    },
  });
};

export default function Page() {
  const data = useLoaderData<Loader>();

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Blog</h1>

      <List>
        {data.posts.map((post) => (
          <Item key={post.slug}>
            <p className="leading-normal">
              <Link
                to={`/blog/${post.slug}`}
                className="font-bold underline text-neutral-900 hover:text-blue-500"
              >
                {post.title}
              </Link>
            </p>
            <p className="leading-normal">{post.description}</p>
          </Item>
        ))}
      </List>
    </div>
  );
}
