import { createContext } from "react";

type PageContextValue = {
  routeFile: string;
};

export const PageContext = createContext<PageContextValue>({ routeFile: "" });
