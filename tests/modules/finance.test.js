const { equal, match } = require("assert");
const test = require("node:test");

const impostor = require("../../src/impostor");

const impostorInstance = new impostor({ countryCode: "en_GB" });

test("finance banking tests", async (t) => {

  await t.test("Banking bank should return a string", () => {
    const bank = impostorInstance.finance.banking.bank();

    equal(typeof(bank), typeof(""))
  })

  await t.test("Banking card should return a int", () => {
    const card = impostorInstance.finance.banking.card();

    equal(typeof(card), typeof(0))
  })

  await t.test("Banking cvv should return a string", () => {
    const cvv = impostorInstance.finance.banking.cvv();

    equal(typeof(cvv), typeof(""));
  })

  await t.test("Banking expiry date should return a string that matches for format MM/YY", () => {
    const expiryDate = impostorInstance.finance.banking.expiryDate();

    equal(typeof(expiryDate), typeof(""));
    match(expiryDate, /\d\d\/\d\d/gm)
  })

  await t.test("Banking sortCode should return a string", () => {
    const sortCode = impostorInstance.finance.banking.sortCode();

    equal(typeof(sortCode), typeof(""));
  })

  await t.test("Banking account number should return a string", () => {
    const accountNumber = impostorInstance.finance.banking.accountNumber();

    equal(typeof(accountNumber), typeof(""));
  })

  await t.test("Banking balance should equal a float, and be not greater than the max passed. Should also return a string if bool is passed", () => {
    const floatBalance = impostorInstance.finance.banking.balance({ max: 5000 });
    const stringBalance = impostorInstance.finance.banking.balance({ formattedString: true });

    equal(typeof(floatBalance), typeof(.5));
    equal(floatBalance < 5000, true);

    equal(typeof(stringBalance), typeof(""));
  })

})

test("finance transaction tests", async (t) => {

  await t.test("transactionString should return a string", () => {
    const transactionString = impostorInstance.finance.banking.transactionString();

    equal(typeof(transactionString), typeof(""));
  })

  await t.test("transactionObject should return a object", () => {
    const transactionObject = impostorInstance.finance.banking.transactionObject();

    equal(typeof(transactionObject), typeof({}))
  })

  await t.test("statementString should return an array ", () => {
    const statementStrings = impostorInstance.finance.banking.statementString(5);

    equal(Array.isArray(statementStrings), true);
  })

  await t.test("statementString should contain 5 items", () => {
    const statementStrings = impostorInstance.finance.banking.statementString(5);

    equal(statementStrings.length, 5);
  })

  await t.test("statementString every item should be a string", () => {
    const statementStrings = impostorInstance.finance.banking.statementString(5);

    equal(statementStrings.every((string) => typeof(string) === typeof("")), true);
  })

  await t.test("statementObject should return an array", () => {
    const statementObjects = impostorInstance.finance.banking.statementObject(5);

    equal(Array.isArray(statementObjects), true);
  })

  await t.test("statementObject should contain 5 items", () => {
    const statementObjects = impostorInstance.finance.banking.statementObject(5);

    equal(statementObjects.length, 5);
  })

  await t.test("statementObject every item should be a object", () => {
    const statementObjects = impostorInstance.finance.banking.statementObject(5);

    equal(statementObjects.every((object) => typeof(object) === typeof({})), true);
  })

})

test("finance crypto tests", async (t) => {
  await t.test("ethereumAddress should return a string", () => {
    const ethereumAddress = impostorInstance.finance.crypto.ethereumAddress();

    equal(typeof(ethereumAddress), typeof(""));
  })

  await t.test("ethereumAddress string length should be 42", () => {
    const ethereumAddress = impostorInstance.finance.crypto.ethereumAddress();

    equal(ethereumAddress.length, 42);
  })

  await t.test("bitcoinAddress should return a string", () => {
    const bitcoinAddress = impostorInstance.finance.crypto.bitcoinAddress();

    equal(typeof(bitcoinAddress), typeof(""));
  })

  await t.test("bitcoinAddress string length should be equal to 33", () => {
    const bitcoinAddress = impostorInstance.finance.crypto.bitcoinAddress();

    equal(bitcoinAddress.length, 33);
  })

  await t.test("bitcoinPrivateKey should return a string", () => {
    const bitcoinPrivateKey = impostorInstance.finance.crypto.bitcoinPrivateKey();

    equal(typeof(bitcoinPrivateKey), typeof(""));
  })

  await t.test("bitcoinPrivateKey string length should be equal to 64", () => {
    const bitcoinPrivateKey = impostorInstance.finance.crypto.bitcoinPrivateKey();

    equal(bitcoinPrivateKey.length, 64);
  })

  await t.test("cardanoAddress should return a string", () => {
    const cardanoAddress = impostorInstance.finance.crypto.cardanoAddress();

    equal(typeof(cardanoAddress), typeof(""));
  })

  await t.test("cardanoAddress string length should be equal to 102", () => {
    const cardanoAddress = impostorInstance.finance.crypto.cardanoAddress();

    equal(cardanoAddress.length, 102);
  })

  await t.test("coin should return a string", () => {
    const coin = impostorInstance.finance.crypto.coin();

    equal(typeof(coin), typeof(""));
  })

  await t.test("coinPrefix should return a string", () => {
    const coinPrefix = impostorInstance.finance.crypto.coinPrefix();

    equal(typeof(coinPrefix), typeof(""));
  })
})