const Locales = require("./locales/");

module.exports = class Impostor {
  constructor({ countryCode = "en_GB" } = {}) {
    this.locale = Locales.getLocale(countryCode);
  }
}