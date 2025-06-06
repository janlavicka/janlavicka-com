import { Layout } from "@/components/Layout";
import { useMemo } from "react";
import type { HeadersFunction, LinksFunction } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "react-router";
import styles from "./styles.css?url";

export type Loader = typeof loader;

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css",
  },
  {
    rel: "icon",
    href: "/images/favicon.png",
  },
  {
    rel: "apple-touch-icon",
    href: "/images/favicon.png",
  },
];

export const headers: HeadersFunction = () => ({
  "X-Frame-Options": "DENY",
  "Content-Security-Policy": "frame-ancestors 'none'",
});

export const loader = async () => {
  return {
    env: {
      APP_URL: process.env.APP_URL,
    },
  };
};

export default function App() {
  const data = useLoaderData<Loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased text-neutral-900">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: env variables
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(data.env)}`,
          }}
        />
        <Scripts />
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="noindex, nofollow" />
        <title>{`${title} | Jan Lavička`}</title>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen font-sans text-base antialiased bg-white text-neutral-900">
        <h1 className="p-6 text-4xl font-bold text-neutral-900 md:font-extrabold md:text-5xl lg:text-6xl">
          {description}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
