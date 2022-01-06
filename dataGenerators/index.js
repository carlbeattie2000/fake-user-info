const user = require("./userInformation/user");
const privateInfo = require("./sensitiveInformation/internet");
// Bank Accounts Data
const bank = require("./bankAccounts/bank");

// company
const companies = require("./companies/companies");

// computers & hardware
const computersParts = require("./computer/computerParts");

module.exports = {
  user,
  privateInfo,
  bank,
  companies,
  computersParts,
};
