import { describe, expect, it } from "vitest";
import { loomaraVersion } from "./index.js";

describe("loomara core", () => {
  it("exposes its initial version", () => {
    expect(loomaraVersion).toBe("0.0.0");
  });
});
