import { Feed } from "feed";
import { Post } from "@/models/post.server";

export async function loader() {
  const feed = new Feed({
    id: import.meta.env.VITE_APP_URL,
    link: import.meta.env.VITE_APP_URL,
    title: "Jan Lavička",
    description: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    language: "en",
    copyright: `© ${new Date().getFullYear()} Jan Lavička`,
    feedLinks: {
      rss: `${import.meta.env.VITE_APP_URL}/feed.xml`,
    },
    author: {
      name: "Jan Lavička",
      email: "iam@janlavicka.com",
      link: import.meta.env.VITE_APP_URL,
    },
  });

  for (const post of Post.findAll()) {
    const entry = Post.findBySlug(post.slug as string);

    feed.addItem({
      id: `${import.meta.env.VITE_APP_URL}/blog/${entry.slug}`,
      link: `${import.meta.env.VITE_APP_URL}/blog/${entry.slug}`,
      title: entry.title,
      description: entry.description,
      content: entry.content,
      date: new Date(entry.created),
      author: [
        {
          name: "Jan Lavička",
          email: "iam@janlavicka.com",
          link: import.meta.env.VITE_APP_URL,
        },
      ],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
