import type { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto min-h-screen px-4 md:px-8">
      <Navigation />

      <div className="flex-grow pb-8">{children}</div>

      <Footer />
    </div>
  );
}
