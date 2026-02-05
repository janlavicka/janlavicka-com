import type { BlogPosting, BreadcrumbList, WithContext } from "schema-dts";
import invariant from "tiny-invariant";
import { Layout, Text } from "@/components";
import { cloudflareContext } from "@/context.server";
import { PageContext } from "@/contexts";
import { Post } from "@/models/post.server";
import { jsonLd } from "@/utils";
import type { Route } from "./+types/route";
import { Panel } from "./components";

export type Loader = typeof loader;

export function meta(args: Route.MetaArgs) {
  const blogPosting: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.loaderData.post.title,
    description: args.loaderData.post.description,
    datePublished: args.loaderData.post.created,
    url: `${import.meta.env.VITE_APP_URL}/blog/${args.loaderData.post.slug}`,
    author: {
      "@type": "Person",
      name: "Jan Lavička",
      url: import.meta.env.VITE_APP_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_APP_URL}/blog/${args.loaderData.post.slug}`,
    },
  };

  const breadcrumbs: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: import.meta.env.VITE_APP_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${import.meta.env.VITE_APP_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: args.loaderData.post.title,
      },
    ],
  };

  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/blog/${args.loaderData.post.slug}`,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: `${args.loaderData.post.title} • Jan Lavička`,
    },
    {
      name: "description",
      content: args.loaderData.post.description,
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
      content: `${import.meta.env.VITE_APP_URL}/blog/${args.loaderData.post.slug}`,
    },
    {
      property: "og:title",
      content: args.loaderData.post.title,
    },
    {
      property: "og:description",
      content: args.loaderData.post.description,
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
      content: args.loaderData.post.title,
    },
    {
      name: "twitter:description",
      content: args.loaderData.post.description,
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },

    // Structured Data
    jsonLd(blogPosting),
    jsonLd(breadcrumbs),
  ];
}

export async function action(args: Route.ActionArgs) {
  invariant(args.params.slug);

  const { env } = args.context.get(cloudflareContext);

  const id = env.CLAP_COUNTER.idFromName(args.params.slug);
  const stub = env.CLAP_COUNTER.get(id);

  const claps = await stub.increment();

  return {
    claps,
  };
}

export async function loader(args: Route.LoaderArgs) {
  invariant(args.params.slug);

  try {
    const { env } = args.context.get(cloudflareContext);

    const id = env.CLAP_COUNTER.idFromName(args.params.slug);
    const stub = env.CLAP_COUNTER.get(id);

    const claps = await stub.getCount();

    return {
      post: await Post.findBySlug(args.params.slug),
      claps,
    };
  } catch (_e) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <PageContext.Provider value={{ fileName: "src/routes/blog_.$slug/route.tsx", isError: false }}>
      <Layout>
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-2xl font-bold md:text-3xl">{loaderData.post.title}</h1>

          <div className="prose">
            <Text>
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: parsed markdown */}
              <div dangerouslySetInnerHTML={{ __html: loaderData.post.content }} />
            </Text>
          </div>

          <Panel />
        </div>
      </Layout>
    </PageContext.Provider>
  );
}
