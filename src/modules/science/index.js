const ImpostorBase = require('../../core/impostorBase');

const scienceData = require('../../data/science.json');

class Science extends ImpostorBase {
  constructor() { super(); }

  asteroid() {
    return this.randomArrayElement(scienceData['asteroids']);
  }

  biologicalTerm() {
    return this.randomArrayElement(scienceData['biological_terms']);
  }

  planet() {
    return this.randomArrayElement(scienceData['planets']);
  }

  chemicalElement() {
    return this.randomArrayElement(scienceData['chemical_elements']);
  }
}

module.exports = Science;