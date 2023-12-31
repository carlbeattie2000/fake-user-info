declare const crypto: any;
declare const stringTemplateFormatting: any;
declare class ImpostorBase {
    constructor();
    randomHexValue(size?: number): string;
    randomInt({ min, max }?: {
        min?: number | undefined;
        max?: number | undefined;
    }): any;
    randomFloat({ max, fixed }: {
        max?: number | undefined;
        fixed?: number | undefined;
    }): number;
    randomDateString({ minYear, maxYear }?: {
        minYear?: number | undefined;
        maxYear?: number | undefined;
    }): string;
    randomArrayElement(array: any): any;
    randomBytes(size?: number): any;
    randomBytesString(size?: number): any;
    randomString(length: any): string;
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
    randomStringFormatter(template: any): any;
}
