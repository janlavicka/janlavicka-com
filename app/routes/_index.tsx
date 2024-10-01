import { Text } from "@/components/Text";
import { createMeta } from "@/utils/meta";
import { json, MetaFunction } from "@remix-run/node";

export type Loader = typeof loader;

export const meta: MetaFunction<Loader> = (args) => {
  if (!args.data) return [];

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: args.data.meta.url,
      },
      {
        title: "Jan Lavička",
      },

      // Open Graph
      {
        property: "og:url",
        content: args.data.meta.url,
      },
      {
        property: "og:title",
        content: "Jan Lavička",
      },

      // Twitter
      {
        name: "twitter:title",
        content: "Jan Lavička",
      },
    ],
    args
  );
};

export const loader = async () => {
  return json({
    meta: {
      url: process.env.APP_URL,
    },
  });
};

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Who am I?</h1>

      <Text>
        <p>
          Hi, I&apos;m{" "}
          <a
            href="https://twitter.com/JanLavicka"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            @janlavicka
          </a>
          , a creator, full-stack software developer, and indie hacker.
        </p>

        <p>
          I&apos;m working on several projects on the side as an indie hacker.
          Every application is written in JavaScript, TypeScript and the
          technology stack looks like this:{" "}
          <a
            href="https://remix.run"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Remix
          </a>{" "}
          (main frontend application with{" "}
          <a
            href="https://reactjs.org"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            React
          </a>{" "}
          under the hood),{" "}
          <a
            href="https://react-query.tanstack.com/"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            React Query
          </a>
          ,{" "}
          <a
            href="https://formidable.com/open-source/urql/"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            URQL
          </a>{" "}
          (
          <a
            href="https://graphql.org"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            GraphQL
          </a>{" "}
          client - I have also used{" "}
          <a
            href="https://www.apollographql.com"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Apollo
          </a>
          , but{" "}
          <a
            href="https://formidable.com/open-source/urql/"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            URQL
          </a>{" "}
          is much more straight forward),{" "}
          <a
            href="https://www.prisma.io"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Prisma
          </a>{" "}
          (SQL client),{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Tailwind CSS
          </a>{" "}
          (styling), and finally whatever queue job background process is needed
          is written in{" "}
          <a
            href="https://nodejs.org"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Node.js
          </a>{" "}
          and deployed with{" "}
          <a
            href="https://dokku.com"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            Dokku
          </a>
          .
        </p>

        <p>
          I'm a frontend focused software engineer in my day job at a
          later-stage startup.
        </p>

        <p>
          So if you have something interesting where I can help with my skill
          set shoot me an email at{" "}
          <a
            href="mailto:iam@janlavicka.com"
            className="font-medium underline text-neutral-900 hover:text-blue-500"
          >
            iam@janlavicka.com
          </a>
          .
        </p>
      </Text>
    </div>
  );
}
