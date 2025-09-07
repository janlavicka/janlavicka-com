import {
  RiBlueskyLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMastodonLine,
  RiProductHuntLine,
  RiTwitterXLine,
} from "react-icons/ri";

export function meta() {
  return [
    {
      tagName: "link",
      rel: "canonical",
      content: import.meta.env.VITE_APP_URL,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Jan Lavička",
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
      content: import.meta.env.VITE_APP_URL,
    },
    {
      property: "og:title",
      content: "Jan Lavička",
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
      content: "Jan Lavička",
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
    <div className="flex justify-center items-center flex-grow">
      <div className="flex items-center flex-col">
        <img src="/images/me.jpg" alt="jan Lavička" loading="lazy" className="rounded-full w-30 mb-4" />

        <h1 className="text-3xl font-extrabold md:text-4xl">Jan Lavička</h1>

        <h2 className="text-lg text-gray-500 text-center text-balance mt-1">
          Creator&nbsp;✨ Full&#8209;Stack&nbsp;Software&nbsp;Developer&nbsp;🛠️ Indie&nbsp;Hacker&nbsp;💡
        </h2>

        <div className="flex gap-2 mt-2">
          <a href="mailto:info@janlavicka.com" title="Email">
            <RiMailLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://twitter.com/janlavicka" title="Twitter">
            <RiTwitterXLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://mastodon.world/@janlavicka" rel="me" title="Mastodon">
            <RiMastodonLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://producthunt.com/@janlavicka" title="Product Hunt">
            <RiProductHuntLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://bsky.app/profile/janlavicka.com" title="Bluesky">
            <RiBlueskyLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://github.com/janlavicka" title="GitHub">
            <RiGithubLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>

          <a href="https://www.linkedin.com/in/janlavicka/" title="LinkedIn">
            <RiLinkedinBoxLine className="w-6 h-6 transition duration-200 text-neutral-700 hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
