const user = require("./userInformation/user");
const address = require("./userInformation/address");
const internet = require("./sensitiveInformation/internet");
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
  bank,
  company,
  computersParts,
  deviceInformation,
};
