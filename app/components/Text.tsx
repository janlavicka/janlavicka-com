import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Text({ children }: Props) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-gray-700">
      {children}
    </div>
  );
}
