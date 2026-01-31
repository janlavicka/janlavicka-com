import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Layout({ className = "", children }: Props) {
  return (
    <div className="flex flex-col max-w-2xl w-full px-4 mx-auto md:px-8">
      <Header />

      <div className={twMerge("flex grow pb-8", className)}>{children}</div>

      <Footer />
    </div>
  );
}
