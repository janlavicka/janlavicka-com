import Item from "@/components/item";
import List from "@/components/list";
import { getPosts } from "@/models";
import { createMeta } from "@/utils";
import { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type Loader = typeof loader;

export const meta: MetaFunction = ({ parentsData }) => {
  if (!parentsData.root) return {};

  return createMeta({
    canonical: `${parentsData.root.env.APP_URL}/blog`,
    title: "Blog | Jan Lavička",
  });
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
