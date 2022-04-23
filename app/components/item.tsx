import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Item({ children }: Props) {
  return <li className="space-y-2 text-base text-gray-700">{children}</li>;
}
