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
        href: `${parentData.env.APP_URL}/projects`,
      },
      { title: "Projects | Jan Lavička" },
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

      <div className="overflow-hidden rounded-md shadow-default">
        <div className="-mb-2">
          <img
            src="/images/jobsfordevelopers-com.jpg"
            alt="Jobs for Developers - job board with remote job opportunities for developers"
          />
        </div>
      </div>

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

      <div className="overflow-hidden rounded-md shadow-default">
        <div className="-mb-2">
          <img
            src="/images/filedash-co.jpg"
            alt="FileDash - inbox for files from your clients"
          />
        </div>
      </div>

      <p className="text-lg font-bold text-gray-900">More coming soon...</p>
    </div>
  );
}
