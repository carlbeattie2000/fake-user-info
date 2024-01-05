import { assertType, expectTypeOf, expect, test } from "vitest";
import { CryptoModule } from "../../src/modules/crypto";

const testCrypto = new CryptoModule();

test("Should generate a eth address", () => {
  const ethAddress = testCrypto.ethereumAddress();

  expectTypeOf(ethAddress).toBeString();
  expect(ethAddress).toMatch(/0x.{40}/g);
});

test("Should generate a bitcoin address", () => {
  const bitcoinAddress = testCrypto.bitcoinAddress();

  expectTypeOf(bitcoinAddress).toBeString();
  expect(bitcoinAddress).toMatch(/^1.{33}|^2.{33}|^bc1.{31}/g);
});

test("Should generate a bitcoin private key", () => {
  const bitcoinPrivateKey = testCrypto.bitcoinPrivateKey();

  expectTypeOf(bitcoinPrivateKey).toBeString();
  expect(bitcoinPrivateKey).toHaveLength(64);
});

test("Should generate a cardano address", () => {
  const cardanoAddress = testCrypto.cardanoAddress();

  expectTypeOf(cardanoAddress).toBeString();
  expect(cardanoAddress).toMatch(/^addr.{98}/gm);
});

test("Should select a random coin", () => {
  const coin = testCrypto.coin();

  expectTypeOf(coin).toBeString();
  expect(coin.length).toBeGreaterThan(0);
});

test("Should select a random coin prefix", () => {
  const coinPrefix = testCrypto.coinPrefix();

  expectTypeOf(coinPrefix).toBeString();
  expect(coinPrefix.length).toBeGreaterThan(0);
});
