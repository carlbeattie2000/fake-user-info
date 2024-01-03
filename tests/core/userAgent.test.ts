import { expectTypeOf, expect, test } from "vitest";
import { UserAgent } from "../../src/core/userAgents";

const testAgent = new UserAgent();

test("should generate a random user agent string", () => {
  const agentString = testAgent.generate();

  expectTypeOf(agentString).toBeString();
  expect(agentString.length).toBeGreaterThan(0);
});
