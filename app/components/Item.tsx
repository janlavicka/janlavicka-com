import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Item({ children }: Props) {
  return <li className="space-y-2 text-base text-neutral-700">{children}</li>;
}
