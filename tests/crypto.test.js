/* eslint-disable no-undef */
const crypto = require("../src/crypto/crypto");

test("random ethereumAddress", () => {
  expect(crypto.ethereumAddress()).toMatch(/0x\w{40}/i);
});

test("random bitcoin address", () => {
  expect(crypto.bitcoinAddress()).toMatch(/\w{34}/i);
});

test("random private key", () => {
  expect(crypto.bitcoinPrivateKey()).toMatch(/\w{52}/i);
});

test("random coin", () => {
  expect(crypto.coin()).toBeDefined();
});

test("random coin name", () => {
  expect(crypto.coinName()).toMatch(/[a-z]*/i);
});

test("random coin prefix", () => {
  expect(crypto.coinPrefix()).toMatch(/[a-z]*/i);
});


