const { randomInt } = require("crypto");

class StringTemplatesReplacementFunctions {
  constructor() {}

  randomInt({ min = 0, max = 1 } = {}) {
    return randomInt(min, max);
  }

  randomCharacter({ uppercase = false } = {}) {
    const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


    const char = charList[this.randomInt({ max: charList.length })];

    return uppercase ? char.toUpperCase() : char;
  }

  randomIntWithPadding ({ min = 0, max = 1 } = {}) {
    const rndInt = this.randomInt({ min, max });

    return rndInt < 10 ? "0" + rndInt : rndInt;
  }
}

const stringTemplateFunctions = new StringTemplatesReplacementFunctions();

module.exports = {
  "#": () => stringTemplateFunctions.randomInt({ max: 10 }),
  "?": () => stringTemplateFunctions.randomCharacter({ uppercase: true }),
  "~": () => stringTemplateFunctions.randomCharacter(),
  "DD": () => stringTemplateFunctions.randomIntWithPadding({ max: 32 }),
  "MM": () => stringTemplateFunctions.randomIntWithPadding({ max: 13 }),
  "YY": () => stringTemplateFunctions.randomIntWithPadding({ max: 24 }),
  "YYYY": () => stringTemplateFunctions.randomIntWithPadding({ min: 1999, max: 2024 })
}