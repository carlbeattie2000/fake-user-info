const ImpostorBase = require("./impostorBase");
const countries = require("../locales/countries");

class LocationBase extends ImpostorBase {
  constructor(country, cities, streets, counties) {
    super();

    this.country = country;
    this.cities = cities;
    this.streets = streets;
    this.counties = counties;
  }

  city() {
    return this.randomArrayElement(this.cities);
  }

  street() {
    return this.randomArrayElement(this.streets);
  }

  county() {
    return this.randomArrayElement(this.counties);
  }

  buildingNumber({ includeLetters = false, maxBuildingNumber = 1000 } = {}) {
    if (includeLetters) {
      return this.randomString(1) + this.randomInt({ max: 100 })
    }

    return this.randomInt({ max: maxBuildingNumber })
  }

  country() {
    return this.randomArrayElement(countries);
  }

  localCountry() {
    if (Array.isArray(this.country)) {
      return this.randomArrayElement(this.country);
    }

    return this.country;
  }

  streetAddress() {
    return this.buildingNumber() + " " + this.street() + ", " + this.city();
  }
}

module.exports = LocationBase;