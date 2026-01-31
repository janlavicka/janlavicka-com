import { useContext } from "react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import { PageContext } from "@/contexts";

export function Header() {
  const page = useContext(PageContext);

  const renderItem = (to: string, label: string, hide = false) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          twMerge(
            "px-3 py-1 rounded-lg font-medium hover:bg-neutral-100",
            isActive && !page.isError ? "text-neutral-900" : "text-neutral-500",
            hide ? "hidden md:inline-block" : "inline-block",
          )
        }
      >
        {label}
      </NavLink>
    );
  };

  return (
    <div className="flex items-center justify-between pt-8 pb-8">
      <div>👋</div>

      <div className="-ml-3">
        {renderItem("/", "Home")}
        {renderItem("/projects", "Projects")}
        {renderItem("/blog", "Blog")}
        {renderItem("/links", "Links", true)}
        {renderItem("/uses", "Uses")}
      </div>
    </div>
  );
}
