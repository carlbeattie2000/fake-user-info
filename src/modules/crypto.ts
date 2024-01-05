import { Base } from "../core/base";

import cryptoData from "../data/crypto.json";

export class CryptoModule extends Base {
  constructor() {
    super();
  }

  ethereumAddress(): string {
    return "0x" + this.randomBytesString(20).toUpperCase();
  }

  bitcoinAddress(): string {
    const prefix = this.randomArrayElement<string>(["1", "2", "bc1"]);
    const length = 34 - prefix.length;

    return prefix + this.randomBytesString(Math.ceil(length / 2));
  }

  bitcoinPrivateKey(): string {
    return this.randomBytesString(32).toUpperCase();
  }

  cardanoAddress(): string {
    return "addr" + this.randomBytesString(49);
  }

  coin(): string {
    return this.randomArrayElement<string>(cryptoData.coins);
  }

  coinPrefix(): string {
    return this.randomArrayElement<string>(cryptoData.coinPrefixes);
  }
}
