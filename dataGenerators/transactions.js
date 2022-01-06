const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\dataSets\\transactions\\");

const globalFunctions = require("../global");

function randomTransactionID() {
  return globalFunctions.randomMinMax(100, 999) + globalFunctions.genRanHex(10);
}

function randomTransactionDescription() {
  // Eg: the item sold or purchased
  const items = globalFunctions.getJSONContentArray("items.json", __DATA_PATH);

  return items[globalFunctions.randomMinMax(0, items.length - 1)];
}

function randomTransactionSender() {
  let sender = globalFunctions.randomMinMax(0, 150);

  if (sender > 115) sender = true;
  else sender = false;

  const SENDERS = globalFunctions.getJSONContentArray("senders.json", __DATA_PATH);

  if (sender) {
    return SENDERS[globalFunctions.randomMinMax(0, SENDERS.length - 1)];
  }

  return "self";
}

function randomOutAmount(max = 500) {
  return globalFunctions.randomMinMax(1, max);
}

function randomInAmount(max = 5000) {
  return globalFunctions.randomMinMax(0, max);
}

// account balance add later as has to intertwine with it all
// items make no sense when receiving money, will come back and make a out and in function so they do make sense

function createTransactionObject(balance = 1400) {
  let sender = randomTransactionSender();
  let outAmount = 0;
  let inAmount = 0;

  if (sender == "self") {
    outAmount = randomOutAmount();
    balance -= outAmount;
  } else {
    inAmount = randomInAmount();
    balance += inAmount;
  }

  return {
    transactionID: randomTransactionID(),
    transactionDate: globalFunctions.randomFullDate(),
    transactionDescription: randomTransactionDescription(),
    transactionSender: sender,
    transactionOutAmount: outAmount,
    transactionInAmount: inAmount,
    accountBalance: balance,
  };
}

const createArrayOfRandomTransactions = (amount) => [...Array(amount)].map(() => createTransactionObject());

module.exports = {
  createTransactionObject,
  createArrayOfRandomTransactions,
};
