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

  days_passed(dt: Date) {
    const current = new Date(dt.getTime()).getMilliseconds();
    const previous = new Date(dt.getFullYear(), 0, 1).getMilliseconds();

    return Math.ceil((current - previous + 1) / 8.64e7);
  }

  randomDateString(minYear = 1970, maxYear = 2023) {
    const dateNow = new Date();
    const currentYear = dateNow.getFullYear();
    const yearInMs = 3.154e10;
    const dayInMs = 8.64e7;

    let yearGapInMs = (maxYear - minYear) * yearInMs;

    if (minYear === 0 || maxYear === 0) {
      throw new Error("Min or max should not be zero!");
    }

    if (minYear > maxYear) {
      throw new Error("Min year should not be larger than max!");
    }

    const maxYearIsCurrentYear = maxYear === currentYear && minYear !== maxYear;
    const sameYearAndCurrentYear =
      minYear === maxYear && maxYear === currentYear;
    const sameYear = minYear === maxYear && maxYear !== currentYear;

    if (sameYearAndCurrentYear) {
      dateNow.setFullYear(maxYear);

      yearGapInMs = this.days_passed(dateNow) * dayInMs;
    }

    if (sameYear) {
      yearGapInMs = yearInMs;
    }

    if (maxYearIsCurrentYear) {
      yearGapInMs -= yearInMs;
      yearGapInMs += this.days_passed(dateNow) * dayInMs;
    }

    return new Date(
      +new Date() - Math.floor(this.randomInt({ max: yearGapInMs })),
    ).toLocaleString();
  }

  randomArrayElement<T>(array: T[]): T {
    if (!array || !Array.isArray(array) || array.length === 0) {
      throw new Error("Invalid or empty array!");
    }

    if (array.length === 1) {
      return array[0];
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
