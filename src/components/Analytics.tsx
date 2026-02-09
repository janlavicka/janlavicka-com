import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function Analytics() {
  const location = useLocation();
  const posthog = usePostHog();

  // biome-ignore lint/correctness/useExhaustiveDependencies: trigger on route change
  useEffect(() => {
    posthog.capture("$pageview");
  }, [location]);

  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) return;

    window.gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    });
  }, [location]);

  if (!import.meta.env.VITE_GA_MEASUREMENT_ID) return;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`} />

      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Analytics 4
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });`,
        }}
      />
    </>
  );
}
