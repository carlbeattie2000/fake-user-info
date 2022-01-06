const PATH = require("path");

const globalFunctions = require("../../global");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\userPrivateInfo\\");

function IPV4() {
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

function IPV6() {
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

function domainName() {
  let domains = [".com", ".co.uk", ".org", ".io", ".tech", ".uk", ".org", ".eu", ".london", ".me", ".ltd", ".me.uk"];
  let domainName = globalFunctions.getJSONContentArray("domains.json", __DATA_PATH);
  return (
    domainName[globalFunctions.randomMinMax(0, domainName.length - 1)] +
    domains[globalFunctions.randomMinMax(0, domains.length - 1)]
  );
}

function URL() {
  return "https://" + domainName();
}

function userAgent() {
  let userAgents = globalFunctions.getJSONContentArray("userAgents.json", __DATA_PATH);

  return userAgents[globalFunctions.randomMinMax(0, userAgents.length - 1)];
}

const arrayIPV4 = (amount) => [...Array(amount)].map(() => IPV4());

const arrayIPV6 = (amount) => [...Array(amount)].map(() => IPV6());

const arrayDomainName = (amount) => [...Array(amount)].map(() => domainName());

const arrayURL = (amount) => [...Array(amount)].map(() => URL());

const arrayUserAgents = (amount) => [...Array(amount)].map(() => userAgent());

function arrayDeviceHistory(arrayLength = 1) {
  return {
    accountLogOnHistory: globalFunctions.createArrayOfRandomFullDate(arrayLength),
    accountLoggedInFromHistory: arrayIPV4(arrayLength),
    accountDeviceConnectedHistory: arrayUserAgents(arrayLength),
  };
}

module.exports = {
  IPV4,
  IPV6,
  domainName,
  URL,
  arrayIPV4,
  arrayIPV6,
  arrayDomainName,
  arrayURL,
  arrayUserAgents,
  arrayDeviceHistory,
};
