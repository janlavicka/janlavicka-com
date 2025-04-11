import { getPosts } from "@/models/post.server";
import { SitemapStream, streamToPromise } from "sitemap";

export const loader = async () => {
  const result: string = await new Promise(async (resolve, reject) => {
    const stream = new SitemapStream({ hostname: process.env.APP_URL });

    streamToPromise(stream).then((result) => resolve(result.toString("utf-8")));

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
