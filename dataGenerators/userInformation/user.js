// This file will handle creating the users info like
// FirstName, LastName, MiddleName, phone, email, address
const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\userInfo\\");

const globalFunctions = require("../../global");

function personName(type) {
  let names;

  switch (type) {
    case "firstName":
      names = globalFunctions.getJSONContentArray("firstNames.json");
      break;
    case "lastName":
      names = globalFunctions.getJSONContentArray("lastNames.json");
      break;
    case "middleName":
      names = globalFunctions.getJSONContentArray("middleNames.json");
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
  let domains = ["gmail.com", "hotmail.co.uk", "live.co.uk", "yahoo.co.uk", "mail.com", "micromail.com"];

  return first_name + last_name + "@" + domains[globalFunctions.randomMinMax(0, domains.length)];
}

function postcode() {
  let postcode = globalFunctions.getJSONContentArray("postcodes.json", __DATA_PATH);

  return postcode[globalFunctions.randomMinMax(0, postcode.length - 1)];
}

function streetName() {
  let streetName = getJSONContentArray("streetNames.json");
  return streetName[globalFunctions.randomMinMax(0, streetName.length - 1)];
}

function doorNumber() {
  return globalFunctions.randomMinMax(1, 250);
}

function city() {
  let city = getJSONContentArray("cities.json");
  return city[globalFunctions.randomMinMax(0, city.length - 1)];
}

function county() {
  let county = getJSONContentArray("counties.json");
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
