import { describe, expect, it } from "vitest";
import { Post } from "./post.server";

describe("Post.findAll", () => {
  it("returns all posts with slug populated", () => {
    const posts = Post.findAll();

    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => typeof post.slug === "string" && post.slug.length > 0)).toBe(true);
  });

  it("returns posts ordered newest first", () => {
    const dates = Post.findAll().map((post) => post.created as string);

    expect(dates.length).toBeGreaterThan(1);
    expect(dates).toEqual([...dates].sort((a, b) => b.localeCompare(a)));
  });
});

describe("Post.byCreatedDesc", () => {
  it("sorts newer created dates before older ones", () => {
    const posts = [{ created: "2021-06-05" }, { created: "2026-05-22" }, { created: "2024-01-01" }];

    const ordered = [...posts].sort(Post.byCreatedDesc).map((post) => post.created);

    expect(ordered).toEqual(["2026-05-22", "2024-01-01", "2021-06-05"]);
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
