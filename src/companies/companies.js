const globalFunctions = require("../../global");
// add some more stuff like, vat, registered, company director, ect

const PATH = require("path");

// eslint-disable-next-line no-undef
const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\companies\\");

function name() {
  const companies = globalFunctions.getJSONContentArray("names.json", __DATA_PATH);

  return companies[globalFunctions.randomMinMax(0, companies.length - 1)];
}

function catchPhrase() {
  const catchPhrases = globalFunctions.getJSONContentArray("catchPhrases.json", __DATA_PATH);

  return catchPhrases[globalFunctions.randomMinMax(0, catchPhrases.length - 1)];
}

function annualEarnings(max = 1500000) {
  return globalFunctions.randomMinMax(10000, max);
}

function annualProfit(earnings = 7880400) {
  return globalFunctions.randomMinMax(10000, earnings);
}

function annualLoss(earnings = 7880400, profit = 2843300) {
  return earnings - profit;
}

function operatingCountry() {
  const countries = globalFunctions.getJSONContentArray("countries.json", __DATA_PATH);

  return countries[globalFunctions.randomMinMax(0, countries.length - 1)];
}

const nameArray = (amount) => [...Array(amount)].map(() => name());
const catchPhraseArray = (amount) => [...Array(amount)].map(() => catchPhrase());
const operatingCountryArray = (amount) => [...Array(amount)].map(() => operatingCountry());

module.exports = {
  name,
  catchPhrase,
  annualEarnings,
  annualProfit,
  annualLoss,
  operatingCountry,
  nameArray,
  catchPhraseArray,
  operatingCountryArray,
};
