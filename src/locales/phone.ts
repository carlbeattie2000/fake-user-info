import { Base } from "../core/base";
import { Phone } from "../types/locales";

export class PhoneLocale extends Base {
  phoneData: Phone;

  constructor(phoneData: Phone) {
    super();

    this.phoneData = phoneData;
  }

  mobile(): string {
    return (
      this.phoneData.mobile.digitCode +
      this.randomInt({ min: 100000000, max: 999999999 }).toString()
    );
  }

  landline(): string {
    return (
      this.randomArrayElement<string>(this.phoneData.landline) +
      this.randomInt({ min: 10000000, max: 99999999 }).toString()
    );
  }
}
