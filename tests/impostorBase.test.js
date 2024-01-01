const { describe, it } = require("node:test");
const { equal, match } = require("assert");

const ImposterBase = require("../src/core/impostorBase");

const imposterBaseTestee = new ImposterBase();

describe("Should generate a random hexadecimal value", () => {
  it("randomHexValue should generate a random hexadecimal value", () => {
    const expected = /^0x[A-Za-z0-9]*/gm;
    const actual = imposterBaseTestee.randomHexValue(4);

    match(actual, expected);
  });

  it("randomInt should generate a random int between a min and max range", () => {
    const [min, max] = [20, 200];

    const actual = imposterBaseTestee.randomInt({ min, max });

    equal(actual >= min, true);
    equal(actual < max, true);
    equal(isNaN(actual), false);
  });

  it("randomFloat should generate a random float up to a max", () => {
    const max = 200;

    const actual = imposterBaseTestee.randomFloat({ max });

    equal(actual < max, true);
  });

  it("randomFloat should generate a random float no lower than a min", () => {
    const [min, max] = [20, 200];

    const actual = imposterBaseTestee.randomFloat({ min, max });

    equal(actual >= min, true);
  });

  it("randomFloat should be a float", () => {
    const [min, max] = [20, 200];

    const actual = imposterBaseTestee.randomFloat({ min, max });

    equal(!Number.isInteger(actual) && Number.isFinite(actual), true);
  });

  it("randomArrayElement should select a random element from the array it is passed and return null if no array is passed", () => {
    const expected = [1, 2, 3, 4];

    const actual_1 = imposterBaseTestee.randomArrayElement(expected);
    const actual_2 = imposterBaseTestee.randomArrayElement();

    equal(expected.includes(actual_1), true);
    equal(actual_2, null);
  });

  it("randomBytes should return a buffer of bytes with a length of the size passed into the function", () => {
    const size = 6;

    const actual = imposterBaseTestee.randomBytes(size);

    equal(actual.length, size);
    // eslint-disable-next-line no-undef
    equal(Buffer.isBuffer(actual), true);
  });

  it("randomBytesString should return a random string created from random bytes within the size passed into the function", () => {
    const size = 4;

    const actual = imposterBaseTestee.randomBytesString(size);

    equal(typeof actual, typeof "");
    equal(actual.length, size * 2);
  });

  it("randomStringFormatter should return a string, that no longer contains any of the original supported templating characters", () => {
    const templatingCharacters = ["#", "~", "?"];

    const actual = imposterBaseTestee.randomStringFormatter("###~~??");

    equal(
      templatingCharacters.some((templateChar) =>
        actual.includes(templateChar),
      ),
      false,
    );
    equal(typeof actual, typeof "");
  });
});
