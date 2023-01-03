const { equal, match } = require("assert");
const { describe, it } = require("node:test");

const timezone = require("../src/userInformation/timezone");

describe("timezone class can should be able to generate a random IANA timezone string, a random list of IANA timezones, and a datetime string created from a random IANA timezone", () => {
  it("generate a random IANA string", () => {
    const expected = /[A-Za-z]\/[A-Za-z]/gm;

    match(timezone.random(), expected);
  })

  it("should return a list of IANA timezones, with the length of the passed amount", () => {
    const expectedLength = 5;

    const timeZoneList = timezone.randomList(expectedLength);

    equal(timeZoneList.length, expectedLength);
  })

  it("should return a datetime string for a random timezone", () => {
    const expected = /\d\/\d\/\d*, \d*:\d*:\d* (PM|AM)/gm

    const timezoneDateTimeString = timezone.randomDateTimeString();

    match(timezoneDateTimeString, expected);
  })
})