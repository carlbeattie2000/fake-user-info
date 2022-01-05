const crypto = require("crypto");
const PATH = require("path");
const fs = require("fs");

const __DATA_PATH = PATH.join(__dirname, "..\\dataSets\\userPrivateInfo\\");

function getJSONContentArray(filePath) {
  return JSON.parse(fs.readFileSync(__DATA_PATH + filePath, "utf8")).content;
}

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")
    .toUpperCase();

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIP4() {
  return (
    randomMinMax(0, 255).toString() +
    "." +
    randomMinMax(0, 255).toString() +
    "." +
    randomMinMax(0, 255).toString() +
    "." +
    randomMinMax(0, 255).toString()
  );
}

function randomIP6() {
  return (
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4) +
    ":" +
    genRanHex(4)
  );
}

function randomDomainName() {
  let domains = [".com", ".co.uk", ".org", ".io", ".tech", ".uk", ".org", ".eu", ".london", ".me", ".ltd", ".me.uk"];
  let domainName = getJSONContentArray("domains.json");
  return domainName[randomMinMax(0, domainName.length - 1)] + domains[randomMinMax(0, domains.length - 1)];
}

function randomURL() {
  return "https://" + randomDomainName();
}

function randomUserAgent() {
  let userAgents = getJSONContentArray("userAgents.json");

  return userAgents[randomMinMax(0, userAgents.length - 1)];
}

const createArrayOfIP4 = (amount) => [...Array(amount)].map(() => randomIP4());

const createArrayOfIP6 = (amount) => [...Array(amount)].map(() => randomIP6());

const createArrayOfDomains = (amount) => [...Array(amount)].map(() => randomDomainName());

const createArrayOfURLS = (amount) => [...Array(amount)].map(() => randomURL());

const createArrayOfUserAgents = (amount) => [...Array(amount)].map(() => randomUserAgent());

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
};
