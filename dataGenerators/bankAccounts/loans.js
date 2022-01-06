const globalFunctions = require("../../global");

function loanID() {
  return globalFunctions.genRanHex(12);
}

function loanTotalAmount(min = 125000) {
  return globalFunctions.randomMinMax(min, 3000000);
}

function loanLength() {
  return globalFunctions.randomMinMax(20, 35);
}

function yearsPassedSinceLoan(loanLength) {
  return globalFunctions.randomMinMax(0, loanLength);
}

function loanMonthlyAmount(totalAmount, loanLength) {
  return Math.floor(totalAmount / loanLength / 12);
}

function loanYearlyPayment(yearsPassed, totalAmountPayed) {
  return Math.floor(totalAmountPayed / yearsPassed);
}

function amountLoanPayed(totalAmount, yearsPassedSinceLoan, totalYears) {
  return globalFunctions.randomMinMax(0, totalAmount / (totalYears - yearsPassedSinceLoan));
}

function loanOutstanding(totalAmount, AmountPayed) {
  return totalAmount - AmountPayed;
}

const paymentHistory = (yearsPassed, totalPayed) =>
  [...Array(yearsPassed)].map(() => loanYearlyPayment(yearsPassed, totalPayed));

function paymentHistoryObjectFinal(connectedAccountNumber = "123543454934dhd", yearsPassed, totalPayed) {
  let arr = [];

  paymentHistory(yearsPassed, totalPayed).forEach((month) => {
    arr.push({
      paymentID: loanID(),
      connectedAccount: connectedAccountNumber,
      paymentAmount: month,
      paymentDate: globalFunctions.randomFullDate(),
      paymentDueDate: globalFunctions.randomFullDate(),
      paymentLate: false,
      paymentRollOver: false,
    });
  });

  return arr;
}

function createLoan(connectedAccount) {
  let loanAmount = loanTotalAmount();
  let loanLengthVar = loanLength();
  let yearsPassedSinceLoanStarted = yearsPassedSinceLoan(loanLengthVar);
  let loanMonthlyPayAmount = loanMonthlyAmount(loanAmount, loanLengthVar);
  let randomLoanAmountPayed = amountLoanPayed(loanAmount, yearsPassedSinceLoanStarted, loanLengthVar);
  let loanTotalOutstanding = loanOutstanding(loanAmount, randomLoanAmountPayed);
  let paymentHistoryArray = paymentHistoryObjectFinal(
    connectedAccount,
    yearsPassedSinceLoanStarted,
    randomLoanAmountPayed
  );

  return {
    loanID: loanID(),
    loanConnectedAccount: connectedAccount,
    loanAmount: loanAmount,
    loanLength: loanLength,
    loanStartDate: globalFunctions.randomFullDate(),
    loanEndDate: globalFunctions.randomFullDate(),
    loanMonthlyAmount: loanMonthlyPayAmount,
    loanOutstanding: loanTotalOutstanding,
    loanPayed: randomLoanAmountPayed,
    loadInDebt: false,
    loanPaymentHistory: paymentHistoryArray,
  };
}

module.exports = {
  createLoan,
};
