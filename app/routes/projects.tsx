import Text from "@/components/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ parentsData }) => ({
  title: "Projects | Jan Lavička",
  "og:title": "Projects | Jan Lavička",
  "twitter:title": "Projects | Jan Lavička",
  "og:url": `${parentsData.root.env.APP_URL}/projects`,
});

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

      <p className="text-lg font-bold text-gray-900">More coming soon...</p>
    </div>
  );
}
