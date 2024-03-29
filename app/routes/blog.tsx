import { Item } from "@/components/Item";
import { List } from "@/components/List";
import { getPosts } from "@/models/post.server";
import { Loader as RootLoader } from "@/root";
import { createMeta, getRouteLoaderData } from "@/utils/meta";
import { MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type Loader = typeof loader;

export const meta: MetaFunction = (args) => {
  const parentData = getRouteLoaderData<RootLoader>("root", args);

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: `${parentData.env.APP_URL}/blog`,
      },
      {
        title: "Blog | Jan Lavička",
      },
    ],
    args,
  );
};

export const loader = async () => {
  const posts = await getPosts();

  return json({ posts });
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
                className="font-bold text-gray-900 underline hover:text-blue-500"
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
