import { motion } from "framer-motion";
import { PiHandsClappingDuotone } from "react-icons/pi";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiMailLine,
  RiPinterestFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { useFetcher, useLoaderData } from "react-router";
import type { Loader } from "../route";

export function Panel() {
  const loaderData = useLoaderData<Loader>();
  const fetcher = useFetcher();

  console.log(loaderData);

  const claps = fetcher.formData ? loaderData.claps + 1 : loaderData.claps;

  const url = encodeURIComponent(`${import.meta.env.VITE_APP_URL}/blog/${loaderData.post.slug}`);

  const iconClass = "w-6 h-6 text-neutral-700 hover:text-blue-500 transition duration-200";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 my-4">
      <fetcher.Form method="post">
        <motion.button
          type="submit"
          whileTap={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center cursor-pointer gap-2 text-neutral-700 hover:text-blue-500"
        >
          <PiHandsClappingDuotone className="w-6 h-6" />
          <span className="text-sm font-medium">
            {claps > 0 ? new Intl.NumberFormat("en").format(claps).replace(/,/g, " ") : "Clap"}
          </span>
        </motion.button>
      </fetcher.Form>

      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-700">Share</span>
        <div className="flex gap-3">
          <a href={`mailto:?body=${url}`} target="_blank" rel="noopener noreferrer" title="Share via Email">
            <RiMailLine className={iconClass} />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Pinterest"
          >
            <RiPinterestFill className={iconClass} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on X"
          >
            <RiTwitterXFill className={iconClass} />
          </a>
          <a
            href={`https://web.whatsapp.com/send?text=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on WhatsApp"
          >
            <RiWhatsappFill className={iconClass} />
          </a>
          <a
            href={`https://www.facebook.com/share.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
          >
            <RiFacebookFill className={iconClass} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on LinkedIn"
          >
            <RiLinkedinFill className={iconClass} />
          </a>
        </div>
      </div>
    </div>
  );
}
