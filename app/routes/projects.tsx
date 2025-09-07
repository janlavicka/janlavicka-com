import { Text } from "@/components";

export function meta() {
  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/projects`,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Projects • Jan Lavička",
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
      content: `${import.meta.env.VITE_APP_URL}/projects`,
    },
    {
      property: "og:title",
      content: "Projects",
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
      content: "Projects",
    },
    {
      name: "twitter:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },
  ];
}

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>

      <Text>
        <p>Those are projects I am actively working on or I worked on in the past.</p>
      </Text>

      <h2 className="text-lg font-bold text-neutral-900 hover:text-blue-500 hover:underline">
        <a href="https://refer.is">refer.is - link shortener, branded links, QR codes, and link tracking</a>
      </h2>

      <Text>
        <p>
          Refer.is a link management tool that provides URL shortening, branded link creation, QR code generation, and
          link tracking analytics. It also includes a browser extension for convenient link access and management.
        </p>
      </Text>

      <a
        href="https://refer.is"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden border-2 border-white rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/refer-is.jpg" alt="refer.is" />
        </div>
      </a>

      <h2 className="text-lg font-bold text-neutral-900 hover:text-blue-500 hover:underline">
        <a href="https://jobsfordevelopers.com">Jobs for Developers - jobs for software engineers</a>
      </h2>

      <Text>
        <p>
          Jobs for Developers is a job board strictly focusing on remove jobs offering remote work. I found it hard to
          search for such a job myself and I have created this job board for this reason.
        </p>
      </Text>

      <a
        href="https://jobsfordevelopers.com"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden border-2 border-white rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/jobsfordevelopers-com.jpg" alt="Jobs for Developers" />
        </div>
      </a>

      <h2 className="text-lg font-bold text-neutral-900 hover:text-blue-500 hover:underline">
        <a href="https://tripcutters.com">Trip Cutters - travel deals for the modern traveler</a>
      </h2>

      <Text>
        <p>
          Get inspired and travel across Europe for cheap while exploring the beauties of the world. Website searches
          trips (flight + accommodation) for best prices thanks to multiple travel hacking techniques.
        </p>
      </Text>

      <a
        href="https://tripcutters.com"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden border-2 border-white rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/tripcutters-com.jpg" alt="Trip Cutters" />
        </div>
      </a>

      {/*<h2 className="text-lg font-bold text-neutral-900 hover:text-blue-500 hover:underline">
        <a href="https://filedash.co">Filedash - collect and receive files with upload link</a>
      </h2>

      <Text>
        <p>
          Filedash helps you to receive large files from your clients with your own custom upload link. Expired and lost
          share links are things of the past - receive files in the same way as you recieve e-mails. Customize your
          upload link, so it matches your company colors and texts.
        </p>
      </Text>

      <a
        href="https://filedash.co"
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden border-2 border-white rounded-md shadow-default"
      >
        <div className="-mb-2">
          <img src="/images/filedash-co.jpg" alt="FileDash" />
        </div>
      </a>*/}
    </div>
  );
}
