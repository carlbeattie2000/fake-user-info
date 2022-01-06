const PATH = require("path");

const globalFunctions = require("../../global");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\userPrivateInfo\\");

function randomIP4() {
  return (
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString()
  );
}

function randomIP6() {
  return (
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4)
  );
}

function randomDomainName() {
  let domains = [".com", ".co.uk", ".org", ".io", ".tech", ".uk", ".org", ".eu", ".london", ".me", ".ltd", ".me.uk"];
  let domainName = globalFunctions.getJSONContentArray("domains.json", __DATA_PATH);
  return (
    domainName[globalFunctions.randomMinMax(0, domainName.length - 1)] +
    domains[globalFunctions.randomMinMax(0, domains.length - 1)]
  );
}

function randomURL() {
  return "https://" + randomDomainName();
}

function randomUserAgent() {
  let userAgents = globalFunctions.getJSONContentArray("userAgents.json", __DATA_PATH);

  return userAgents[globalFunctions.randomMinMax(0, userAgents.length - 1)];
}

const createArrayOfIP4 = (amount) => [...Array(amount)].map(() => randomIP4());

const createArrayOfIP6 = (amount) => [...Array(amount)].map(() => randomIP6());

const createArrayOfDomains = (amount) => [...Array(amount)].map(() => randomDomainName());

const createArrayOfURLS = (amount) => [...Array(amount)].map(() => randomURL());

const createArrayOfUserAgents = (amount) => [...Array(amount)].map(() => randomUserAgent());

function createPrivateDataObject(arrayLength = 1) {
  return {
    accountLogOnHistory: globalFunctions.createArrayOfRandomFullDate(arrayLength),
    accountLoggedInFromHistory: createArrayOfIP4(arrayLength),
    accountDeviceConnectedHistory: createArrayOfUserAgents(arrayLength),
  };
}

module.exports = {
  randomIP4,
  randomIP6,
  randomDomainName,
  randomURL,
  createArrayOfIP4,
  createArrayOfIP6,
  createArrayOfDomains,
  createArrayOfURLS,
  createArrayOfUserAgents,
  createPrivateDataObject,
};
