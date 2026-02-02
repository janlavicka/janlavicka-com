import type { BreadcrumbList, WebPage, WithContext } from "schema-dts";
import { Item, Layout, List, Text } from "@/components";
import { PageContext } from "@/contexts";
import { jsonLd } from "@/utils";

export function meta() {
  const webPage: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Links",
    description: "Curated articles, books, podcasts, and resources Jan Lavička found useful.",
    url: `${import.meta.env.VITE_APP_URL}/links`,
  };

  const breadcrumbs: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: import.meta.env.VITE_APP_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Links",
      },
    ],
  };

  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/links`,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Links • Jan Lavička",
    },
    {
      name: "description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
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
      content: `${import.meta.env.VITE_APP_URL}/links`,
    },
    {
      property: "og:title",
      content: "Links",
    },
    {
      property: "og:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
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
      content: "Links",
    },
    {
      name: "twitter:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },

    // Structured Data
    jsonLd(webPage),
    jsonLd(breadcrumbs),
  ];
}

export default function Page() {
  return (
    <PageContext.Provider value={{ fileName: "src/routes/links.tsx", isError: false }}>
      <Layout>
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-2xl font-bold md:text-3xl">Links</h1>

          <div className="mb-8">
            <Text>
              <p>
                This is a list of articles, books, podcasts, and other content that I found useful. Generally things
                worth sharing.
              </p>
            </Text>
          </div>

          <h2 className="text-lg font-bold text-neutral-900">Posts</h2>

          <List>
            <Item>
              <p className="leading-normal">
                <a
                  href="http://www.paulgraham.com/makersschedule.html"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Maker&apos;s Schedule, Manager&apos;s Schedule
                </a>
              </p>
              <p className="leading-normal">By Paul Graham</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://m.signalvnoise.com/its-always-your-fault/"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  It’s always your fault
                </a>
              </p>
              <p className="leading-normal">By David Heinemeier Hansson</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://m.signalvnoise.com/ive-never-had-a-goal/"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  I’ve never had a goal
                </a>
              </p>
              <p className="leading-normal">By Jason Fried</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="http://paulgraham.com/ds.html"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Do Things that Don&apos;t Scale
                </a>
              </p>
              <p className="leading-normal">By Paul Graham</p>
            </Item>
          </List>

          <h2 className="text-lg font-bold text-neutral-900">Podcasts</h2>

          <List>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.indiehackers.com/podcasts"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Indie Hackers
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://thehustle.co/my-first-million-podcast/"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  My First Million
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://productjourney.fm"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Product Jurney
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a href="https://frontendfirst.fm" className="font-bold underline text-neutral-900 hover:text-blue-500">
                  Frontend First
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://fullstackradio.com"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Full Stack Radio
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.dancarlin.com/hardcore-history-series"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Hardcore History
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.startupsfortherestofus.com"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Startups For the Rest Of Us
                </a>
              </p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://open.spotify.com/show/5SSYyVWm0FaY8as96gE3EM"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  The Chernobyl Podcast
                </a>
              </p>
            </Item>
          </List>

          <h2 className="mb-4 text-lg font-bold text-neutral-900">Books</h2>

          <List>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://basecamp.com/books/remote"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  REMOTE: Office Not Required
                </a>
              </p>
              <p className="leading-normal">By Jason Fried and David Heinemeier Hansson</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.priceintelligently.com/developing-your-saas-pricing-strategy"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  The Anatomy of SaaS Pricing Strategy
                </a>
              </p>
              <p className="leading-normal">By Price Intelligently</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://basecamp.com/books/calme"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  It Doesn&apos;t Have to Be Crazy at Work
                </a>
              </p>
              <p className="leading-normal">By Jason Fried and David Heinemeier Hansson</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.amazon.com/dp/B01CYKUC9C"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Deep Work
                </a>
              </p>
              <p className="leading-normal">By Cal Newport</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.amazon.com/dp/B00SHL3V8M"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Getting Things Done
                </a>
              </p>
              <p className="leading-normal">By David Allen</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://www.amazon.com/dp/0374533555"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Thinking, Fast and Slow
                </a>
              </p>
              <p className="leading-normal">By Daniel Kahneman</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://basecamp.com/books/getting-real"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Getting Real
                </a>
              </p>
              <p className="leading-normal">By Basecamp</p>
            </Item>
            <Item>
              <p className="leading-normal">
                <a
                  href="https://basecamp.com/books/rework"
                  className="font-bold underline text-neutral-900 hover:text-blue-500"
                >
                  Rework
                </a>
              </p>
              <p className="leading-normal">By Jason Fried and David Heinemeier Hansson</p>
            </Item>
          </List>
        </div>
      </Layout>
    </PageContext.Provider>
  );
}
