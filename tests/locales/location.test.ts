import { assertType, expectTypeOf, expect, test } from "vitest";
import { LocationLocale } from "../../src/locales/location";
import enGBData from "../../src/data/locales/en_GB.json";
import { build } from "esbuild";
import { AddressObject } from "../../src/types/locales";

const testLocation = new LocationLocale(enGBData.location);

test("Select a random city", () => {
  const city = testLocation.city();

  expectTypeOf(city).toBeString();
  expect(city.length).toBeGreaterThan(0);
});

test("Select a random street", () => {
  const street = testLocation.street();

  expectTypeOf(street).toBeString();
  expect(street.length).toBeGreaterThan(0);
});

test("Select a random county", () => {
  const county = testLocation.county();

  expectTypeOf(county).toBeString();
  expect(county.length).toBeGreaterThan(0);
});

test("Select a random postcode", () => {
  const postcode = testLocation.postcode();

  expectTypeOf(postcode).toBeString();
  expect(postcode.length).toBeGreaterThan(0);
});

test("Select a random building number", () => {
  const buildingNumber = testLocation.buildingNumber();

  expectTypeOf(buildingNumber).toBeString();
  expect(buildingNumber.length).toBeGreaterThan(0);
});

test("Select a random locale country", () => {
  const country = testLocation.localeCountry();

  expectTypeOf(country).toBeString();
  expect(country.length).toBeGreaterThan(0);
});

test("Generate a random street address", () => {
  const streetAddress = testLocation.streetAddress();

  expectTypeOf(streetAddress).toBeString();
  expect(streetAddress.length).toBeGreaterThan(0);
});

test("Generate a random full address object", () => {
  const addressObject = testLocation.address();

  expectTypeOf(addressObject).toMatchTypeOf<AddressObject>();
  expect(addressObject).toHaveProperty("buildingNumber");
});

test("Generate a random zip code, if none supported, attempt postcode", () => {
  const zipCode = testLocation.zip();

  expectTypeOf(zipCode).toBeString();
  expect(zipCode.length).toBeGreaterThan(0);
});
