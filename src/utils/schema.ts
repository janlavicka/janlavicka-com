import type { Thing, WithContext } from "schema-dts";

export function jsonLd<T extends Thing>(schema: WithContext<T>) {
  return { "script:ld+json": schema };
}
