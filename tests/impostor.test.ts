import { assertType, expectTypeOf, expect, test } from "vitest";
import { Impostor } from "../src";
import { Locale } from "../src/locales/locale";

const enGBLocale = new Impostor("en_GB");

test("Locale is loaded", () => {
  expectTypeOf(enGBLocale.locale).toMatchTypeOf<Locale>();
  expect(enGBLocale.locale).toHaveProperty("internet");
  expect(enGBLocale.locale).toHaveProperty("location");
  expect(enGBLocale.locale).toHaveProperty("person");
  expect(enGBLocale.locale).toHaveProperty("finance");
  expect(enGBLocale.locale).toHaveProperty("vehicle");
  expect(enGBLocale.locale).toHaveProperty("phone");
});
