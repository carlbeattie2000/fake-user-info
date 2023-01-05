const ImpostorBase = require("../../core/impostorBase");

const Banking = require("./banking");

class Finance extends ImpostorBase {
  constructor({ localeFinance = undefined } = {}) {
    super();

    if (!localeFinance) {
      return console.log("Finance is not supported in this locale!");
    }

    this.banking = new Banking({ localeFinance });
  }
}

module.exports = Finance;