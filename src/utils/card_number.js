const globalFunctions = require("../global");

const cardNumber = () => {
  const setOne = globalFunctions.randomMinMax(100, 999).toString();
  const setTwo = globalFunctions.randomMinMax(1000, 9999).toString();
  const setThree = globalFunctions.randomMinMax(1000, 9999).toString();
  const setFour = globalFunctions.randomMinMax(1000, 9999).toString();

  return setOne + setTwo + setThree + setFour;
};

module.exports = cardNumber;