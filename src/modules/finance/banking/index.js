const ImpostorBase = require("../../../core/impostorBase");

class Banking extends ImpostorBase {
  #bankingData;
  #lastUsedCardTemplate;

  constructor({ localeFinance = undefined } = {}) {
    super();

    this.#bankingData = localeFinance;
  }

  #bankCardTemplate() {
    const cardTemplate = this.randomArrayElement(this.#bankingData.cardTemplates);

    this.#lastUsedCardTemplate = cardTemplate;

    return cardTemplate;
  }

  bank() {
    return this.randomArrayElement(this.#bankingData.banks);
  }

  card() {
    const card = this.#bankCardTemplate();

    const cardTemplate = this.randomArrayElement(card.card_number_templates);

    return parseInt(cardTemplate.replace(/#/g, () => this.randomInt({ max: 10 })));
  }

  cvv() {
    if (!this.#lastUsedCardTemplate) this.#bankCardTemplate();

    return this.#lastUsedCardTemplate.cvv_template.replace(/#/g, () => this.randomInt({ max: 10 }));
  }

  expiryDate() {
    const day = this.randomInt({ max: 13 });
    const year = this.randomInt({ min: 19, max: 30 });

    return day < 10 ? "0" + day + "/" + year : day + "/" + year;
  }

  sortCode() {
    if (!this.#lastUsedCardTemplate) this.#bankCardTemplate();

    return this.#lastUsedCardTemplate.sort_number_template.replace(/#/g, () => this.randomInt({ max: 10 }));
  }

  accountNumber() {
    if (!this.#lastUsedCardTemplate) this.#bankCardTemplate();

    return this.#lastUsedCardTemplate.account_number_template.replace(/#/g, () => this.randomInt({ max: 10 }));
  }

  randomCurrencyValue({ max = 5000, formattedString = false } = {}) {
    return formattedString
      ? this.randomFloat({ max }).toLocaleString(this.#bankingData.currency.countryCode, { style: "currency", currency: this.#bankingData.currency.shorthand })
      : parseFloat(this.randomFloat({ max }).toFixed(2));
  }

  balance({ max = 5000, formattedString = false } = {}) {
    return this.randomCurrencyValue({ max, formattedString });
  }

  #transactionData(refundWeight = 10) {
    const refundChance = this.randomInt({ max: 100 });
    const isRefund = refundChance <= refundWeight;

    const oldBalance = this.balance();
    const rndAmount = this.randomCurrencyValue({ max: oldBalance });
  
    return {
      isRefund,
      description: this.randomArrayElement(this.#bankingData.transactionDescriptions),
      oldBalance,
      rndAmount,
      newBalance: isRefund ? parseFloat((oldBalance + rndAmount).toFixed(2)) : parseFloat((oldBalance - rndAmount).toFixed(2)),
      IN: isRefund ? rndAmount : 0,
      OUT: isRefund ? 0 : rndAmount
    }
  }

  transactionString(refundChance = 10) {
    const transactionData = this.#transactionData(refundChance);

    return this.randomStringFormatter(`MM/DD/YYYY `) + 
    transactionData.description + 
    ` +${transactionData.IN} -${transactionData.OUT} ${transactionData.oldBalance} ${transactionData.newBalance}`;
  }

  transactionObject(refundChance = 10) {
    const transactionData = this.#transactionData(refundChance);

    return {
      date: this.randomStringFormatter("MM/DD/YYYY"),
      description: transactionData.description,
      in: transactionData.IN,
      out: transactionData.OUT,
      oldBalance: transactionData.oldBalance,
      newBalance: transactionData.newBalance
    }
  }

  statementString(transactionsAmount = 10) {
    return [...Array(transactionsAmount)].map(() => this.transactionString());
  }

  statementObject(transactionsAmount = 10) {
    return [...Array(transactionsAmount)].map(() => this.transactionObject());
  }
}

module.exports = Banking;