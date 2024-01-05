import { Base } from "./core/base";
import locales from "./locales";
import { Locale } from "./locales/locale";
import { localeCodes } from "./types/locales";

export class Impostor extends Base {
  locale: Locale;

  constructor(countryCode: localeCodes = "en_GB") {
    super();

    this.locale = locales.get(countryCode);
  }
}
