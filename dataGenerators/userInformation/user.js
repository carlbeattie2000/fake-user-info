// This file will handle creating the users info like
// FirstName, LastName, MiddleName, phone, email, address
const { get } = require("http");
const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\userInfo\\");

const globalFunctions = require("../../global");

function personName(type) {
  let names;

  switch (type) {
    case "firstName":
      names = globalFunctions.getJSONContentArray("firstNames.json", __DATA_PATH);
      break;
    case "lastName":
      names = globalFunctions.getJSONContentArray("lastNames.json", __DATA_PATH);
      break;
    case "middleName":
      names = globalFunctions.getJSONContentArray("middleNames.json", __DATA_PATH);
      break;
    default:
      return console.error("Error: No Valid Type Found");
  }

  return names[globalFunctions.randomMinMax(0, names.length)];
}

function phoneNumber(type) {
  // mobile | home
  let mobilePrefix = "07";
  let homePrefix = "0" + globalFunctions.randomMinMax(10, 99).toString();

  switch (type) {
    case "mobile":
      return mobilePrefix + globalFunctions.randomMinMax(100000000, 999999999).toString();
    case "home":
      return homePrefix + globalFunctions.randomMinMax(10000000, 99999999);
    default:
      return console.error("Error: No Valid Type Found");
  }
}

function personEmail(first_name, last_name) {
  // first+lastname@xxx.com
  let domains = ["gmail.com", "hotmail.co.uk", "live.co.uk", "yahoo.co.uk", "mail.com", "europe.com"];

  return first_name + last_name + "@" + domains[globalFunctions.randomMinMax(0, domains.length)];
}

// valid postcode formats
// AA9A AA
// A9A 9AA
// A9 9AA
// A99 9AA
// AA9 9AA
// AA99 9AA

function postcode() {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let maximumPatterns = 6;

  const getChar = () => alphabet[globalFunctions.randomMinMax(0, alphabet.length - 1)];
  const getNum = () => globalFunctions.randomMinMax(1, 9);

  const pattenOne = () => getChar() + getChar() + getNum() + getChar() + " " + getChar() + getChar();
  const pattenTwo = () => getChar() + getNum() + getChar() + " " + getNum() + getChar() + getChar();
  const pattenThree = () => getChar() + getNum() + " " + getNum() + getChar() + getChar();
  const pattenFour = () => getChar() + getNum() + getNum() + " " + getNum() + getChar() + getChar();
  const pattenFive = () => getChar() + getChar() + getNum() + " " + getNum() + getChar() + getChar();
  const pattenSix = () => getChar() + getChar() + getNum() + getNum() + " " + getNum() + getChar() + getChar();

  switch (globalFunctions.randomMinMax(1, maximumPatterns)) {
    case 1:
      return pattenOne();
    case 2:
      return pattenTwo();
    case 3:
      return pattenThree();
    case 4:
      return pattenFour();
    case 5:
      return pattenFive();
    case 6:
      return pattenSix();
    default:
      console.error("Error: Out of range <postcode-max=6>");
  }
}

function streetName() {
  let streetName = getJSONContentArray("streetNames.json", __DATA_PATH);
  return streetName[globalFunctions.randomMinMax(0, streetName.length - 1)];
}

function doorNumber() {
  return globalFunctions.randomMinMax(1, 250);
}

function city() {
  let city = getJSONContentArray("cities.json", __DATA_PATH);
  return city[globalFunctions.randomMinMax(0, city.length - 1)];
}

function county() {
  let county = getJSONContentArray("counties.json", __DATA_PATH);
  return county[globalFunctions.randomMinMax(0, county.length - 1)];
}

function addressObject(owner = "") {
  // postcode, doorNumber, streetName, city, county, registered owner //TEMPLATE\\
  return {
    addressRegisteredOwner: owner,
    addressDoorNumber: doorNumber(),
    addressStreetName: streetName(),
    addressCity: city(),
    addressCounty: county(),
    addressPostCode: postcode(),
  };
}

function userObject() {
  // first name, last name, middle name, mobile number, home number, email //TEMPLATE\\
  let namef = personName("firstName");
  let namel = personName("lastName");
  return {
    nameFirst: namef,
    nameLast: namel,
    nameMiddle: personName("middleName"),
    phoneMobile: phoneNumber("mobile"),
    phoneHome: phoneNumber("home"),
    accountEmail: personEmail(namef, namel),
  };
}

// Note to self: find a better way to do this
const arrayOfNames = (amount, type) => [...Array(amount)].map(() => personName(type));

const arrayOfPhoneNumbers = (amount, type) => [...Array(amount)].map(() => phoneNumber(type));

const arrayOfEmails = (amount) =>
  [...Array(amount)].map(() => personEmail(personName("firstName"), personName("lastName")));

const arrayOfPostcodes = (amount) => [...Array(amount)].map(() => postcode());
const arrayOfStreetNames = (amount) => [...Array(amount)].map(() => streetName());
const arrayOfDoorNumbers = (amount) => [...Array(amount)].map(() => doorNumber());
const arrayOfCities = (amount) => [...Array(amount)].map(() => city());
const arrayOfCounties = (amount) => [...Array(amount)].map(() => county());

const arrayOfAddressObjects = (amount) => [...Array(amount)].map(() => addressObject());
const arrayOfUserObjects = (amount) => [...Array(amount)].map(() => userObject());

module.exports = {
  personName,
  phoneNumber,
  personEmail,
  postcode,
  streetName,
  doorNumber,
  city,
  county,
  addressObject,
  userObject,
  arrayOfNames,
  arrayOfPhoneNumbers,
  arrayOfEmails,
  arrayOfPostcodes,
  arrayOfStreetNames,
  arrayOfDoorNumbers,
  arrayOfCities,
  arrayOfCounties,
  arrayOfAddressObjects,
  arrayOfUserObjects,
};
