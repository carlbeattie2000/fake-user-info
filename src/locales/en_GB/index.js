const locationDefinition = require("./location");

class LocalDefinition {
  constructor({ location }) {
    this.address = location;
  }
}

const localDefinition = new LocalDefinition({ location: locationDefinition });

module.exports = localDefinition;