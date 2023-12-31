declare const randomInt: any;
declare class StringTemplatesReplacementFunctions {
    constructor();
    randomInt({ min, max }?: {
        min?: number | undefined;
        max?: number | undefined;
    }): any;
    randomCharacter({ uppercase }?: {
        uppercase?: boolean | undefined;
    }): string;
    randomIntWithPadding({ min, max }?: {
        min?: number | undefined;
        max?: number | undefined;
    }): any;
}
declare const stringTemplateFunctions: StringTemplatesReplacementFunctions;
