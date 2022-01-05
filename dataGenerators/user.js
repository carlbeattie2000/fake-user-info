// This file will handle creating the users info like
// FirstName, LastName, MiddleName, phone, email, address
const crypto = require("crypto");
const fs = require("fs");

const __DATA_PATH =
  "/mnt/c/Users/jimmy/documents/development/!projects/javascript/onlinebankingcrud/dataSets/userInfo/";

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getJSONContentArray(filePath) {
  return JSON.parse(fs.readFileSync(__DATA_PATH + filePath, "utf8")).content;
}

function createRandomID() {
  return crypto.randomBytes(16).toString("hex");
}

function createRandomName(type) {
  let names;

  switch (type) {
    case "firstName":
      names = getJSONContentArray("firstNames.json");
      break;
    case "lastName":
      names = getJSONContentArray("lastNames.json");
      break;
    case "middleName":
      names = getJSONContentArray("middleNames.json");
      break;
    default:
      return console.error("Error: No Valid Type Found");
  }

  return names[randomMinMax(0, names.length)];
}

function createRandomPhoneNumber(type) {
  // mobile | home
  let mobilePrefix = "07";
  let homePrefix = "0" + randomMinMax(10, 99).toString();

  switch (type) {
    case "mobile":
      return mobilePrefix + randomMinMax(100000000, 999999999).toString();
    case "home":
      return homePrefix + randomMinMax(10000000, 99999999);
    default:
      return console.error("Error: No Valid Type Found");
  }
}

function createRandomEmail(first_name, last_name) {
  // first+lastname@xxx.com
  let domains = ["gmail.com", "hotmail.co.uk", "live.co.uk", "yahoo.co.uk", "mail.com", "micromail.com"];

  return first_name + last_name + "@" + domains[randomMinMax(0, domains.length)];
}

function randomPostcode() {
  let postcode = getJSONContentArray("postCodes.json");

  return postcode[randomMinMax(0, postcode.length - 1)];
}

function randomStreetName() {
  let streetName = getJSONContentArray("streetNames.json");
  return streetName[randomMinMax(0, streetName.length - 1)];
}

function randomDoorNumber() {
  return randomMinMax(1, 250);
}

function randomCity() {
  let city = getJSONContentArray("citys.json");
  return city[randomMinMax(0, city.length - 1)];
}

function randomCountie() {
  let countie = getJSONContentArray("counties.json");
  return countie[randomMinMax(0, countie.length - 1)];
}

function createAddressObject(owner = "") {
  // postcode, doorNumber, streetName, city, county, registered owner
  return {
    addressRegisteredOwner: owner,
    addressDoorNumber: randomDoorNumber(),
    addressStreetName: randomStreetName(),
    addressCity: randomCity(),
    addressCountie: randomCountie(),
    addressPostCode: randomPostcode(),
  };
}

function createUserObject() {
  let namef = createRandomName("firstName");
  let namel = createRandomName("lastName");
  return {
    nameFirst: namef,
    nameLast: namel,
    nameMiddle: createRandomName("middleName"),
    phoneMobile: createRandomPhoneNumber("mobile"),
    phoneHome: createRandomPhoneNumber("home"),
    accountEmail: createRandomEmail(namef, namel),
  };
}

module.exports = {
  createRandomName,
  createRandomPhoneNumber,
  createRandomEmail,
  randomPostcode,
  randomStreetName,
  randomDoorNumber,
  randomCity,
  randomCountie,
  createAddressObject,
  createUserObject,
};
