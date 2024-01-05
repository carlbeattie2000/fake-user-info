import { assertType, expectTypeOf, expect, test } from "vitest";
import { Color } from "../../src/modules/colors";

const testColor = new Color();

test("Should generate a rgb array, each value should be between 0, 255", () => {
  const rgbArray = testColor.rgb();

  expectTypeOf(rgbArray).toBeArray();
  expect(rgbArray).toHaveLength(3);

  expect(rgbArray[0]).toBeGreaterThanOrEqual(0);
  expect(rgbArray[0]).toBeLessThanOrEqual(255);

  expect(rgbArray[1]).toBeGreaterThanOrEqual(0);
  expect(rgbArray[1]).toBeLessThanOrEqual(255);

  expect(rgbArray[2]).toBeGreaterThanOrEqual(0);
  expect(rgbArray[2]).toBeLessThanOrEqual(255);
});

test("Should generate a rgba array, each value should be between 0, 255 expect the last, which should be bewtween 0, 1", () => {
  const rgbaArray = testColor.rgba();

  expectTypeOf(rgbaArray).toBeArray();
  expect(rgbaArray).toHaveLength(4);

  expect(rgbaArray[0]).toBeGreaterThanOrEqual(0);
  expect(rgbaArray[0]).toBeLessThanOrEqual(255);

  expect(rgbaArray[1]).toBeGreaterThanOrEqual(0);
  expect(rgbaArray[1]).toBeLessThanOrEqual(255);

  expect(rgbaArray[2]).toBeGreaterThanOrEqual(0);
  expect(rgbaArray[2]).toBeLessThanOrEqual(255);

  expect(rgbaArray[3]).toBeGreaterThanOrEqual(0);
  expect(rgbaArray[3]).toBeLessThanOrEqual(1);
});

test("Should generate a rgb string", () => {
  const rgbString = testColor.rgbString();

  expectTypeOf(rgbString).toBeString();
  expect(rgbString).toMatch(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/g);
});

test("Should generate a rgb string", () => {
  const rgbaString = testColor.rgbaString();

  expectTypeOf(rgbaString).toBeString();
  expect(rgbaString).toMatch(
    /rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d{0,1}\.\d{1,2}\)/g,
  );
});

test("Should generate a hex color string", () => {
  const hexColorString = testColor.hex();

  expectTypeOf(hexColorString).toBeString();
  expect(hexColorString).toMatch(/#.{6}/g);
});

test("Should generate hsl array, [0...360, 0...100, 0...100]", () => {
  const hslArray = testColor.hsl();

  expectTypeOf(hslArray).toBeArray();
  expect(hslArray).toHaveLength(3);

  expect(hslArray[0]).toBeGreaterThanOrEqual(0);
  expect(hslArray[0]).toBeLessThanOrEqual(360);

  expect(hslArray[1]).toBeGreaterThanOrEqual(0);
  expect(hslArray[1]).toBeLessThanOrEqual(100);

  expect(hslArray[2]).toBeGreaterThanOrEqual(0);
  expect(hslArray[2]).toBeLessThanOrEqual(100);
});

test("Should generate a hsl string", () => {
  const hslString = testColor.hslString();

  expectTypeOf(hslString).toBeString();
  expect(hslString).toMatch(/hsl\(\d{1,3}, \d{1,3}, \d{1,3}\)/g);
});
