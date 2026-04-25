import { describe, it, expect } from "vitest";
import { getAPIKey } from "./auth.js";

describe("getAPIKey", () => {
  it("should return null if no authorization header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null if authorization header is not in the correct format", () => {
    const headers = { authorization: "Bearer some-token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return the API key if authorization header is in the correct format", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });
});
