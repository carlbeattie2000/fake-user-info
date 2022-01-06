const user = require("../userInformation/user");
const address = require("../userInformation/address");

const globalFunctions = require("../../global");

const offences = [
  "Abandonment of child under two",
  "Abduction of defective from parent",
  "Abduction of woman by force",
  "Abuse of position of trust",
  "Aggravated arson",
  "Aggravated burglary",
  "Aggravated criminal damage",
  "Aggravated vehicle taking resulting in death",
  "Armed robbery",
  "Arson (value exceeds £100,000)",
  "Blackmail",
  "Bomb hoax",
  "Breach of prison",
  "Breach of restraining order",
  "Carrying loaded firearm in public place",
  "Causing death by dangerous driving",
  "Corruption in public office",
  "Cultivation of cannabis plant",
  "Endangering an aircraft",
  "Failing to keep dogs under proper control resulting in injury",
  "Fraudulent evasion of controls on Class A and B drugs",
  "VAT offences",
  "Murder",
  "Attempted Murder"
];

const crimeNumber = () => globalFunctions.genRanHex(3) + globalFunctions.randomMinMax(10000, 99999) + globalFunctions.randomMinMax(10, 99) + globalFunctions.randomMinMax(1000,9999) + globalFunctions.genRanHex(2);

const offence = () => {
  return offences[globalFunctions.randomMinMax(0, offences.length -1)];
};

const warrant = () => {
  return {
    dateIssued: globalFunctions.randomFullDate(),
    charge: offence(),
    county: address.county()
  };
};

const charge = () => {
  return {
    chargeDate: globalFunctions.randomFullDate(),
    offence: offence(),
    offenceCrimeNumber: crimeNumber(),
    outcome: globalFunctions.randomMinMax(0, 1) ? "Guilty" : "Not Guilty",
    offenceLocation: address.createAddress()
  };
};

const criminalRecord = () => {
  return {
    firstName: user.personName("firstName"),
    middleName: user.personName("firstName"),
    lastName: user.personName("lastName"),
    address: [address.createAddress()],
    charges: globalFunctions.randomMinMax(0, 1) ? 0 : globalFunctions.randomMinMax(0, 30),
    arrests: globalFunctions.randomMinMax(0, 1) ? 0 : globalFunctions.randomMinMax(0, 25),
    convictions: globalFunctions.randomMinMax(0, 1) ? 0 : globalFunctions.randomMinMax(0, 20),
    outstandingWarrants: globalFunctions.randomMinMax(0, 1) ? 0 : globalFunctions.randomMinMax(0, 10),
    flightRisk: globalFunctions.randomMinMax(0, 1) ? true : false,
    sexOffender: globalFunctions.randomMinMax(0, 1) ? true: false,
    activeWarrants: [warrant()],
    previousCharges: [charge()],
  };
};

const arrayCrimeNumbers = (amount) => [...Array(amount)].map(() => crimeNumber());
const arrayOffence = (amount) => [...Array(amount)].map(() => offence());
const arrayWarrant = (amount) => [...Array(amount)].map(() => warrant());
const arrayCharge = (amount) => [...Array(amount)].map(() => charge());
const arrayCriminalRecord = (amount) => [...Array(amount)].map(() => criminalRecord());

module.exports = {
  crimeNumber,
  offence,
  warrant,
  charge,
  criminalRecord,
  arrayCrimeNumbers,
  arrayOffence,
  arrayWarrant,
  arrayCharge,
  arrayCriminalRecord,
};