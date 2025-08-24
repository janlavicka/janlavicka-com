import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPosts() {
  return fs
    .readdirSync(path.join(process.cwd(), "posts"))
    .filter((name) => name.includes(".md"))
    .map((name) => {
      const file = fs.readFileSync(path.join(process.cwd(), "posts", name), "utf8");
      const { data } = matter(file);

      data.slug = name.replace(".md", "");

      return data;
    });
}

export async function getPost(slug: string) {
  const file = fs.readFileSync(path.join(process.cwd(), "posts", `${slug}.md`), "utf8");

  const { content, data } = matter(file);
  const html = marked(content);

  return { ...data, content: html } as {
    title: string;
    description: string;
    created: string;
    slug: string;
    content: string;
  };
}
