// This file will handle creating the users info like
// FirstName, LastName, MiddleName, phone, email, address
const crypto = require("crypto");
const fs = require("fs");
const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\dataSets\\userInfo\\");

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
  let postcode = [
    "AB1 0AA",
    "AB1 0AB",
    "AB1 0AD",
    "AB1 0AE",
    "AB1 0AF",
    "AB1 0AG",
    "AB1 0AJ",
    "AB1 0AL",
    "AB1 0AN",
    "AB1 0AP",
    "AB1 0AQ",
    "AB1 0AR",
    "AB1 0AS",
    "DY6 0AS",
    "DY6 0AU",
    "DY6 0AW",
    "DY6 0AX",
    "DY6 0BA",
    "DY6 0BB",
    "DY6 0BD",
    "DY6 0BG",
    "DY6 0BH",
    "DY6 0BJ",
    "G67 4AA",
    "G67 4AB",
    "G67 4AD",
    "G67 4AE",
    "G67 4AF",
    "G67 4AG",
    "G67 4AH",
    "G67 4AJ",
    "G67 4AL",
    "G67 4AN",
    "G67 4AP",
    "G67 4AQ",
    "G67 4AR",
    "G67 4AS",
    "HR1 1NH",
    "HR1 1NJ",
    "HR1 1NL",
    "HR1 1NN",
    "HR1 1NP",
    "HR1 1NQ",
    "HR1 1NR",
    "HR1 1NS",
    "HR1 1NT",
    "KY3 0DF",
    "KY3 0DG",
    "KY3 0DH",
    "KY3 0DJ",
    "KY3 0DL",
    "KY3 0DN",
    "KY3 0DP",
    "KY3 0DQ",
    "KY3 0DR",
    "KY3 0DS",
    "KY3 0DT",
  ];

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

function randomCounty() {
  let county = getJSONContentArray("counties.json");
  return county[randomMinMax(0, county.length - 1)];
}

function createAddressObject(owner = "") {
  // postcode, doorNumber, streetName, city, county, registered owner
  return {
    addressRegisteredOwner: owner,
    addressDoorNumber: randomDoorNumber(),
    addressStreetName: randomStreetName(),
    addressCity: randomCity(),
    addressCounty: randomCounty(),
    addressPostCode: randomPostcode(),
  };
}

function createUserObject() {
  // first name, last name, middle name, mobile number, home number, email
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

// Note to self: find a better way to do this
const createArrayOfFirstNames = (amount) => [...Array(amount)].map(() => createRandomName("firstName"));
const createArrayOfLastNames = (amount) => [...Array(amount)].map(() => createRandomName("lastName"));
const createArrayOfMiddleNames = (amount) => [...Array(amount)].map(() => createRandomName("middleName"));

const createArrayOfMobileNumbers = (amount) => [...Array(amount)].map(() => createRandomPhoneNumber("mobile"));
const createArrayOfHomePhoneNumbers = (amount) => [...Array(amount)].map(() => createRandomPhoneNumber("home"));

const createArrayOfRandomEmails = (amount) =>
  [...Array(amount)].map(() => createRandomEmail(createRandomName("firstName"), createRandomName("lastName")));

const createArrayOfRandomPostcodes = (amount) => [...Array(amount)].map(() => randomPostcode());
const createArrayOfRandomStreetNames = (amount) => [...Array(amount)].map(() => randomStreetName());
const createArrayOfRandomDoorNumbers = (amount) => [...Array(amount)].map(() => randomDoorNumber());
const createArrayOfRandomCities = (amount) => [...Array(amount)].map(() => randomCity());
const createArrayOfRandomCounties = (amount) => [...Array(amount)].map(() => randomCounty());

const createArrayOfRandomAddressObject = (amount) => [...Array(amount)].map(() => createAddressObject());
const createArrayOfRandomUserObject = (amount) => [...Array(amount)].map(() => createUserObject());

module.exports = {
  createRandomName,
  createRandomPhoneNumber,
  createRandomEmail,
  randomPostcode,
  randomStreetName,
  randomDoorNumber,
  randomCity,
  randomCounty,
  createAddressObject,
  createUserObject,
  createArrayOfFirstNames,
  createArrayOfLastNames,
  createArrayOfMiddleNames,
  createArrayOfMobileNumbers,
  createArrayOfHomePhoneNumbers,
  createArrayOfRandomEmails,
  createArrayOfRandomPostcodes,
  createArrayOfRandomStreetNames,
  createArrayOfRandomDoorNumbers,
  createArrayOfRandomCities,
  createArrayOfRandomCounties,
  createArrayOfRandomAddressObject,
  createArrayOfRandomUserObject,
};
