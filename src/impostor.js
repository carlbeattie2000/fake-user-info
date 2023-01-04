const Locales = require("./locales/");

module.exports = class Impostor {
  #locale;

  constructor({ countryCode = "en_GB" } = {}) {
    this.#locale = Locales.getLocale(countryCode);

    this.address = this.#locale.address;
    this.phone = this.#locale.phone;
  }
}