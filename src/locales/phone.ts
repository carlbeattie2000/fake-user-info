import { Base } from "../core/base";
import { Phone } from "../types/locales";

export class PhoneLocale extends Base {
  phoneData: Phone;

  constructor(phoneData: Phone) {
    super();

    this.phoneData = phoneData;
  }
}
