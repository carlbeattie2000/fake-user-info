import { assertType, expectTypeOf, expect, test } from "vitest";
import { TimezoneModule } from "../../src/modules/timezones";

const testTimezone = new TimezoneModule();

test("Select a random timezone", () => {
  const timezone = testTimezone.timezone();

  expectTypeOf(timezone).toBeString();
  expect(timezone.length).toBeGreaterThan(0);
});

test("Generates a random date string with a given or randomly selected timezone", () => {
  const timezoneDateString = testTimezone.dateTime();

  expectTypeOf(timezoneDateString).toBeString();
  expect(timezoneDateString.length).toBeGreaterThan(0);
});
