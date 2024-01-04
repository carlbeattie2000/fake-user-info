import { randomInt } from "crypto";

class StringTemplatesReplacementFunctions {
  constructor() {}

  randomInt({ min = 0, max = 1 } = {}): number {
    return randomInt(min, max);
  }

  randomCharacter({ uppercase = false } = {}): string {
    const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const char = charList[this.randomInt({ max: charList.length })];

    return uppercase ? char.toUpperCase() : char;
  }

  randomIntWithPadding({ min = 0, max = 1 } = {}): string {
    const rndInt = this.randomInt({ min, max });

    return rndInt < 10 ? "0" + rndInt.toString() : rndInt.toString();
  }
}

const stringTemplateFunctions = new StringTemplatesReplacementFunctions();
const dateNow = new Date();

export const templateFunctions = {
  "#": () => stringTemplateFunctions.randomInt({ min: 1, max: 10 }),
  "?": () => stringTemplateFunctions.randomCharacter({ uppercase: true }),
  "~": () => stringTemplateFunctions.randomCharacter(),
  DD: () => stringTemplateFunctions.randomIntWithPadding({ min: 1, max: 31 }),
  MM: () => stringTemplateFunctions.randomIntWithPadding({ min: 1, max: 12 }),
  YY: () => stringTemplateFunctions.randomIntWithPadding({ max: 24 }),
  YYYY: () =>
    stringTemplateFunctions.randomIntWithPadding({
      min: 1901,
      max: dateNow.getFullYear(),
    }),
};
