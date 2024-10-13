import { NavLink } from "@remix-run/react";

export function Header() {
  const renderItem = (to: string, label: string) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `inline-block px-3 py-1 rounded-lg font-medium hover:bg-neutral-100 ${
            isActive ? "text-neutral-900" : "text-neutral-500"
          }`
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
        {renderItem("/links", "Links")}
        {renderItem("/uses", "Uses")}
      </div>
    </div>
  );
}
