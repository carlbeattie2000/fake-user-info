import { Base } from "./core/base";
import locales from "./locales";
import { FinanceLocale } from "./locales/finance";
import { InternetLocale } from "./locales/internet";
import { Locale } from "./locales/locale";
import { LocationLocale } from "./locales/location";
import { PersonLocale } from "./locales/person";
import { PhoneLocale } from "./locales/phone";
import { VehicleLocale } from "./locales/vehicle";
import { ColorModule } from "./modules/colors";
import { CryptoModule } from "./modules/crypto";
import { ScienceModule } from "./modules/science";
import { TimezoneModule } from "./modules/timezones";
import { localeCodes } from "./types/locales";

export class Impostor extends Base {
  private locale: Locale;

  internet: InternetLocale;
  finance: FinanceLocale;
  location: LocationLocale;
  person: PersonLocale;
  phone: PhoneLocale;
  vehicle: VehicleLocale;

  color: ColorModule;
  crypto: CryptoModule;
  science: ScienceModule;
  timezone: TimezoneModule;

  constructor(countryCode: localeCodes = "en_GB") {
    super();
    this.locale = locales.get(countryCode);
    this.internet = this.locale.internet;
    this.finance = this.locale.finance;
    this.location = this.locale.location;
    this.person = this.locale.person;
    this.phone = this.locale.phone;
    this.vehicle = this.locale.vehicle;

    this.color = new ColorModule();
    this.crypto = new CryptoModule();
    this.science = new ScienceModule();
    this.timezone = new TimezoneModule();
  }

  setLocale(countryCode: localeCodes) {
    this.locale = locales.get(countryCode);

    this.internet = this.locale.internet;
    this.finance = this.locale.finance;
    this.location = this.locale.location;
    this.person = this.locale.person;
    this.phone = this.locale.phone;
    this.vehicle = this.locale.vehicle;
  }
}
