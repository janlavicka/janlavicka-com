import Text from "@/components/text";
import { getPost } from "@/models";
import { createMeta } from "@/utils";
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

type Loader = typeof loader;

export const meta: MetaFunction<Loader> = ({ data, parentsData }) => {
  if (!data || !parentsData.root) return {};

  return createMeta({
    canonical: `${parentsData.root.env.APP_URL}/blog/${data.post.slug}`,
    title: `${data.post.title} | Jan Lavička`,
    description: data.post.description,
  });
};

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug);

  try {
    const post = await getPost(params.slug);

    return json({ post });
  } catch (e) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
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
