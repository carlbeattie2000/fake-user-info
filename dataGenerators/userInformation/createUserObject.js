// main function
const globalFunctions = require("../../global");

// User
const user = require("./user");
// Internet
const privateInfo = require("../sensitiveInformation/internet");
// Bank
const bankAccounts = require("../bankAccounts/bank");
const transactions = require("../bankAccounts/transactions");
const accountFlags = require("../bankAccounts/accountFlags");
const loans = require("../bankAccounts/loans");

function createSingleUserObject(...args) {
  let commands = args.join(" ");
  let currentCommand;

  let mainUser = {
    accountID: globalFunctions.genRanHex(24),
    accountInfo: user.createUserObject(),
  };

  function returnCommandNumber(command) {
    return parseInt(command.join("").split(/ /)[0].replace(/[^\d]/g, ""));
  }

  if (/address/i.test(commands)) mainUser.accountHomeAddress = user.createAddressObject();

  if (/privateInfo=\d*[^a-z]/i.test(commands)) {
    currentCommand = commands.match(/privateInfo=\d*[^a-z]/);

    mainUser.privateInformation = privateInfo.createPrivateDataObject(returnCommandNumber(currentCommand));
  }

  if (/bankAccount/gi.test(commands)) {
    mainUser.activeAccounts = bankAccounts.createRandomAccountObject();

    if (/addTransaction=\d*[^a-z]/i.test(commands)) {
      currentCommand = commands.match(/addTransaction=\d*[^a-z]/);

      mainUser.activeAccounts.accountTransactions = transactions.createArrayOfRandomTransactions(
        returnCommandNumber(currentCommand)
      );
    }

    if (/addFlag=\d*[^a-z]/.test(commands)) {
      currentCommand = commands.match(/addFlag=\d*[^a-z]/);

      mainUser.activeAccounts.accountFlags = accountFlags.createArrayOfRandomFlags(returnCommandNumber(currentCommand));
    }
  }

  if (/loan/gi.test(commands)) {
    mainUser.accountActiveLoans = loans.generatePaymentHistoryObjectMain(
      mainUser.activeAccounts.accountAttachedCards.cardNumber
    );
  }

  return mainUser;
}

const createMultipleUsers = (amount, ...args) => [...Array(amount)].map(() => createSingleUserObject(args));

module.exports = {
  createSingleUserObject,
  createMultipleUsers,
};
