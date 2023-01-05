const Banking = require("../banking");

class Transactions extends Banking {
  constructor({ localeFinance = undefined } = {}) {
    super({ localeFinance });
  }

  transactionString() {

  }

  transactionObject() {

  }

  transferString() {

  }

  transferObject() {

  }

  statementString(transactions_amount) {

  }

  statementObject(transactions_amount) {

  }
}

module.exports = Transactions;