import { assertType, expectTypeOf, expect, test } from "vitest";
import { Base } from "../../src/core/base";

const testBase = new Base();

test("generates a random hex value string of given length, should not fail when given large size, or negative/no size. Should not equal the same generated string of the same size.", () => {
  const smallHexValueString = testBase.randomHexValue(4);
  const largeHexValueString = testBase.randomHexValue(4444);

  const sameSizeHexValueString01 = testBase.randomHexValue(16);
  const sameSizeHexValueString02 = testBase.randomHexValue(16);

  expect(smallHexValueString).toBeDefined();
  expectTypeOf(smallHexValueString).toBeString();

  expect(largeHexValueString).toBeDefined();
  expectTypeOf(largeHexValueString).toBeString();

  expect(sameSizeHexValueString01 === sameSizeHexValueString02).toBeFalsy();
});
