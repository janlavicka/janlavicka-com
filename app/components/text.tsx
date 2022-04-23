import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Text({ children }: Props) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-gray-700">
      {children}
    </div>
  );
}
