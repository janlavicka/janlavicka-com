import { useMemo } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "react-router";
import styles from "./styles.css?url";

export function links() {
  return [
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
}

export function headers() {
  return {
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": "frame-ancestors 'none'",
  };
}

export default function App() {
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
      <body className="flex min-h-dvh font-sans text-base antialiased text-neutral-900">
        <Outlet />
        <ScrollRestoration />
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
      <body className="flex min-h-dvh font-sans text-base antialiased text-neutral-900">
        <h1 className="p-6 text-4xl font-bold text-neutral-900 md:font-extrabold md:text-5xl lg:text-6xl">
          {description}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
