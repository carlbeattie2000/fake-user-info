import { Base } from "./core/base";
import locales from "./locales";
import { Locale } from "./locales/locale";
import { ColorModule } from "./modules/colors";
import { CryptoModule } from "./modules/crypto";
import { ScienceModule } from "./modules/science";
import { TimezoneModule } from "./modules/timezones";
import { localeCodes } from "./types/locales";

export class Impostor extends Base {
  locale: Locale;
  color: ColorModule;
  crypto: CryptoModule;
  science: ScienceModule;
  timezone: TimezoneModule;

  constructor(countryCode: localeCodes = "en_GB") {
    super();

    this.locale = locales.get(countryCode);

    this.color = new ColorModule();
    this.crypto = new CryptoModule();
    this.science = new ScienceModule();
    this.timezone = new TimezoneModule();
  }
}
