const ImpostorBase = require("../../core/impostorBase");
const { finance } = require("../../locales/en_GB");

const Banking = require("./banking");
const Crypto = require("./crypto");

class Finance extends ImpostorBase {
  constructor({ localeFinance = undefined } = {}) {
    super();

    if (!localeFinance) {
      localeFinance = finance;

      console.log("Some finance features are not supported in this locale, defaulting to use en_GB for this module!");
    }
    
    this.banking = new Banking({ localeFinance });

    this.crypto = new Crypto();
  }
}

module.exports = Finance;