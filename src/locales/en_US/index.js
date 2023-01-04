const ImpostorBase = require("../../core/impostorBase");

const location = require("./location");
const phone = require("./phone");
const internet = require("./internet");

class Location extends ImpostorBase {
  constructor() { super() }

  city() {
    return this.randomArrayElement(location.cities);
  }

  street() {
    return this.randomArrayElement(location.streets);
  }

  county() {
    return this.randomArrayElement(location.counties);
  }

  stateShorthand() {
    return this.randomArrayElement(Object.keys(location.states));
  }

  state() {
    return location.states[this.stateShorthand()];
  }

  zip(state=undefined) {
    const minMax = location.zips[state || this.stateShorthand()];

    return this.randomInt({ min: minMax.min, max: minMax.max });
  }

  buildingNumber({ includeLetters = false, maxBuildingNumber = 1000 } = {}) {
    if (includeLetters) {
      return this.randomString(1) + this.randomInt({ max: 100 })
    }

    return this.randomInt({ max: maxBuildingNumber })
  }

  localCountry() {
    if (Array.isArray(location.country)) {
      return this.randomArrayElement(location.country)
    }

    return location.country;
  }

  streetAddress() {
    return this.buildingNumber() + " " + this.street() + ", " + this.city();
  }

  fullAddress() {
    const state = this.stateShorthand();

    return {
      buildingNumber: this.buildingNumber(),
      street: this.street(),
      city: this.city(),
      zip: this.zip(state),
      state: state,
      county: this.county(),
      country: this.localCountry()
    }
  }
}

class Phone extends ImpostorBase {
  constructor() { super() }

  mobile() {
    return "(" + this.randomArrayElement(phone.areaCodes) + ") " + this.randomInt({ max: 999 }) + "-" + this.randomInt({ max: 9999 }); 
  }
}

class Internet extends ImpostorBase {
  constructor() { super() }

  domain() {
    return this.randomArrayElement(internet.domains);
  }

  isp() {
    return this.randomArrayElement(internet.isps);
  }
}

class en_US extends ImpostorBase {
  constructor() {
    super();

    this.location = new Location();
    this.phone = new Phone();
    this.internet = new Internet();
  }
}

module.exports = new en_US();