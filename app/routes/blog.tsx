import Item from "@/components/item";
import List from "@/components/list";
import { getPosts } from "@/models/post.server";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type LoaderData = {
  posts: {
    title: string;
    description: string;
    created: string;
    slug: string;
  }[];
};

export const meta: MetaFunction = ({ parentsData }) => ({
  title: "Blog | Jan Lavička",
  "og:title": "Blog | Jan Lavička",
  "twitter:title": "Blog | Jan Lavička",
  "og:url": `${parentsData.root.env.APP_URL}/blog`,
});

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();

  return json({ posts });
};

export default function Page() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Blog</h1>

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
