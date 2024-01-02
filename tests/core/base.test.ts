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

test("generates a random int between a min and max value", () => {
  const smallMin = 4;
  const smallMax = 20;

  const largeMin = 9343;
  const largeMax = 56765;

  const randomIntSmall = testBase.randomInt({ min: smallMin, max: smallMax });
  const randomIntLarge = testBase.randomInt({ min: largeMin, max: largeMax });

  expectTypeOf(randomIntSmall).toBeNumber();
  expect(randomIntSmall).toBeGreaterThanOrEqual(smallMin);
  expect(randomIntSmall).toBeLessThanOrEqual(smallMax);

  expectTypeOf(randomIntLarge).toBeNumber();
  expect(randomIntLarge).toBeGreaterThanOrEqual(largeMin);
  expect(randomIntLarge).toBeLessThanOrEqual(largeMax);
});

test("generates a random float between a min and max value", () => {
  const smallMax = 20;

  const largeMax = 56765;

  const randomFloatSmall = testBase.randomFloat(smallMax, 2);
  const randomFloatLarge = testBase.randomFloat(largeMax, 2);

  expectTypeOf(randomFloatSmall).toBeNumber();
  expect(randomFloatSmall).toBeGreaterThan(0);
  expect(randomFloatSmall).toBeLessThan(smallMax);

  expectTypeOf(randomFloatLarge).toBeNumber();
  expect(randomFloatLarge).toBeGreaterThan(0);
  expect(randomFloatSmall).toBeLessThanOrEqual(largeMax);
});

test("generates a random date string", () => {
  const dateObject = new Date();

  expect(() => testBase.randomDateString(0, 0)).toThrowError();

  expect(() => testBase.randomDateString(2022, 2015)).toThrowError();

  const dateStringSame = testBase.randomDateString(2023, 2023);
  expectTypeOf(dateStringSame).toBeString();
  expect(dateStringSame).toContain("2023");

  // I'm not happy with this test, if loop is too low it will cause false failures
  let currentYearValidCalls = 0;
  const currentYear = dateObject.getFullYear().toString();
  const testCalls = dateObject.getMonth() < 5 ? 400 * 2 : 100;

  for (let i = 0; i < testCalls; i++) {
    const dateStringCurrentYear = testBase.randomDateString(2022, 2024);

    if (dateStringCurrentYear.includes(currentYear)) {
      currentYearValidCalls++;
    }
  }

  expect(currentYearValidCalls).toBeGreaterThan(0);

  const dateStringSameAndCurrentYear = testBase.randomDateString(2024, 2024);
  expectTypeOf(dateStringSameAndCurrentYear).toBeString();
  expect(dateStringSameAndCurrentYear).toContain("2024");
});
