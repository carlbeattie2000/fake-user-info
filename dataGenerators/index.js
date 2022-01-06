const user = require("./userInformation/user");
const privateInfo = require("./sensitiveInformation/internet");
const main = require("./userInformation/createUserObject");
// Bank Accounts Data
const bankAccounts = require("./bankAccounts/bank");
const transactions = require("./bankAccounts/transactions");
const accountFlags = require("./bankAccounts/accountFlags");
const loans = require("./bankAccounts/loans");

// company
const companies = require("./companies/companies");

module.exports = {
  user,
  privateInfo,
  bankAccounts,
  transactions,
  accountFlags,
  loans,
  main,
  companies,
};
