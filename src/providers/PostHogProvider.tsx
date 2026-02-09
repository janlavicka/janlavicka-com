import posthog from "posthog-js";
import { PostHogErrorBoundary, PostHogProvider as Provider } from "posthog-js/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export function PostHogProvider(props: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!import.meta.env.VITE_POSTHOG_API_KEY) return;

    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      api_host: "https://glacier.janlavicka.com",
      ui_host: "https://eu.posthog.com",
      capture_pageview: false,
      capture_pageleave: true,
    });

    setHydrated(true);
  }, []);

  if (!hydrated) return <>{props.children}</>;

  return (
    <Provider client={posthog}>
      <PostHogErrorBoundary>{props.children}</PostHogErrorBoundary>
    </Provider>
  );
}
