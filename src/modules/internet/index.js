const ImpostorBase = require('../../core/impostorBase');
const en_GB = require('../../locales/en_GB');

const userAgent = require('./userAgent');
const httpMethods = require('./httpMethods');

class Internet extends ImpostorBase {
  constructor({ localeInternet = undefined } = {}) {
    super();

    if (!localeInternet) {
      localeInternet = en_GB.internet;

      console.log('Some Internet features are not supported in this locale, defaulting to use en_GB for this module!');
    }

    this.localeInternet = localeInternet;
  }

  IPV4() {
    return this.randomInt({ max: 255 }) + '.' +
    this.randomInt({ max: 255 }) + '.' +
    this.randomInt({ max: 255 }) + '.' +
    this.randomInt({ max: 255 });
  }

  IPV6() {
    return this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2) + ':' +
    this.randomBytesString(2);
  }

  domain() {
    return this.randomArrayElement(this.localeInternet.domainNames) + '.' +
    this.randomArrayElement(this.localeInternet.domains);
  }
  
  URL() {
    return 'https://' + this.domain();
  }

  userAgent() {
    return userAgent.generate();
  }

  httpMethod() {
    return this.randomArrayElement(httpMethods);
  }

  port() {
    return this.randomInt({ max: 49151 });
  }
}

module.exports = Internet;