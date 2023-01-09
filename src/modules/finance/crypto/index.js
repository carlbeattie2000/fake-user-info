const ImpostorBase = require('../../../core/impostorBase');

const coins = require('./coins');
const coinPrefixes = require('./coin_prefixes');

class Crypto extends ImpostorBase {
  constructor() { super(); }

  ethereumAddress() {
    return '0x' + this.randomBytesString(20).toUpperCase();
  }

  bitcoinAddress() {
    const prefix = this.randomArrayElement(['1', '3', 'bc1']);
    const maxLength = 34 - prefix.length;

    return prefix + this.randomBytesString(Math.floor(maxLength / 2));
  }

  bitcoinPrivateKey() {
    return this.randomBytesString(32).toUpperCase();
  }

  cardanoAddress() {
    return 'addr' + this.randomBytesString(50).slice(0, 98);
  } 

  coin() {
    return this.randomArrayElement(coins);
  }

  coinPrefix() {
    return this.randomArrayElement(coinPrefixes);
  }
}

module.exports = Crypto;