import { getPosts } from "@/models/post.server";
import { SitemapStream, streamToPromise } from "sitemap";

export const loader = async () => {
  const result: string = await new Promise((resolve, reject) => {
    try {
      const stream = new SitemapStream({ hostname: process.env.APP_URL });

      streamToPromise(stream).then(
        (result) => resolve(result.toString("utf-8")),
        (error) => reject(error),
      );

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

      getPosts().then(
        (posts) => {
          for (const post of posts) {
            stream.write({
              url: `/blog/${post.slug}`,
            });
          }
          stream.end();
        },
        (error: Error) => {
          stream.destroy(error);
          reject(error);
        },
      );
    } catch (error) {
      reject(error);
    }
  });

  return new Response(result, {
    headers: {
      "Content-Type": "text-xml",
    },
  });
};
