import { SitemapStream, streamToPromise } from "sitemap";
import { Post } from "@/models/post.server";

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

      for (const post of Post.findAll()) {
        stream.write({
          url: `/blog/${post.slug}`,
        });
      }

      stream.end();
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
