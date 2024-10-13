import { getPosts } from "@/models/post.server";
import { SitemapStream } from "sitemap";

export const loader = async () => {
  const result: string = await new Promise(async (resolve, reject) => {
    let chunks: Uint8Array[] = [];

    const stream = new SitemapStream({ hostname: process.env.APP_URL });

    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));

    stream.write({
      url: "/",
    });

    stream.write({
      url: "/projects",
    });

    stream.write({
      url: "/blog",
    });

    stream.write({
      url: "/links",
    });

    stream.write({
      url: "/uses",
    });

    const posts = await getPosts();

    for (const post of posts) {
      stream.write({
        url: `/blog/${post.slug}`,
      });
    }

    stream.end();
  });

  return new Response(result, {
    headers: {
      "Content-Type": "text-xml",
    },
  });
};
