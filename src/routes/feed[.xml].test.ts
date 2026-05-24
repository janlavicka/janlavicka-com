import { describe, expect, it } from "vitest";
import { loader } from "./feed[.xml]";

describe("feed.xml loader", () => {
  it("responds with an RSS 2.0 document", async () => {
    const response = await loader();

    expect(response).toBeInstanceOf(Response);
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/rss+xml");

    const body = await response.text();

    expect(body).toContain('<rss version="2.0"');
    expect(body).toContain("<channel>");
    expect(body).toContain("<title>Jan Lavička</title>");
  });
});
