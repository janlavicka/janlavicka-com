import { Text } from "@/components";
import { MetaFunction } from "@remix-run/node";

export type Loader = typeof loader;

export const meta: MetaFunction<Loader> = (args) => {
  if (!args.data) return [];

  return [
    {
      tagName: "link",
      rel: "canonical",
      content: args.data.meta.url,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Jan Lavička",
    },
    {
      name: "description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },

    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site_name",
      content: "Jan Lavička",
    },
    {
      property: "og:url",
      content: args.data.meta.url,
    },
    {
      property: "og:title",
      content: "Jan Lavička",
    },
    {
      property: "og:description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:image",
      content: args.data.meta.image,
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@janlavicka",
    },
    {
      name: "twitter:title",
      content: "Jan Lavička",
    },
    {
      name: "twitter:description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: args.data.meta.image,
    },
  ];
};

export const loader = async () => {
  return {
    meta: {
      url: process.env.APP_URL,
      image: `${process.env.APP_URL}/images/social.jpg`,
    },
  };
};

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Who am I?</h1>

      <Text>
        <p>
          Hi, I&apos;m{" "}
          <a
            href="https://x.com/JanLavicka"
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
          I&apos;m a fullstack software engineer in my day job at a private
          equity firm.
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
