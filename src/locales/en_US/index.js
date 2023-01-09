const ImpostorBase = require('../../core/impostorBase');

const location = require('./location');
const phone = require('./phone');
const internet = require('./internet');
const vehicle = require('./vehicles');
const finance = require('./finance');

const Person = require('./person');

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

  stateShorthand() {
    return this.randomArrayElement(Object.keys(location.states));
  }

  state() {
    return location.states[this.stateShorthand()];
  }

  zip(state = undefined) {
    const minMax = location.zips[state || this.stateShorthand()];

    return this.randomInt({ min: minMax.min, max: minMax.max });
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
    return this.buildingNumber() + ' ' + this.street() + ', ' + this.city();
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
      country: this.localCountry(),
    };
  }
}

class Phone extends ImpostorBase {
  constructor() {
    super();
  }

  mobile() {
    return '(' + this.randomArrayElement(phone.areaCodes) + ') ' + this.randomInt({ max: 999 }) + '-' + this.randomInt({ max: 9999 });
  }
}

class Vehicle extends ImpostorBase {
  constructor() {
    super();
  }

  plate() {
    return this.randomArrayElement(Object.values(vehicle.statePlateFormats)).replace(/(#|\?)/g, (char) => {
      if (char === '#') return this.randomInt({ max: 10 });

      return this.randomString(1).toUpperCase();
    });
  }

  vin() {
    return this.randomBytesString(9).toUpperCase().substring(0, 17);
  }
}

class en_US extends ImpostorBase {
  constructor() {
    super();

    this.location = new Location();
    this.phone = new Phone();
    this.vehicle = new Vehicle();

    // Data
    this.finance = finance;
    this.internet = internet;

    // Classes
    this.person = new Person();
  }
}

module.exports = new en_US();
