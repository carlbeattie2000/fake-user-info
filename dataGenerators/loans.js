const globalFunctions = require("../global");

function randomLoanID() {
  return globalFunctions.genRanHex(12);
}

function randomLoanTotalAmount(min = 125000) {
  return globalFunctions.randomMinMax(min, 3000000);
}

function randomLoanLength() {
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

function randomAmountLoanPayed(totalAmount, yearsPassedSinceLoan, totalYears) {
  return globalFunctions.randomMinMax(0, totalAmount / (totalYears - yearsPassedSinceLoan));
}

function loanOutstanding(totalAmount, AmountPayed) {
  return totalAmount - AmountPayed;
}

const generatePaymentHistory = (yearsPassed, totalPayed) =>
  [...Array(yearsPassed)].map(() => loanYearlyPayment(yearsPassed, totalPayed));

function generatePaymentHistoryObjectFinal(connectedAccountNumber = "123543454934dhd", yearsPassed, totalPayed) {
  let arr = [];

  generatePaymentHistory(yearsPassed, totalPayed).forEach((month) => {
    arr.push({
      paymentID: randomLoanID(),
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

function generatePaymentHistoryObjectMain(connectedAccount) {
  let loanAmount = randomLoanTotalAmount();
  let loanLength = randomLoanLength();
  let yearsPassedSinceLoanStarted = yearsPassedSinceLoan(loanLength);
  let loanMonthlyPayAmount = loanMonthlyAmount(loanAmount, loanLength);
  let randomLoanAmountPayed = randomAmountLoanPayed(loanAmount, yearsPassedSinceLoanStarted, loanLength);
  let loanTotalOutstanding = loanOutstanding(loanAmount, randomLoanAmountPayed);
  let paymentHistoryArray = generatePaymentHistoryObjectFinal(
    connectedAccount,
    yearsPassedSinceLoanStarted,
    randomLoanAmountPayed
  );

  return {
    loanID: randomLoanID(),
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
  generatePaymentHistoryObjectMain,
};
