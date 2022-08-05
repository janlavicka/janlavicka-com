import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPost } from "@/models/post.server";
import invariant from "tiny-invariant";
import { useLoaderData } from "@remix-run/react";
import Text from "@/components/text";
import { notFound } from "remix-utils";

type LoaderData = {
  post: {
    title: string;
    description: string;
    created: string;
    slug: string;
    content: string;
  };
};

export const meta: MetaFunction = ({ data, parentsData, params }) => ({
  title: `${data?.post?.title} | Jan Lavička`,
  "og:title": `${data?.post?.title} | Jan Lavička`,
  "twitter:title": `${data?.post?.title} | Jan Lavička`,
  description: data?.post?.description,
  "og:description": data?.post?.description,
  "twitter:description": data?.post?.description,
  "og:url": `${parentsData?.root?.env?.APP_URL}/blog/${params.slug}`,
});

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug);

  try {
    const post = await getPost(params.slug);

    return json({ post });
  } catch (e) {
    throw notFound({});
  }
};

export default function Page() {
  const data = useLoaderData<LoaderData>();

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
