/// <reference types="vite/client" />
/// <reference path=".react-router/types/+future.ts" />

import type { ClapCounterDurableObject } from "@/durable-objects";

declare global {
  interface Env {
    CLAP_COUNTER: DurableObjectNamespace<ClapCounterDurableObject>;
  }

  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }

  interface ImportMetaEnv {
    readonly VITE_APP_URL: string;
    readonly VITE_POSTHOG_API_KEY: string;
    readonly VITE_GA_MEASUREMENT_ID: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
