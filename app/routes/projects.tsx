import { Text } from "@/components/Text";
import { Loader as RootLoader } from "@/root";
import { createMeta, getRouteLoaderData } from "@/utils/meta";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = (args) => {
  const parentData = getRouteLoaderData<RootLoader>("root", args);

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: `${parentData.env.APP_URL}/projects`,
      },
      {
        title: "Projects | Jan Lavička",
      },
    ],
    args,
  );
};

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>

      <Text>
        <p>
          Those are projects I am actively working on or I worked on in the
          past.
        </p>
      </Text>

      <h2 className="text-lg font-bold text-gray-900 hover:text-blue-500">
        <a href="https://getjuiceable.com" className="hover:underline">
          Juiceable
        </a>
      </h2>

      <Text>
        <p>
          Coupons and cashback browser extension that scans the internet for the
          best deals. Users can favorite products on the e-commerce website and
          get price drop notifications.
        </p>
      </Text>

      <a
        href="https://getjuiceable.com"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/getjuiceable-com.jpg" alt="Juiceable" />
        </div>
      </a>

      <h2 className="text-lg font-bold text-gray-900 hover:text-blue-500">
        <a href="https://tripcutters.com" className="hover:underline">
          Trip Cutters
        </a>
      </h2>

      <Text>
        <p>
          Get inspired and travel across Europe for cheap while exploring the
          beauties of the world. Website searches trips (flight + accommodation)
          for best prices thanks to multiple travel hacking techniques.
        </p>
      </Text>

      <a
        href="https://tripcutters.com"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/tripcutters-com.jpg" alt="Trip Cutters" />
        </div>
      </a>

      <h2 className="text-lg font-bold text-gray-900 hover:text-blue-500">
        <a href="https://jobsfordevelopers.com" className="hover:underline">
          Jobs for Developers
        </a>
      </h2>

      <Text>
        <p>
          Jobs for Developers is a job board strictly focusing on remove jobs
          offering remote work. I found it hard to search for such a job myself
          and I have created this job board for this reason.
        </p>
      </Text>

      <a
        href="https://jobsfordevelopers.com"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img
            src="/images/jobsfordevelopers-com.jpg"
            alt="Jobs for Developers"
          />
        </div>
      </a>

      <h2 className="text-lg font-bold text-gray-900 hover:text-blue-500">
        <a href="https://filedash.co" className="hover:underline">
          Filedesh
        </a>
      </h2>

      <Text>
        <p>
          Filedash helps you to receive large files from your clients with your
          own custom upload link. Expired and lost share links are things of the
          past - receive files in the same way as you recieve e-mails. Customize
          your upload link, so it matches your company colors and texts.
        </p>
      </Text>

      <a
        href="https://filedash.co"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/filedash-co.jpg" alt="FileDash" />
        </div>
      </a>
    </div>
  );
}
