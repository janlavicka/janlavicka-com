import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Text({ children }: Props) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-neutral-700">
      {children}
    </div>
  );
}
