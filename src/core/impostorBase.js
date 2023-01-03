const crypto = require("crypto");

class ImpostorBase {
  constructor() {}

  randomHexValue(size = 4) {
    return "0x" + [...Array(size)]
      .map(() => Math.floor(crypto.randomInt(16).toString(16)))
      .join("")
      .toUpperCase();
  }

  randomInt({ min = 0, max = 1 } = {}) {
    return crypto.randomInt(min, max);
  }

  randomDateString({ minYear=1970, maxYear=2023 } = {}) {
    const yearGapInMs = (maxYear - minYear) * 3.154e+10;

    return new Date(+(new Date()) - Math.floor(this.randomInt({ max: yearGapInMs }))).toLocaleString();
  }

  randomArrayElement(array) {
    if (array == undefined) {
      return null
    }

    return array[this.randomInt({ max: array.length })];
  }

  randomBytes(size = 4) {
    return crypto.randomBytes(size);
  }

  randomBytesString(size = 4) {
    return this.randomBytes(size).toString("hex");
  }
}

module.exports = ImpostorBase;
