import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Hello world</Text>);

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
