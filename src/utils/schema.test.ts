import type { WebSite } from "schema-dts";
import { describe, expect, it } from "vitest";
import { jsonLd } from "./schema";

describe("jsonLd", () => {
  it("wraps schema under script:ld+json key", () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Test",
      url: "https://example.com",
    } as const;

    const result = jsonLd<WebSite>(schema);

    expect(result).toEqual({ "script:ld+json": schema });
  });
});
