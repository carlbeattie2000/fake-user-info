const { describe, it } = require("node:test");
const { equal, match } = require("assert");

const ImposterBase = require("../src/core/impostorBase");

const imposterBaseTestee = new ImposterBase();

describe("Should generate a random hexadecimal value", () => {
  it("randomHexValue should generate a random hexadecimal value", () => {
    const expected = /^0x[A-Za-z0-9]*/gm;
    const actual = imposterBaseTestee.randomHexValue(4);

    match(actual, expected);
  })

  it("randomInt should generate a random int between a min and max range", () => {
    const [min, max] = [20, 200];

    const actual = imposterBaseTestee.randomInt({ min, max });

    equal(actual >= min, true);
    equal(actual < max, true);
    equal(isNaN(actual), false);
  })

  it("randomFloat should generate a random float up to a max", () => {
    const [min, max] = [20, 200];

    const actual = imposterBaseTestee.randomFloat({ max: 10 });

    equal(actual < max, true);
    equal(isNaN(actual), false);
    equal(typeof(actual), typeof(.5));
  })

  it("randomDateString should generate a random date string", () => {
    const expected = /\d+\/\d+\/\d+, \d+:\d+:\d+/gm;
    const actual = imposterBaseTestee.randomDateString({ minYear: 2022 });

    match(actual, expected);
  })

  it("randomArrayElement should select a random element from the array it is passed and return null if no array is passed", () => {
    const expected = [1, 2, 3, 4];

    const actual_1 = imposterBaseTestee.randomArrayElement(expected);
    const actual_2 = imposterBaseTestee.randomArrayElement();

    equal(expected.includes(actual_1), true);
    equal(actual_2, null);
  })

  it("randomBytes should return a buffer of bytes with a length of the size passed into the function", () => {
    const size = 6;

    const actual = imposterBaseTestee.randomBytes(size);

    equal(actual.length, size);
    equal(Buffer.isBuffer(actual), true);
  })

  it("randomBytesString should return a random string created from random bytes within the size passed into the function", () => {
    const size = 4;

    const actual = imposterBaseTestee.randomBytesString(size);

    equal(typeof(actual), typeof(""));
    equal(actual.length, size * 2);
  })
})