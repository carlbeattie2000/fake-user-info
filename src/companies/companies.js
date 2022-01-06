const globalFunctions = require("../../global");
// add some more stuff like, vat, registered, company director, ect

const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\companies\\");

function companyName() {
  const companies = globalFunctions.getJSONContentArray("names.json", __DATA_PATH);

  return companies[globalFunctions.randomMinMax(0, companies.length - 1)];
}

function companyCatchPhrase() {
  const catchPhrases = globalFunctions.getJSONContentArray("catchPhrases.json", __DATA_PATH);

  return catchPhrases[globalFunctions.randomMinMax(0, catchPhrases.length - 1)];
}

function companyAnnualEarnings(max = 1500000) {
  return globalFunctions.randomMinMax(10000, max);
}

function companyAnnualProfit(earnings = 7880400) {
  return globalFunctions.randomMinMax(10000, earnings);
}

function companyAnnualLoss(earnings = 7880400, profit = 2843300) {
  return earnings - profit;
}

function companyOperatingCountry() {
  const countries = globalFunctions.getJSONContentArray("countries.json", __DATA_PATH);

  return countries[globalFunctions.randomMinMax(0, countries.length - 1)];
}

const companyNameArray = (amount) => [...Array(amount)].map(() => companyName());
const companyCatchPhraseArray = (amount) => [...Array(amount)].map(() => companyCatchPhrase());
const companyOperatingCountryArray = (amount) => [...Array(amount)].map(() => companyOperatingCountry());

module.exports = {
  companyName,
  companyCatchPhrase,
  companyAnnualEarnings,
  companyAnnualProfit,
  companyAnnualLoss,
  companyOperatingCountry,
  companyNameArray,
  companyCatchPhraseArray,
  companyOperatingCountryArray,
};
