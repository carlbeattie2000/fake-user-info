const Locales = require("./locales/");
const modules = require("./modules");

module.exports = class Impostor {
  constructor({ countryCode = "en_GB" } = {}) {
    this.locale = Locales.getLocale(countryCode);

    this.finance = new modules.finance({ localeFinance: this.locale.finance });
  }
}