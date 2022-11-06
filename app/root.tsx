import Layout from "@/components/layout";
import styles from "@/styles/app.css";
import {
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { DynamicLinks } from "remix-utils";

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
      NODE_ENV: string;
      APP_URL: string;
    };
  }
}

export const meta: MetaFunction = ({ data }) => {
  if (!data) return {};

  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Jan Lavička",
    description:
      "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",

    "og:title": "Jan Lavička",
    "og:description":
      "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    "og:type": "website",
    "og:image": `${data.env.APP_URL}/images/social.jpg`,
    "og:url": `${data.env.APP_URL}/`,
    "twitter:title": "Jan Lavička",
    "twitter:description":
      "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    "twitter:site": "@janlavicka",
    "twitter:card": "summary_large_image",
    "twitter:image": `${data.env.APP_URL}/images/social.jpg`,

    "format-detection": "telephone=no",
    HandheldFriendly: "true",
    "theme-color": "#111827",
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "icon", type: "image/png", href: "/images/favicon.png" },
];

export const loader: LoaderFunction = async () => {
  return json({
    env: {
      NODE_ENV: process.env.NODE_ENV,
      APP_URL: process.env.APP_URL,
    },
  });
};

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <DynamicLinks />
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

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html lang="en">
      <head>
        <title>{`${caught.status} | Jan Lavička`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased text-gray-900 bg-white">
        <h1 className="p-6 text-4xl font-bold text-gray-900 md:font-extrabold md:text-5xl lg:text-6xl">
          {caught.status} {caught.statusText}
        </h1>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>{`500 | Jan Lavička`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased text-gray-900 bg-white">
        <h1 className="p-6 text-4xl font-bold text-gray-900 md:font-extrabold md:text-5xl lg:text-6xl">
          500 Internal Server Error
        </h1>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
