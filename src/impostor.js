const Locales = require('./locales/');
const modules = require('./modules');

module.exports = class Impostor {
  constructor({ countryCode = 'en_GB' } = {}) {
    this.locale = Locales.getLocale(countryCode);

    this.finance = new modules.finance({ localeFinance: this.locale.finance });
    this.internet = new modules.internet({ localeInternet: this.locale.internet });
    this.timezones = new modules.timezones(countryCode.replace('_', '-'));
    this.science = new modules.science();
    this.color = new modules.colors();
  }
};