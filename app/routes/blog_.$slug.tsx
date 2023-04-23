import Text from "@/components/text";
import { getPost } from "@/models";
import { createMeta, getMatchesData } from "@/utils";
import { json, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

type LoaderData = typeof loader;

export const meta: V2_MetaFunction<LoaderData> = (args) => {
  const parentData = getMatchesData("root", args);

  return createMeta(
    [
      {
        name: "canonical",
        content: `${parentData.env.APP_URL}/blog/${args.data.post.slug}`,
      },
      { title: "Blog | Jan Lavička" },
      {
        name: "description",
        content: args.data.post.description,
      },
    ],
    args,
  );
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
