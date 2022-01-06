const PATH = require("path");

// eslint-disable-next-line no-undef
const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\transactions\\");

const globalFunctions = require("../../global");

function transactionID() {
  return globalFunctions.randomMinMax(100, 999) + globalFunctions.genRanHex(10);
}

function transactionDescription() {
  // Eg: the item sold or purchased
  const items = globalFunctions.getJSONContentArray("items.json", __DATA_PATH);

  return items[globalFunctions.randomMinMax(0, items.length - 1)];
}

function transactionSender() {
  let sender = globalFunctions.randomMinMax(0, 150);

  if (sender > 115) sender = true;
  else sender = false;

  const SENDERS = globalFunctions.getJSONContentArray("senders.json", __DATA_PATH);

  if (sender) {
    return SENDERS[globalFunctions.randomMinMax(0, SENDERS.length - 1)];
  }

  return "self";
}

function outAmount(max = 500) {
  return globalFunctions.randomMinMax(1, max);
}

function inAmount(max = 5000) {
  return globalFunctions.randomMinMax(0, max);
}

// account balance add later as has to intertwine with it all
// items make no sense when receiving money, will come back and make a out and in function so they do make sense

function createTransaction(balance = 1400) {
  let sender = transactionSender();
  let outAmountVar = 0;
  let inAmountVar = 0;

  if (sender == "self") {
    outAmountVar = outAmount();
    balance -= outAmountVar;
  } else {
    inAmountVar = inAmount();
    balance += inAmountVar;
  }

  return {
    transactionID: transactionID(),
    transactionDate: globalFunctions.randomFullDate(),
    transactionDescription: transactionDescription(),
    transactionSender: sender,
    transactionOutAmount: outAmountVar,
    transactionInAmount: inAmountVar,
    accountBalance: balance,
  };
}

const createArrayOfRandomTransactions = (amount) => [...Array(amount)].map(() => createTransaction());

module.exports = {
  createTransaction,
  createArrayOfRandomTransactions,
};
