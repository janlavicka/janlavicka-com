import Text from "@/components/text";
import { Loader as RootLoader } from "@/root";
import { createMeta, getRouteLoaderData } from "@/utils";
import { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = (args) => {
  const parentData = getRouteLoaderData<RootLoader>("root", args);

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: `${parentData.env.APP_URL}/`,
      },
      { title: "Jan Lavička" },
    ],
    args,
  );
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
            className="font-medium text-gray-900 underline hover:text-blue-500"
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
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            Remix
          </a>{" "}
          (main frontend application with{" "}
          <a
            href="https://reactjs.org"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            React
          </a>{" "}
          under the hood),{" "}
          <a
            href="https://react-query.tanstack.com/"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            React Query
          </a>
          ,{" "}
          <a
            href="https://formidable.com/open-source/urql/"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            URQL
          </a>{" "}
          (
          <a
            href="https://graphql.org"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            GraphQL
          </a>{" "}
          client - I have also used{" "}
          <a
            href="https://www.apollographql.com"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            Apollo
          </a>
          , but{" "}
          <a
            href="https://formidable.com/open-source/urql/"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            URQL
          </a>{" "}
          is much more straight forward),{" "}
          <a
            href="https://www.prisma.io"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            Prisma
          </a>{" "}
          (SQL client),{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            Tailwind CSS
          </a>{" "}
          (styling), and finally whatever queue job background process is needed
          is written in{" "}
          <a
            href="https://nodejs.org"
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            Node.js
          </a>{" "}
          and deployed with{" "}
          <a
            href="https://dokku.com"
            className="font-medium text-gray-900 underline hover:text-blue-500"
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
            className="font-medium text-gray-900 underline hover:text-blue-500"
          >
            iam@janlavicka.com
          </a>
          .
        </p>
      </Text>
    </div>
  );
}
