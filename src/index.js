const user = require("./userInformation/user");
const address = require("./userInformation/address");
const internet = require("./sensitiveInformation/internet");
const criminalHistory = require("./sensitiveInformation/criminalRecord");
// Bank Accounts Data
const bank = require("./bankAccounts/bank");

// company
const company = require("./companies/companies");

// computers & hardware
const computersParts = require("./computer/computerParts");
const deviceInformation = require("./computer/deviceInformation");

module.exports = {
  user,
  address,
  internet,
  criminalHistory,
  bank,
  company,
  computersParts,
  deviceInformation,
};