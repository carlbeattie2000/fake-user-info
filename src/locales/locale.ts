import { Base } from "../core/base";
import { LocaleData } from "../types/locales";
import { FinanceLocale } from "./finance";
import { InternetLocale } from "./internet";
import { LocationLocale } from "./location";
import { PersonLocale } from "./person";
import { PhoneLocale } from "./phone";
import { VehicleLocale } from "./vehicle";

export class Locale extends Base {
  internet: InternetLocale;
  finance: FinanceLocale;
  location: LocationLocale;
  person: PersonLocale;
  phone: PhoneLocale;
  vehicle: VehicleLocale;

  constructor(data: LocaleData) {
    super();

    this.internet = new InternetLocale(data.internet);
    this.finance = new FinanceLocale(data.finance);
    this.location = new LocationLocale(data.location);
    this.person = new PersonLocale(data.person);
    this.phone = new PhoneLocale(data.phone);
    this.vehicle = new VehicleLocale(data.vehicle);
  }
}
