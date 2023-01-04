const LocationBase = require("../../../core/LocationBase");

const cities = require("./cities");
const counties = require("./counties");
const country = require("./country");
const districts = require("./districts");
const postcodes = require("./postcode");
const streets = require("./streets");

class Location extends LocationBase {
  constructor({ cities, counties, country, districts, postcodes, streets }) {
    super(country, cities, streets, counties);

    this.postcodes = postcodes;
    this.districts = districts;
  }

  postcode() {
    return this.randomArrayElement(this.postcodes);
  }

  borough() {
    return this.randomArrayElement(this.districts);
  }
}

module.exports = new Location({
  cities,
  counties,
  country,
  districts,
  postcodes,
  streets
})