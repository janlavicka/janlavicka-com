import {
  RiGithubLine,
  RiMastodonLine,
  RiProductHuntLine,
  RiTwitterXLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between py-8 space-y-4 md:space-y-0 md:flex-row">
      <div className="flex space-x-4">
        <a href="https://twitter.com/janlavicka" title="Twitter">
          <RiTwitterXLine className="w-6 h-6 text-gray-900 transition duration-200 hover:text-blue-500" />
        </a>

        <a href="https://mastodon.world/@janlavicka" rel="me" title="Mastodon">
          <RiMastodonLine className="w-6 h-6 text-gray-900 transition duration-200 hover:text-blue-500" />
        </a>

        <a href="https://producthunt.com/@janlavicka" title="Product Hunt">
          <RiProductHuntLine className="w-6 h-6 text-gray-900 transition duration-200 hover:text-blue-500" />
        </a>

        <a href="https://github.com/janlavicka" title="GitHub">
          <RiGithubLine className="w-6 h-6 text-gray-900 transition duration-200 hover:text-blue-500" />
        </a>
      </div>

      <div className="text-sm text-gray-700">
        Copyright © 2010 - {new Date().getFullYear()} Jan Lavička
      </div>
    </div>
  );
}
