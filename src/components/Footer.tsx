import { useContext } from "react";
import { PageContext } from "@/contexts";

export function Footer() {
  const page = useContext(PageContext);

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-8 text-sm text-neutral-700">
      <a
        href={`https://github.com/janlavicka/janlavicka-com/edit/main/src/routes/${page.routeFile}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neutral-900"
      >
        Edit on GitHub
      </a>
      <div>Copyright © 2010 - {new Date().getFullYear()} Jan Lavička</div>
    </div>
  );
}
