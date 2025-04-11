import { Text } from "@/components";
import { getPost } from "@/models/post.server";
import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

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
      title: `${args.data.post.title} • Jan Lavička`,
    },
    {
      name: "description",
      content: args.data.post.description,
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
      content: args.data.post.title,
    },
    {
      property: "og:description",
      content: args.data.post.description,
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
      content: args.data.post.title,
    },
    {
      name: "twitter:description",
      content: args.data.post.description,
    },
    {
      name: "twitter:image",
      content: args.data.meta.image,
    },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug);

  try {
    const post = await getPost(params.slug);

    return {
      post,
      meta: {
        url: `${process.env.APP_URL}/blog/${post.slug}`,
        image: `${process.env.APP_URL}/images/social.jpg`,
      },
    };
  } catch (e) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
};

export default function Page() {
  const data = useLoaderData<Loader>();

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">{data.post.title}</h1>

      <div className="prose">
        <Text>
          <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
        </Text>
      </div>
    </div>
  );
}
