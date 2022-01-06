/*
  handles:
    firstName
    lastName
    middleName
    email
    phone
    createUser
*/
const PATH = require("path");

// eslint-disable-next-line no-undef
const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\userInfo\\");

const globalFunctions = require("../global");

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
  let domains = [
    "gmail.com", 
    "hotmail.co.uk", 
    "live.co.uk", 
    "yahoo.co.uk", 
    "mail.com", 
    "europe.com"
  ];

  return first_name + last_name + "@" + domains[globalFunctions.randomMinMax(0, domains.length)];
}

function createUser() {
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

const arrayOfUserObjects = (amount) => [...Array(amount)].map(() => createUser());

module.exports = {
  personName,
  phoneNumber,
  personEmail,
  createUser,
  arrayOfNames,
  arrayOfPhoneNumbers,
  arrayOfEmails,
  arrayOfUserObjects,
};
