import { Base } from "../core/base";
import { LocaleData } from "../types/locales";
import { Locale } from "./locale";

import enGBData from "../../src/data/locales/en_GB.json";

class Locales extends Base {
  loadedLocales: {
    [name: string]: Locale;
  };

  constructor() {
    super();

    this.loadedLocales = {};
  }

  addLocale(name: string, localeData: LocaleData) {
    this.loadedLocales[name] = new Locale(localeData);
  }

  get(name: string) {
    const localeExists = Object.prototype.hasOwnProperty.call(
      this.loadedLocales,
      name,
    );

    if (!localeExists) {
      throw new Error(`Locale ${name} does not exist!`);
    }

    return this.loadedLocales[name];
  }
}

const locales = new Locales();

locales.addLocale("en_GB", enGBData);

export default locales;
