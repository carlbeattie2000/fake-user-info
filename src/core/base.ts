import { randomBytes, randomInt } from "crypto";
import { templateFunctions } from "./stringTemplates";

export class Base {
  alpha: string[];

  constructor() {
    this.alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  randomHexValue(size: number): string {
    return (
      "0x" +
      new Array(size)
        .fill("")
        .map((_) => Math.floor(randomInt(16)).toString())
        .join("")
        .toUpperCase()
    );
  }

  randomInt({ min = 0, max = 2 } = {}): number {
    return randomInt(min, max);
  }

  randomFloat(max: number, fixed = 2): number {
    return parseFloat((Math.random() * max).toFixed(fixed));
  }

  randomDateString(minYear = 1970, maxYear = 2023) {
    const yearGapInMs = (maxYear - minYear) * 3.154e10;

    return new Date(
      +new Date() - Math.floor(this.randomInt({ max: yearGapInMs })),
    ).toLocaleString();
  }

  randomArrayElement<T>(array: T[]): T {
    if (!array || !Array.isArray(array) || array.length === 0) {
      throw new Error("Invalid or empty array!");
    }

    return array[this.randomInt({ max: array.length })];
  }

  randomBytes(size: number): Buffer {
    return randomBytes(size);
  }

  randomBytesString(size: number): string {
    return randomBytes(size).toString("hex");
  }

  randomString(length: number): string {
    return new Array(length)
      .fill("")
      .map((_) => this.randomArrayElement(this.alpha))
      .join("");
  }

  /**
   * Takes a string that contains characters that are used as templates eg. # | ? and replaces them with random replacements.
   *
   * # - Int
   * ? - Uppercase char
   * ~ - Lowercase char
   * DD - Day
   * MM - Month
   * YY - Shorthand year
   * YYYY - Full year
   *
   * @param {string} template - The template string
   * @return {string} The template string, with the template values been replaced with the correct data.
   */
  randomStringFormatter(template: string) {
    return template.replace(/(#|\?|~|DD|MM|(YYYY|YY))/g, (char) => {
      if (Object.prototype.hasOwnProperty.call(templateFunctions, char)) {
        const key = char as keyof typeof templateFunctions;
        return templateFunctions[key]().toString();
      }

      return char;
    });
  }
}
