import Layout from "@/components/layout";
import styles from "@/styles/app.css";
import {
  json,
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { useMemo } from "react";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
    }
  }
}

declare global {
  interface Window {
    env: {
      APP_URL: string;
    };
  }
}

export type Loader = typeof loader;

export const meta: V2_MetaFunction<Loader> = ({ data }) => {
  if (!data) return [];

  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Jan Lavička" },
    {
      name: "description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },

    { property: "og:title", content: "Jan Lavička" },
    {
      property: "og:description",
      content:
        "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: `${data.env.APP_URL}/images/social.jpg`,
    },
    {
      property: "og:url",
      content: `${data.env.APP_URL}/`,
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
      name: "twitter:site",
      content: "@janlavicka",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: `${data.env.APP_URL}/images/social.jpg`,
    },

    { name: "format-detection", content: "telephone=no" },
    { name: "HandheldFriendly", content: "true" },
    { name: "theme-color", content: "#111827" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "icon", type: "image/png", href: "/images/favicon.png" },
];

export const loader: LoaderFunction = async () => {
  return json({
    env: {
      APP_URL: process.env.APP_URL,
    },
  });
};

export default function App() {
  const data = useLoaderData<Loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased text-gray-900 bg-gray-50">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(data.env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const title = useMemo(() => {
    if (isRouteErrorResponse(error)) {
      return error.status;
    }

    return "500";
  }, [error]);

  const description = useMemo(() => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    }

    return "Internal Server Error";
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>{`${title} | Jan Lavička`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased text-gray-900 bg-white">
        <h1 className="p-6 text-4xl font-bold text-gray-900 md:font-extrabold md:text-5xl lg:text-6xl">
          {description}
        </h1>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
