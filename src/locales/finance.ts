import { Base } from "../core/base";
import { CardTemplate, Finance, TransactionObject } from "../types/locales";

export class FinanceLocale extends Base {
  financeData: Finance;

  constructor(financeData: Finance) {
    super();

    this.financeData = financeData;
  }

  bank(): string {
    return this.randomArrayElement<string>(this.financeData.banks);
  }

  cardNumber(): number {
    const cardTemplate = this.randomArrayElement<CardTemplate>(
      this.financeData.cardTemplates,
    );
    const numberTemplate = this.randomArrayElement<string>(
      cardTemplate.cardNumberTemplates,
    );

    return parseInt(this.randomStringFormatter(numberTemplate));
  }

  cvv(): number {
    const cardTemplate = this.randomArrayElement<CardTemplate>(
      this.financeData.cardTemplates,
    );

    return parseInt(this.randomStringFormatter(cardTemplate.cvvTemplate));
  }

  expiryDateObject({ min = 2022, max = 2028 }): Date {
    if (min > 9999 || max < 1000) {
      throw new Error("Range must be between 1000, 9999!");
    }

    const month = this.randomInt({ max: 11 });
    const year = this.randomInt({ min, max });

    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);

    return date;
  }

  expiryDateString({ min = 2022, max = 2028 }): string {
    if (min > 9999 || max < 1000) {
      throw new Error("Range must be between 1000, 9999!");
    }

    const month = this.randomInt({ max: 11 });
    const year = this.randomInt({ min, max });

    return (
      (month < 10 ? "0" + month.toString() : month.toString()) +
      "/" +
      year.toString().slice(2)
    );
  }

  sortCode(): number {
    const cardTemplate = this.randomArrayElement<CardTemplate>(
      this.financeData.cardTemplates,
    );

    return parseInt(
      this.randomStringFormatter(cardTemplate.sortNumberTemplate),
    );
  }

  accountNumber(): number {
    const cardTemplate = this.randomArrayElement<CardTemplate>(
      this.financeData.cardTemplates,
    );

    return parseInt(
      this.randomStringFormatter(cardTemplate.accountNumberTemplate),
    );
  }

  currencyValueString({ max = 500 }): string {
    return this.randomFloat(max).toLocaleString(
      this.financeData.currency.countryCode,
      { style: "currency", currency: this.financeData.currency.shorthand },
    );
  }

  balance(max = 5000): number {
    return this.randomFloat(max);
  }

  transactionObject(
    refundWeight = 10,
    maxAccountBalance = 40000,
  ): TransactionObject {
    const refundChance = this.randomInt({ max: 100 });
    const isRefund = refundWeight >= 100 ? true : refundChance <= refundWeight;

    const oldBalance = this.balance(maxAccountBalance);
    const amount = this.balance(oldBalance);

    return {
      date: this.randomStringFormatter("MM/DD/YYYY"),
      description: this.randomArrayElement<string>(
        this.financeData.transactionDescriptions,
      ),
      oldBalance,
      newBalance: isRefund
        ? parseFloat((oldBalance + amount).toFixed(2))
        : parseFloat((oldBalance - amount).toFixed(2)),
      IN: isRefund ? amount : 0,
      OUT: isRefund ? 0 : amount,
    };
  }

  transactionString(): string {
    return this.randomArrayElement<string>(
      this.financeData.transactionDescriptions,
    );
  }

  transactionObjects(size = 10): TransactionObject[] {
    return new Array<TransactionObject>(size).map((_) =>
      this.transactionObject(),
    );
  }

  transactionStrings(size = 10): string[] {
    return new Array<string>(size).map((_) => this.transactionString());
  }
}
