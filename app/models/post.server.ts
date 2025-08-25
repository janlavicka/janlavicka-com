import matter from "gray-matter";
import { marked } from "marked";

const posts = import.meta.glob("/posts/*.md", { query: "?raw", eager: true }) as Record<string, { default: string }>;

export async function getPosts() {
  return Object.entries(posts).map(([path, module]) => {
    const { data } = matter(module.default);
    data.slug = path.replace("/posts/", "").replace(".md", "");
    return data;
  });
}

export async function getPost(slug: string) {
  const module = posts[`/posts/${slug}.md`];

  if (!module) {
    throw new Response("Not Found", { status: 404 });
  }

  const { content, data } = matter(module.default);
  const html = marked(content);

  return { ...data, content: html } as {
    title: string;
    description: string;
    created: string;
    slug: string;
    content: string;
  };
}
