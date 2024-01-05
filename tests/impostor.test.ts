import { assertType, expectTypeOf, expect, test } from "vitest";
import { Impostor } from "../src";
import { Locale } from "../src/locales/locale";

import { ColorModule } from "../src/modules/colors";
import { ScienceModule } from "../src/modules/science";
import { TimezoneModule } from "../src/modules/timezones";
import { CryptoModule } from "../src/modules/crypto";

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

test("Modules are loaded", () => {
  expectTypeOf(enGBLocale.color).toMatchTypeOf<ColorModule>();
  expectTypeOf(enGBLocale.crypto).toMatchTypeOf<CryptoModule>();
  expectTypeOf(enGBLocale.science).toMatchTypeOf<ScienceModule>();
  expectTypeOf(enGBLocale.timezone).toMatchTypeOf<TimezoneModule>();
});
