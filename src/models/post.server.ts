import matter from "gray-matter";
import { marked } from "marked";

export namespace Post {
  const posts = import.meta.glob("/posts/*.md", { query: "?raw", eager: true }) as Record<string, { default: string }>;

  export function findAll() {
    return Object.entries(posts).map(([path, module]) => {
      const { data } = matter(module.default);
      data.slug = path.replace("/posts/", "").replace(".md", "");
      return data;
    });
  }

  export function findBySlug(slug: string) {
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
}
