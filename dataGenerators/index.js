const user = require("./user");
const privateInfo = require("./privateData");
const bankAccounts = require("./bank");
const transactions = require("./transactions");
const accountFlags = require("./accountFlags");
const loans = require("./loans");

const main = require("./createUserObject");

module.exports = {
  user,
  privateInfo,
  bankAccounts,
  transactions,
  accountFlags,
  loans,
  main,
};
