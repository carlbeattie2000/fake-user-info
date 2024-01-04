import { assertType, expectTypeOf, expect, test } from "vitest";
import { PhoneLocale } from "../../src/locales/phone";
import enGBData from "../../src/data/locales/en_GB.json";

const testPhone = new PhoneLocale(enGBData.phone);

test("Should generate a random mobile number", () => {
  const mobile = testPhone.mobile();

  expectTypeOf(mobile).toBeString();
  expect(mobile.length).toBeGreaterThan(0);
});

test("Should generate a random landline number", () => {
  const landline = testPhone.landline();

  expectTypeOf(landline).toBeString();
  expect(landline.length).toBeGreaterThan(0);
});
