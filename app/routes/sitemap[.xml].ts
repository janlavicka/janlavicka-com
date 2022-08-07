import { getPosts } from "@/models";
import type { LoaderFunction } from "@remix-run/node";
import { SitemapStream } from "sitemap";

export const loader: LoaderFunction = async () => {
  const result: string = await new Promise(async (resolve, reject) => {
    let chunks: Uint8Array[] = [];

    const stream = new SitemapStream({ hostname: process.env.APP_URL });

    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));

    stream.write({ url: "/", changefreq: "daily" });
    stream.write({ url: "/projects", changefreq: "daily" });
    stream.write({ url: "/blog", changefreq: "daily" });
    stream.write({ url: "/links", changefreq: "daily" });
    stream.write({ url: "/uses", changefreq: "daily" });

    const posts = await getPosts();

    for (const post of posts) {
      stream.write({ url: `/blog/${post.slug}`, changefreq: "daily" });
    }

    stream.end();
  });

  return new Response(result, {
    headers: { "Content-Type": "text-xml" },
  });
};
