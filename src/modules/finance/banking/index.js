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

  balance({ max = 5000, formattedString = false } = {}) {
    return formattedString
      ? this.randomFloat({ max }).toLocaleString(this.#bankingData.currency.countryCode, { style: "currency", currency: this.#bankingData.currency.shorthand })
      : this.randomFloat({ max });
  }

  transactionString() {

  }

  transactionObject() {

  }

  transferString() {

  }

  transferObject() {

  }

  statementString(transactions_amount) {

  }

  statementObject(transactions_amount) {

  }
}

module.exports = Banking;