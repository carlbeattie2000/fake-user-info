const { equal, match } = require("assert");
const test = require("node:test");

const impostor = require("../../src/impostor");

const impostorInstance = new impostor({ countryCode: "en_GB" });

test("color tests", async (t) => {
  const colorModule = impostorInstance.color;

  await t.test("rgb should return a array", () => {
    const rgb = colorModule.rgb();

    equal(Array.isArray(rgb), true);
  });

  await t.test("rgba should return a array", () => {
    const rgba = colorModule.rgba();

    equal(Array.isArray(rgba), true);
  });

  await t.test("rgbString should return a string", () => {
    const rgbString = colorModule.rgbString();

    equal(typeof rgbString, typeof "");
  });

  await t.test("rgbString should match pattern", () => {
    const rgbString = colorModule.rgbString();

    match(rgbString, /^rgb\(\d+, \d+, \d+\)$/);
  });

  await t.test("rgbaString should return a string", () => {
    const rgbaString = colorModule.rgbaString();

    equal(typeof rgbaString, typeof "");
  });

  await t.test("rgbaString should match pattern", () => {
    const rgbaString = colorModule.rgbaString();

    match(rgbaString, /^rgba\(\d+, \d+, \d+, [-+]?[0-9]*(\.[0-9]+)?\)/);
  });

  await t.test("hex should return a string", () => {
    const hex = colorModule.hex();

    equal(typeof hex, typeof "");
  });

  await t.test("hex should match pattern", () => {
    const hex = colorModule.hex();

    match(hex, /^#[\d\w]{6}$/);
  });

  await t.test("hsl should return a array", () => {
    const hsl = colorModule.hsl();

    equal(Array.isArray(hsl), true);
  });

  await t.test("hsl should match pattern", () => {
    const hsl = colorModule.hslString();

    match(hsl, /^hsl\(\d+, \d+, \d+\)$/);
  });
});
