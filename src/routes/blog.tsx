import { Link } from "react-router";
import { Item, Layout, List } from "@/components";
import { PageContext } from "@/contexts";
import { Post } from "@/models/post.server";
import type { Route } from "./+types/blog";

export function meta() {
  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/blog`,
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
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
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
      content: `${import.meta.env.VITE_APP_URL}/blog`,
    },
    {
      property: "og:title",
      content: "Blog",
    },
    {
      property: "og:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
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
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },
  ];
}

export async function loader() {
  return {
    posts: await Post.findAll(),
  };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <PageContext.Provider value={{ fileName: "src/routes/blog.tsx", isError: false }}>
      <Layout>
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-2xl font-bold md:text-3xl">Blog</h1>

          <List>
            {loaderData.posts.map((post) => (
              <Item key={post.slug}>
                <p className="leading-normal">
                  <Link to={`/blog/${post.slug}`} className="font-bold underline text-neutral-900 hover:text-blue-500">
                    {post.title}
                  </Link>
                </p>
                <p className="leading-normal">{post.description}</p>
              </Item>
            ))}
          </List>
        </div>
      </Layout>
    </PageContext.Provider>
  );
}
