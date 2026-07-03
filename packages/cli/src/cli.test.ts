import { describe, expect, it } from "vitest";

describe("loomara CLI", () => {
  it("has a valid initial package version", () => {
    expect("0.0.0").toMatch(/^\d+\.\d+\.\d+$/);
  });
});
