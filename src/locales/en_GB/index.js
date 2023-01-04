const ImpostorBase = require("../../core/impostorBase");

const location = require("./location");
const phone = require("./phone");
const internet = require("./internet");
const vehicle = require("./vehicles");

class Location extends ImpostorBase {
  constructor() {
    super();
  }

  city() {
    return this.randomArrayElement(location.cities);
  }

  street() {
    return this.randomArrayElement(location.streets);
  }

  county() {
    return this.randomArrayElement(location.counties);
  }

  postcode() {
    const prefix = this.randomArrayElement(location.postcodes);

    return prefix + this.randomInt({ max: 100 }) + " " + this.randomInt({ max: 10 }) + this.randomString(2);
  }

  buildingNumber({ includeLetters = false, maxBuildingNumber = 1000 } = {}) {
    if (includeLetters) {
      return this.randomString(1) + this.randomInt({ max: 100 });
    }

    return this.randomInt({ max: maxBuildingNumber });
  }

  localCountry() {
    if (Array.isArray(location.country)) {
      return this.randomArrayElement(location.country);
    }

    return location.country;
  }

  streetAddress() {
    return this.buildingNumber() + " " + this.street() + ", " + this.city();
  }

  fullAddress() {
    return {
      buildingNumber: this.buildingNumber(),
      street: this.street(),
      city: this.city(),
      postcode: this.postcode(),
      county: this.county(),
      country: this.localCountry(),
    };
  }
}

class Phone extends ImpostorBase {
  constructor() {
    super();
  }

  mobile() {
    return phone.mobile.digitCode + this.randomInt({ min: 100000000, max: 999999999 });
  }

  landline() {
    return this.randomArrayElement(phone.landline) + this.randomInt({ min: 10000000, max: 99999999 });
  }
}

class Internet extends ImpostorBase {
  constructor() {
    super();
  }

  domain() {
    return this.randomArrayElement(internet.domains);
  }

  isp() {
    return this.randomArrayElement(internet.isps);
  }
}

class Vehicle extends ImpostorBase {
  constructor() {
    super();
  }

  plate() {
    return this.randomArrayElement(vehicle.plateMemoryTags) + this.randomArrayElement(vehicle.plateAgeIdentifiers) + " " + this.randomString(3).toUpperCase();
  }

  vin() {
    return this.randomBytesString(9).toUpperCase().substring(0, 17);
  }

  taxClass() {
    return this.randomArrayElement(vehicle.taxClasses);
  }
}

class en_GB extends ImpostorBase {
  constructor() {
    super();

    this.location = new Location();
    this.phone = new Phone();
    this.internet = new Internet();
    this.vehicle = new Vehicle();
  }
}

module.exports = new en_GB();