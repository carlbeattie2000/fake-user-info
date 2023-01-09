const crypto = require('crypto');

const stringTemplateFormatting = require('./stringTemplateFunctions');

class ImpostorBase {
  constructor() {
    this.alpha = ['a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'];
  }

  randomHexValue(size = 4) {
    return '0x' + [...Array(size)]
      .map(() => Math.floor(crypto.randomInt(16).toString(16)))
      .join('')
      .toUpperCase();
  }

  randomInt({ min = 0, max = 1 } = {}) {
    return crypto.randomInt(min, max);
  }

  randomFloat({ max = 1.1, fixed=2 }) {
    return parseFloat((Math.random() * max).toFixed(fixed));
  }

  randomDateString({ minYear=1970, maxYear=2023 } = {}) {
    const yearGapInMs = (maxYear - minYear) * 3.154e+10;

    return new Date(+(new Date()) - Math.floor(this.randomInt({ max: yearGapInMs }))).toLocaleString();
  }

  randomArrayElement(array) {
    if (array == undefined) {
      return null;
    }

    return array[this.randomInt({ max: array.length })];
  }

  randomBytes(size = 4) {
    return crypto.randomBytes(size);
  }

  randomBytesString(size = 4) {
    return this.randomBytes(size).toString('hex');
  }

  randomString(length) {
    let string = '';

    for (let _ = 0; _ < length; _++) {
      string += this.randomArrayElement(this.alpha);
    }

    return string;
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
  randomStringFormatter(template) {
    return template
      .replace(/(#|\?|~|DD|MM|(YYYY|YY))/g, (char) => {
        if (stringTemplateFormatting.hasOwnProperty(char)) {
          return stringTemplateFormatting[char]();
        }
      });
  }
}

module.exports = ImpostorBase;
