/*
  handles:
    postcode
    streetName
    doorNumber
    city
    county
    createAddress
*/
const globalFunctions = require("../global");
const postcodeGen = require("../utils/postcode");


// valid postcode formats
// AA9A AA
// A9A 9AA
// A9 9AA
// A99 9AA
// AA9 9AA
// AA99 9AA

function postcode() {
  return postcodeGen.rndPostcode();
}

function streetName() {
  const streetName = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Street",
    "Albion Place",
    "Appold Street",
    "Back Alley",
    "Bakers Hall Court",
    "Barbon Alley",
    "Barley Mow Passage",
    "Barnard's Inn",
    "Bartlett Court",
    "Bengal Court",
    "Bell Wharf Lane",
    "Brabant Court",
    "Bunyan Court",
    "Camp Street",
    "Communal Square",
    "Delaware Avenue",
    "Federation Square",
    "Gateway Street",
    "History Avenue ",
    "Katrina Street",
    "Marine Avenue",
    "Noble City Path",
    "Plaza Street",
    "Pine Avenue",
    "Rail Avenue",
    "River Street",
    "Shall Street",
    "Technology Avenue",
    "Cresset Road",
    "Blackwall Way",
    "Portobello Road",
    "Bury Place",
    "Cambridge Row",
    "Cambridge Grove",
    "Shepherd's Gardens",
    "Stenhouse Street",
    "Carol Street",
    "Winkley Street",
    "Glamis Place",
    "Evins Place",
    "Merchland Cottages",
    "Burnham Street",
    "Amos Court",
    "St. Mary's Path",
    "Peter Hills Walk",
    "St. John's Terrace",
    "St. Matthew's Row",
    "Lilestone Street",
    "St. Barnabas Terrace",
    "Circular Way",
    "Clare Lane",
    "College Approach",
    "Stoke Newington Church Street",
    "Polygon Road",
    "Tilloch Street",
    "Clifton Avenue",
    "Eton College Road",
    "Minting Row",
    "Redruth Road",
    "Cottage Walk",
    "Becher Place",
    "Cresset Street",
    "Nash Street",
    "Denmark Walk",
    "Derby Gate",
    "Dobins Court",
    "Broadley Street",
    "Waring Street",
    "Troy Street",
    "Edwin Street",
    "Cliffords Row",
    "Emily Villas",
    "Evelyn Walk",
    "Luffman Road",
    "Hobday Street",
    "Arctic Street",
    "Webber Street",
    "Gower Street",
    "Stanway Street",
    "Playhouse Yard",
    "Glengall Grove",
    "Gloucester Way",
    "Hough Street",
    "Graham Terrace"
  ];

  return streetName[globalFunctions.randomMinMax(0, streetName.length - 1)];
}

function doorNumber() {
  return globalFunctions.randomMinMax(1, 250);
}

function city() {
  const city = [
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton and Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Chelmsford",
    "Chester",
    "Chichester",
    "Coventry",
    "Derby",
    "Durham",
    "Ely",
    "Exeter",
    "Gloucester",
    "Hereford",
    "Kingston upon Hull",
    "Lancaster",
    "Leeds",
    "Leicester",
    "Lichfield",
    "Lincoln",
    "Liverpool",
    "London",
    "Manchester",
    "Newcastle upon Tyne",
    "Norwhich",
    "Nottingham",
    "Oxford",
    "Peterborough",
    "Plymouth",
    "Portsmouth",
    "Preston",
    "Ripon",
    "Salford",
    "Salisbury",
    "Sheffield",
    "Southampton",
    "St Albans",
    "Stoke-on-Trent",
    "Sunderland",
    "Truro",
    "Wakefield",
    "Wells",
    "Westminster",
    "Winchester",
    "Worcester",
    "York"
  ];

  return city[globalFunctions.randomMinMax(0, city.length - 1)];
}

function county() {
  const county = [
    "Bedfordshire",
    "Berkshire",
    "Bristol",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East Riding Yorkshire",
    "East Sussex",
    "Essex",
    "Gloucestershire",
    "Greater Manchester",
    "Hampshire",
    "Herefordshire",
    "Hertfordshire",
    "Isle of Man",
    "Isle of Wight",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "London",
    "Merseyside",
    "Middlesex",
    "Norfolk",
    "North Yorkshire",
    "Northamptonshire",
    "Northumberland",
    "Nottinghamshire",
    "Oxfordshire",
    "Rutland",
    "Shropshire",
    "Somerset",
    "South Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Tyne and Wear",
    "Warwickshire",
    "West Midlands",
    "West Sussex",
    "West Yorkshire",
    "Wiltshire",
    "Worcestershire"
  ];

  return county[globalFunctions.randomMinMax(0, county.length - 1)];
}

function country() {
  const countries = [
    "UK",
    "England",
    "Wales",
    "Scotland",
    "Northern Ireland",
    "Ireland",
    "France",
    "Finland",
    "Spain",
    "Germany",
    "Romania",
    "Belgium",
    "Russia",
    "Sweden",
    "Switzerland",
    "Italy",
    "Netherlands",
    "Austria",
    "Poland",
    "Bulgaria",
    "Portugal",
    "Turkey",
    "Ukraine",
    "Denmark",
    "Latvia",
    "Lithuania",
    "Serbia",
    "Greece",
    "Croatia",
    "Slovenia",
    "Gibraltar",
    "Syria",
    "Cyprus",
    "Norway",
    "China",
    "India",
    "Nepal",
    "Afghanistan",
    "Taiwan",
    "Japan",
    "Australia",
    "New Zealand",
    "South Africa",
    "Brazil",
    "Mexico",
    "Canada",
    "USA",
    "Greenland",
    "Iceland",
    "Egypt"
  ];

  return countries[globalFunctions.randomMinMax(0, countries.length - 1)];
}

function createAddress(owner = "") {
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

const arrayOfPostcodes = (amount) => [...Array(amount)].map(() => postcode());
const arrayOfStreetNames = (amount) => [...Array(amount)].map(() => streetName());
const arrayOfDoorNumbers = (amount) => [...Array(amount)].map(() => doorNumber());
const arrayOfCities = (amount) => [...Array(amount)].map(() => city());
const arrayOfCounties = (amount) => [...Array(amount)].map(() => county());

const arrayOfAddressObjects = (amount) => [...Array(amount)].map(() => createAddress());

module.exports = {
  postcode,
  streetName,
  doorNumber,
  city,
  county,
  country,
  createAddress,
  arrayOfPostcodes,
  arrayOfStreetNames,
  arrayOfDoorNumbers,
  arrayOfCities,
  arrayOfCounties,
  arrayOfAddressObjects,
};