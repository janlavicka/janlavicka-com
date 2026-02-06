/// <reference types="vite/client" />
/// <reference path=".react-router/types/+future.ts" />

import type { ClapCounterDurableObject } from "@/durable-objects/ClapCounterDurableObject";

declare global {
  interface Env {
    CLAP_COUNTER: DurableObjectNamespace<ClapCounterDurableObject>;
  }
}
