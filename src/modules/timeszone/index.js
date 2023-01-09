const ImpostorBase = require('../../core/impostorBase');

const timezonesList = require('./timezonesList');

class Timezones extends ImpostorBase {
  constructor(locale = undefined) { 
    super();

    if (!locale) {
      locale = 'en_GB';
    }

    this.locale = locale;
  }

  timezone() {
    return this.randomArrayElement(timezonesList);
  }

  dateTimeString(timeZone = '') {
    const date = new Date();

    if (timeZone !== '') {
      return date.toLocaleString(this.locale, { timeZone });
    }

    return date.toLocaleString(this.locale, { timeZone: this.timezone() });
  }
}

module.exports = Timezones;