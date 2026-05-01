import { describe, expect, it } from "vitest";
import { Post } from "./post.server";

describe("Post.findAll", () => {
  it("returns all posts with slug populated", () => {
    const posts = Post.findAll();

    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => typeof post.slug === "string" && post.slug.length > 0)).toBe(true);
  });
});

describe("Post.findBySlug", () => {
  it("returns rendered post for an existing slug", () => {
    const [first] = Post.findAll();

    const post = Post.findBySlug(first.slug as string);

    expect(post.slug).toBe(first.slug);
    expect(post.content).toContain("<");
  });

  it("throws a 404 Response for an unknown slug", () => {
    expect(() => Post.findBySlug("does-not-exist")).toThrow(Response);

    try {
      Post.findBySlug("does-not-exist");
    } catch (error) {
      expect(error).toBeInstanceOf(Response);
      expect((error as Response).status).toBe(404);
    }
  });
});
