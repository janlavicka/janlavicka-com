import { SitemapStream, streamToPromise } from "sitemap";
import { getPosts } from "@/models/post.server";

export async function loader() {
  const result: string = await new Promise((resolve, reject) => {
    try {
      const stream = new SitemapStream({ hostname: import.meta.env.VITE_APP_URL });

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
}
