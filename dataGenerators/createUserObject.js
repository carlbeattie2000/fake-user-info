// main function
const globalFunctions = require("../global");

const user = require("./user");
const privateInfo = require("./privateData");
const bankAccounts = require("./bank");
const transactions = require("./transactions");
const accountFlags = require("./accountFlags");
const loans = require("./loans");

// will have options etc

function extractAmountFromCommand(command, matching) {
  return parseInt(command.match(matching)[0]);
}

function createSingleUserObject(...args) {
  let commands = args.join(" ");
  let currentCommand;

  let mainUser = {
    accountID: globalFunctions.genRanHex(24),
    accountInfo: user.createUserObject(),
  };

  if (/address/i.test(commands)) mainUser.accountHomeAddress = user.createAddressObject();

  if (/privateInfo=[1-9]*[^a-z]/i.test(commands)) {
    currentCommand = commands.match(/privateInfo=\d*[^a-z]/).join("");

    mainUser.privateInformation = privateInfo.createPrivateDataObject(
      extractAmountFromCommand(currentCommand, /[^a-z^=][1-9]*[^a-z]/g)
    );
  }

  if (/bankAccount/gi.test(commands)) {
    mainUser.activeAccounts = bankAccounts.createRandomAccountObject();

    if (/addTransaction=[1-9]*[^a-z]/i.test(commands)) {
      currentCommand = commands.match(/addTransaction=\d*[^a-z]/).join("");

      mainUser.activeAccounts.accountTransactions = transactions.createArrayOfRandomTransactions(
        extractAmountFromCommand(currentCommand, /[^a-z^=][1-9]*[^a-z]/g)
      );
    }

    if (/addFlag=\d*[^a-z]/.test(commands)) {
      currentCommand = commands.match(/addFlag=\d*[^a-z]/).join("");

      mainUser.activeAccounts.accountFlags = accountFlags.createArrayOfRandomFlags(
        extractAmountFromCommand(currentCommand, /[^a-z^=][1-9]*[^a-z]/g)
      );
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
