import { createContext } from "react";

type PageContextValue = {
  fileName: string;
  isError: boolean;
};

export const PageContext = createContext<PageContextValue>({ fileName: "", isError: false });
