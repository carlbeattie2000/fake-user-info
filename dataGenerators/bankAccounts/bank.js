const PATH = require("path");

const globalFunctions = require("../../global");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\banks\\");

function randomBankName() {
  const bankNames = globalFunctions.getJSONContentArray("bankNames.json", __DATA_PATH);

  return bankNames[globalFunctions.randomMinMax(0, bankNames.length - 1)];
}

function randomCardNumber(type = "") {
  // xxxx-xxxx-xxxx-xxxx && VISA = 4 && Mastercard = 2 || 5
  const cardTypes = ["VISA", "Mastercard"];

  if (type == "") {
    type = cardTypes[globalFunctions.randomMinMax(0, cardTypes.length - 1)];
  }

  switch (type) {
    case "VISA":
      return "4" + globalFunctions.randomMinMax(100000000000000, 999999999999999).toString();
    case "Mastercard":
      let firstDigit = globalFunctions.randomMinMax(0, 1) ? "2" : "5";
      return firstDigit + globalFunctions.randomMinMax(100000000000000, 999999999999999).toString();
  }
}

function randomExpiryDate() {
  return globalFunctions.randomMinMax(1, 12) + "/" + globalFunctions.randomMinMax(22, 25);
}

function randomStartDate() {
  // note to self: i know this is fake data and does not matter, but the fact that the month here can be further ahead of time than present is bothering me and needs to change
  return globalFunctions.randomMinMax(1, 12) + "/" + globalFunctions.randomMinMax(20, 22);
}

function randomCVV() {
  return globalFunctions.randomMinMax(100, 999);
}

function randomCardPin() {
  return globalFunctions.randomMinMax(1000, 9999);
}

function randomSortNumber() {
  return globalFunctions.randomMinMax(100000, 999999);
}

function randomAccountNumber() {
  return globalFunctions.randomMinMax(10000000, 99999999);
}

function randomAccountLoginID() {
  return globalFunctions.genRanHex(10) + globalFunctions.randomMinMax(1000, 9999);
}

function randomAccountPendingBalance(max = 1000) {
  return globalFunctions.randomMinMax(0, max);
}

function randomAccountBalance(max = 5000) {
  return globalFunctions.randomMinMax(0, max);
}

function createRandomBankCardObject() {
  return {
    cardNumber: randomCardNumber(),
    cardSort: randomCVV(),
    cardPin: randomCardPin(),
    expiryDate: randomExpiryDate(),
    cardValidFrom: randomStartDate(),
    cardBlocked: false,
    cardExpired: false,
  };
}

function createRandomAccountObject() {
  return {
    accountNumber: randomAccountNumber(),
    accountSortCode: randomSortNumber(),
    accountLoginID: randomAccountLoginID(),
    accountOpenDate: globalFunctions.randomFullDate(),
    accountPendingBalance: randomAccountPendingBalance(),
    accountBalance: randomAccountBalance(),
    accountTransactions: [],
    accountFlags: [],
    accountBlacklisted: false,
    accountOpenInvestigations: [],
    accountInDebt: false,
    accountLocked: false,
    accountPendingReview: false,
    accountFraudReported: false,
    accountAttachedCards: [createRandomBankCardObject()],
  };
}

const createArrayOfRandomBankName = (amount) => [...Array(amount)].map(() => randomBankName());

const createArrayOfRandomCardNumber = (amount) => [...Array(amount)].map(() => randomCardNumber());
const createArrayOfRandomExpiryDate = (amount) => [...Array(amount)].map(() => randomExpiryDate());
const createArrayOfRandomStartDate = (amount) => [...Array(amount)].map(() => randomStartDate());
const createArrayOfRandomCVV = (amount) => [...Array(amount)].map(() => randomCVV());

const createArrayOfRandomCardPin = (amount) => [...Array(amount)].map(() => randomCardPin());
const createArrayOfRandomSortNumber = (amount) => [...Array(amount)].map(() => randomSortNumber());
const createArrayOfRandomAccountNumber = (amount) => [...Array(amount)].map(() => randomAccountNumber());
const createArrayOfRandomAccountLoginID = (amount) => [...Array(amount)].map(() => randomAccountLoginID());
const createArrayOfRandomAccountPendingBalance = (amount) =>
  [...Array(amount)].map(() => randomAccountPendingBalance());
const createArrayOfRandomAccountBalance = (amount) => [...Array(amount)].map(() => randomAccountBalance());

const createArrayOfRandomBankCardObjects = (amount) => [...Array(amount)].map(() => createRandomBankCardObject());
const createArrayOfRandomAccountObjects = (amount) => [...Array(amount)].map(() => createRandomAccountObject());

module.exports = {
  randomBankName,
  randomCardNumber,
  randomExpiryDate,
  randomStartDate,
  randomCVV,
  randomCardPin,
  randomSortNumber,
  randomAccountNumber,
  randomAccountLoginID,
  randomAccountPendingBalance,
  randomAccountBalance,
  createRandomBankCardObject,
  createRandomAccountObject,
  createArrayOfRandomBankName,
  createArrayOfRandomCardNumber,
  createArrayOfRandomExpiryDate,
  createArrayOfRandomStartDate,
  createArrayOfRandomCVV,
  createArrayOfRandomCardPin,
  createArrayOfRandomSortNumber,
  createArrayOfRandomAccountNumber,
  createArrayOfRandomAccountLoginID,
  createArrayOfRandomAccountPendingBalance,
  createArrayOfRandomAccountBalance,
  createArrayOfRandomBankCardObjects,
  createArrayOfRandomAccountObjects,
};
