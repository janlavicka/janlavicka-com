import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col max-w-2xl min-h-screen px-4 mx-auto md:px-8">
      <Navigation />

      <div className="flex-grow pb-8">{children}</div>

      <Footer />
    </div>
  );
}
