import { Text } from "@/components/Text";
import { getPost } from "@/models/post.server";
import { Loader as RootLoader } from "@/root";
import { createMeta, getRouteLoaderData } from "@/utils/meta";
import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

type Loader = typeof loader;

export const meta: MetaFunction<Loader> = (args) => {
  if (!args.data) return [];

  const parentData = getRouteLoaderData<RootLoader>("root", args);

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: `${parentData.env.APP_URL}/blog/${args.data.post.slug}`,
      },
      {
        title: `${args.data.post.title} | Jan Lavička`,
      },
      {
        name: "description",
        content: args.data.post.description,
      },
    ],
    args,
  );
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
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
