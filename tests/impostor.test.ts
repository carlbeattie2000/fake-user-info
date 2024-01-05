import { assertType, expectTypeOf, expect, test } from "vitest";
import { Impostor } from "../src";
import { Locale } from "../src/locales/locale";

import { ColorModule } from "../src/modules/colors";
import { ScienceModule } from "../src/modules/science";
import { TimezoneModule } from "../src/modules/timezones";
import { CryptoModule } from "../src/modules/crypto";

const enGBLocale = new Impostor("en_GB");

test("Locale is loaded", () => {
  expect(enGBLocale).toHaveProperty("internet");
  expect(enGBLocale).toHaveProperty("location");
  expect(enGBLocale).toHaveProperty("person");
  expect(enGBLocale).toHaveProperty("finance");
  expect(enGBLocale).toHaveProperty("vehicle");
  expect(enGBLocale).toHaveProperty("phone");
});

test("Modules are loaded", () => {
  expectTypeOf(enGBLocale.color).toMatchTypeOf<ColorModule>();
  expectTypeOf(enGBLocale.crypto).toMatchTypeOf<CryptoModule>();
  expectTypeOf(enGBLocale.science).toMatchTypeOf<ScienceModule>();
  expectTypeOf(enGBLocale.timezone).toMatchTypeOf<TimezoneModule>();
});
