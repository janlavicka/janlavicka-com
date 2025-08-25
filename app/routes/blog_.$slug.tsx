import invariant from "tiny-invariant";
import { Text } from "@/components";
import { getPost } from "@/models/post.server";
import type { Route } from "./+types/blog_.$slug";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/blog/${loaderData.post.slug}`,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: `${loaderData.post.title} • Jan Lavička`,
    },
    {
      name: "description",
      content: loaderData.post.description,
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
      content: `${import.meta.env.VITE_APP_URL}/blog/${loaderData.post.slug}`,
    },
    {
      property: "og:title",
      content: loaderData.post.title,
    },
    {
      property: "og:description",
      content: loaderData.post.description,
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
      content: loaderData.post.title,
    },
    {
      name: "twitter:description",
      content: loaderData.post.description,
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  invariant(params.slug);

  try {
    return {
      post: await getPost(params.slug),
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
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">{loaderData.post.title}</h1>

      <div className="prose">
        <Text>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: parsed markdown */}
          <div dangerouslySetInnerHTML={{ __html: loaderData.post.content }} />
        </Text>
      </div>
    </div>
  );
}
