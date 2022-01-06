const globalFunctions = require("../../global");

function flagID() {
  return globalFunctions.genRanHex(10);
}

function flagReason() {
  const reasons = [
    "Account Suspected Of Fraud",
    "Previous Finical Crimes",
    "Large Sum Of Money Deposited",
    "Large Sum Of Money Withdrawn",
    "Suspicious Transactions",
    "Lost/Stollen Bank Card",
    "Online Banking Compromised",
  ];

  return reasons[globalFunctions.randomMinMax(0, reasons.length - 1)];
}

function createFlag() {
  return {
    flagID: flagID(),
    fLagReason: flagReason(),
    flagActive: true,
  };
}

const createArrayOfRandomFlags = (amount) => [...Array(amount)].map(() => createFlag());

module.exports = {
  flagID,
  flagReason,
  createFlag,
  createArrayOfRandomFlags,
};
