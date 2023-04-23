import Item from "@/components/item";
import List from "@/components/list";
import Text from "@/components/text";
import { createMeta, getMatchesData } from "@/utils";
import { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = (args) => {
  const parentData = getMatchesData("root", args);

  return createMeta(
    [
      {
        name: "canonical",
        content: `${parentData.env.APP_URL}/links`,
      },
      { title: "Links | Jan Lavička" },
    ],
    args,
  );
};

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Links</h1>

      <div className="mb-8">
        <Text>
          <p>
            This is a list of articles, books, podcasts, and other content that
            I found useful. Generally things worth sharing.
          </p>
        </Text>
      </div>

      <h2 className="text-lg font-bold text-gray-900">Posts</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="http://www.paulgraham.com/makersschedule.html"
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Do Things that Don&apos;t Scale
            </a>
          </p>
          <p className="leading-normal">By Paul Graham</p>
        </Item>
      </List>

      <h2 className="text-lg font-bold text-gray-900">Podcasts</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.indiehackers.com/podcasts"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Indie Hackers
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://thehustle.co/my-first-million-podcast/"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              My First Million
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://productjourney.fm"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Product Jurney
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://frontendfirst.fm"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Frontend First
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://fullstackradio.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Full Stack Radio
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.dancarlin.com/hardcore-history-series"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Hardcore History
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.startupsfortherestofus.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Startups For the Rest Of Us
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://open.spotify.com/show/5SSYyVWm0FaY8as96gE3EM"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              The Chernobyl Podcast
            </a>
          </p>
        </Item>
      </List>

      <h2 className="mb-4 text-lg font-bold text-gray-900">Books</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://basecamp.com/books/remote"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              REMOTE: Office Not Required
            </a>
          </p>
          <p className="leading-normal">
            By Jason Fried and David Heinemeier Hansson
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.priceintelligently.com/developing-your-saas-pricing-strategy"
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              It Doesn&apos;t Have to Be Crazy at Work
            </a>
          </p>
          <p className="leading-normal">
            By Jason Fried and David Heinemeier Hansson
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.amazon.com/dp/B01CYKUC9C"
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
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
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Rework
            </a>
          </p>
          <p className="leading-normal">
            By Jason Fried and David Heinemeier Hansson
          </p>
        </Item>
      </List>
    </div>
  );
}
