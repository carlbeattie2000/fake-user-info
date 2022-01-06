const globalFunctions = require("../global");

const transactions = require("./transactions");
const flags = require("./accountFlags");
const loans = require("./loans");

function bankName() {
  const bankNames = [
    "Ulster Bank",
    "Bank of Ireland",
    "NatWest",
    "HBL Bank UK",
    "Tesco Bank",
    "Lloyds Bank",
    "National Bank of Egypt",
    "Habib Bank Zurich",
    "United National Bank",
    "Metro Bank",
    "HSBC Bank",
    "Royal Bank of Scotland",
    "Barclays Bank",
    "TSB Bank",
    "Halifax",
    "Sainsbury's Bank",
    "Co-operative Bank",
    "FCE Bank",
    "Bank of Scotland",
    "Diamond Bank",
    "Santander",
    "Virgin Money",
    "Clydesdale Bank",
    "Bank of England"
  ];

  return bankNames[globalFunctions.randomMinMax(0, bankNames.length - 1)];
}

function cardNumber(type = "") {
  // xxxx-xxxx-xxxx-xxxx && VISA = 4 && Mastercard = 2 || 5
  const cardTypes = ["VISA", "Mastercard"];
  let firstDigit;

  if (type == "") {
    type = cardTypes[globalFunctions.randomMinMax(0, cardTypes.length - 1)];
  }

  switch (type) {
    case "VISA":
      return "4" + globalFunctions.randomMinMax(100000000000000, 999999999999999).toString();
    case "Mastercard":
      firstDigit = globalFunctions.randomMinMax(0, 1) ? "2" : "5";
      return firstDigit + globalFunctions.randomMinMax(100000000000000, 999999999999999).toString();
  }
}

function expiryDate() {
  return globalFunctions.randomMinMax(1, 12) + "/" + globalFunctions.randomMinMax(22, 25);
}

function validFromDate() {
  // note to self: i know this is fake data and does not matter, but the fact that the month here can be further ahead of time than present is bothering me and needs to change
  return globalFunctions.randomMinMax(1, 12) + "/" + globalFunctions.randomMinMax(20, 22);
}

function CVV() {
  return globalFunctions.randomMinMax(100, 999);
}

function pin() {
  return globalFunctions.randomMinMax(1000, 9999);
}

function sortNumber() {
  return globalFunctions.randomMinMax(100000, 999999);
}

function accountNumber() {
  return globalFunctions.randomMinMax(10000000, 99999999);
}

function accountLoginID() {
  return globalFunctions.genRanHex(10) + globalFunctions.randomMinMax(1000, 9999);
}

function pendingBalance(max = 1000) {
  return globalFunctions.randomMinMax(0, max);
}

function accountBalance(max = 5000) {
  return globalFunctions.randomMinMax(0, max);
}

function createCard() {
  return {
    cardNumber: cardNumber(),
    cardSort: CVV(),
    cardPin: pin(),
    expiryDate: expiryDate(),
    cardValidFrom: validFromDate(),
    cardBlocked: false,
    cardExpired: false,
  };
}

function createAccount() {
  return {
    accountNumber: accountNumber(),
    accountSortCode: sortNumber(),
    accountLoginID: accountLoginID(),
    accountOpenDate: globalFunctions.randomFullDate(),
    accountPendingBalance: pendingBalance(),
    accountBalance: accountBalance(),
    accountTransactions: [],
    accountFlags: [],
    accountBlacklisted: false,
    accountOpenInvestigations: [],
    accountInDebt: false,
    accountLocked: false,
    accountPendingReview: false,
    accountFraudReported: false,
    accountAttachedCards: [createCard()],
  };
}

const arrayBankName = (amount) => [...Array(amount)].map(() => bankName());

const arrayCardNumber = (amount) => [...Array(amount)].map(() => cardNumber());
const arrayExpiryDate = (amount) => [...Array(amount)].map(() => expiryDate());
const arrayValidFromDate = (amount) => [...Array(amount)].map(() => validFromDate());
const arrayCVV = (amount) => [...Array(amount)].map(() => CVV());

const arrayPin = (amount) => [...Array(amount)].map(() => pin());
const arraySortNumber = (amount) => [...Array(amount)].map(() => sortNumber());
const arrayAccountNumber = (amount) => [...Array(amount)].map(() => accountNumber());
const arrayAccountLoginID = (amount) => [...Array(amount)].map(() => accountLoginID());
const arrayPendingBalance = (amount) => [...Array(amount)].map(() => pendingBalance());
const arrayAccountBalance = (amount) => [...Array(amount)].map(() => accountBalance());

const arrayCreateCard = (amount) => [...Array(amount)].map(() => createCard());
const arrayCreateAccount = (amount) => [...Array(amount)].map(() => createAccount());

module.exports = {
  bankName,
  cardNumber,
  expiryDate,
  validFromDate,
  CVV,
  pin,
  sortNumber,
  accountNumber,
  accountLoginID,
  pendingBalance,
  accountBalance,
  createCard,
  createAccount,
  arrayBankName,
  arrayCardNumber,
  arrayExpiryDate,
  arrayValidFromDate,
  arrayCVV,
  arrayPin,
  arraySortNumber,
  arrayAccountNumber,
  arrayAccountLoginID,
  arrayPendingBalance,
  arrayAccountBalance,
  arrayCreateCard,
  arrayCreateAccount,
  transactions,
  flags,
  loans,
};
