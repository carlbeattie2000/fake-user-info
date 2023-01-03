const user = require("./userInformation/user");
const address = require("./userInformation/address");
const internet = require("./sensitiveInformation/internet");
const landmarks = require("./userInformation/landmarks");
const entertainment = require("./userInformation/entertainment");
const timeZone = require("./userInformation/timezone");
// Bank Accounts Data
const bank = require("./bankAccounts/bank");
// Crypto
const crypto = require("./crypto/crypto");

// company
const company = require("./companies/companies");

// computers & hardware
const computersParts = require("./computer/computerParts");
const deviceInformation = require("./computer/deviceInformation");

module.exports = {
  user,
  address,
  internet,
  landmarks,
  entertainment,
  timeZone,
  bank,
  crypto,
  company,
  computersParts,
  deviceInformation,
};
