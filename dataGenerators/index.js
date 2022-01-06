const user = require("./userInformation/user");
const privateInfo = require("./sensitiveInformation/internet");
// Bank Accounts Data
const bankAccounts = require("./bankAccounts/bank");
const transactions = require("./bankAccounts/transactions");
const accountFlags = require("./bankAccounts/accountFlags");
const loans = require("./bankAccounts/loans");

// company
const companies = require("./companies/companies");

// computers & hardware
const computersParts = require("./computer/computerParts");

module.exports = {
  user,
  privateInfo,
  bankAccounts,
  transactions,
  accountFlags,
  loans,
  companies,
  computersParts,
};
