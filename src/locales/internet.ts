import { Base } from "../core/base";
import { Internet } from "../types/locales";

export class InternetLocale extends Base {
  internetData: Internet;

  constructor(internetData: Internet) {
    super();

    this.internetData = internetData;
  }

  IPV4(): string {
    return new Array(4).map((_) => this.randomInt({ max: 255 })).join(".");
  }

  IPV6(): string {
    return new Array(8).map((_) => this.randomBytesString(2)).join(":");
  }
}
