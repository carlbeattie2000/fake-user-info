const ImpostorBase = require('../../core/impostorBase');

const location = require('./location');
const phone = require('./phone');
const internet = require('./internet');
const vehicle = require('./vehicles');
const finance = require('./finance');

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

  department() {
    return this.randomArrayElement(location.departments);
  }

  postcode() {
    let prefix = this.randomInt({ max: 96 });

    if (prefix < 10) {
      prefix = '0' + prefix;
    }

    const identifier = this.randomInt({ min: 100, max: 1000 });

    return `${prefix}${identifier}`;
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
    return {
      buildingNumber: this.buildingNumber(),
      street: this.street(),
      city: this.city(),
      postcode: this.postcode(),
      department: this.department(),
      country: this.localCountry(),
    };
  }
}

class Phone extends ImpostorBase {
  constructor() {
    super();
  }

  mobile() {
    return this.randomArrayElement(phone.mobile).replace(/#/g, () => {
      return this.randomInt({ max: 10 });
    });
  }

  landline() {
    return this.randomArrayElement(phone.landline).replace(/#/g, () => {
      return this.randomInt({ max: 10 });
    });
  }
}

class Vehicle extends ImpostorBase {
  constructor() {
    super();
  }

  plate() {
    return vehicle.plateFormat.replace(/(#|\?)/g, (char) => {
      if (char === '#') {
        return this.randomInt({ max: 10 });
      }

      return this.randomString(1).toUpperCase();
    });
  }

  vin() {
    return this.randomBytesString(9).toUpperCase().substring(0, 17);
  }
}

class en_GB extends ImpostorBase {
  constructor() {
    super();

    this.location = new Location();
    this.phone = new Phone();
    this.vehicle = new Vehicle();

    // Data
    this.finance = finance;
    this.internet = internet;
  }
}

module.exports = new en_GB();