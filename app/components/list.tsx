import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function List({ children }: Props) {
  return <ul className="pl-5 space-y-6 list-outside list-disc">{children}</ul>;
}
