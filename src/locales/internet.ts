import { Base } from "../core/base";
import { Internet } from "../types/locales";

export class InternetLocale extends Base {
  internetData: Internet;

  constructor(internetData: Internet) {
    super();

    this.internetData = internetData;
  }
}
