import { Base } from "../core/base";
import { Finance } from "../types/locales";

export class FinanceLocale extends Base {
  financeData: Finance;

  constructor(financeData: Finance) {
    super();

    this.financeData = financeData;
  }
}
