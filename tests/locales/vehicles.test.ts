import { assertType, expectTypeOf, expect, test } from "vitest";
import { VehicleLocale } from "../../src/locales/vehicle";
import enGBData from "../../src/data/locales/en_GB.json";

const testVehicle = new VehicleLocale(enGBData.vehicle);

test("Should generate a random vehicle plate", () => {
  const vehiclePlate = testVehicle.plate();

  expectTypeOf(vehiclePlate).toBeString();
  expect(vehiclePlate.length).toBeGreaterThan(0);
});

test("Should generate a random vin", () => {
  const vin = testVehicle.vin();

  expectTypeOf(vin).toBeString();
  expect(vin.length).toBeGreaterThan(0);
});

test("Should generate a random tax class if supported by locale", () => {
  const taxClass = testVehicle.taxClass();

  expectTypeOf(taxClass).toBeString();
  expect(taxClass.length).toBeGreaterThan(0);
});
