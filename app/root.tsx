import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "@/styles/app.css";
import Layout from "@/components/layout";
import { DynamicLinks } from "remix-utils";
import Analytics from "./components/analytics";

declare global {
  interface Window {
    env: {
      APP_URL: string;
      GA_UA_ID: string;
      GA_V4_ID: string;
    };
  }
}

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Jan Lavička",
  "og:title": "Jan Lavička",
  "twitter:title": "Jan Lavička",
  description:
    "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
  "og:description":
    "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
  "twitter:description":
    "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
  "og:type": "website",
  "og:image": `${data.env.APP_URL}/images/screen.jpg`,
  "og:url": `${data.env.APP_URL}/`,
  "twitter:site": "@janlavicka",
  "twitter:card": "summary_large_image",
  "twitter:image": `${data.env.APP_URL}/images/screen.jpg`,
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "icon", type: "image/png", href: "/images/favicon.png" },
];

export const loader: LoaderFunction = async () => {
  return json({
    env: {
      APP_URL: process.env.APP_URL,
      GA_UA_ID: process.env.GA_UA_ID,
      GA_V4_ID: process.env.GA_V4_ID,
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
        <Analytics />
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
