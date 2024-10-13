import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col max-w-2xl min-h-screen px-4 mx-auto md:px-8">
      <Header />

      <div className="flex-grow pb-8">{children}</div>

      <Footer />
    </div>
  );
}
