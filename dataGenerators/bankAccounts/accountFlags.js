const globalFunctions = require("../../global");

function randomFlagID() {
  return globalFunctions.genRanHex(10);
}

function randomFlagReason() {
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

function createRandomFlagObject() {
  return {
    flagID: randomFlagID(),
    fLagReason: randomFlagReason(),
    flagActive: true,
  };
}

const createArrayOfRandomFlags = (amount) => [...Array(amount)].map(() => createRandomFlagObject());

module.exports = {
  randomFlagID,
  randomFlagReason,
  createRandomFlagObject,
  createArrayOfRandomFlags,
};
