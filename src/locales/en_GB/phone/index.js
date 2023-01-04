const ImpostorBase = require("../../../core/impostorBase");

class Phone extends ImpostorBase {
  constructor() {
    super()
  }

  mobile() {
    return "07" + this.randomInt({ min: 100000000, max:  999999999});
  }

  landline() {
    return this.randomArrayElement(["020", "029", "023", "028"]) + this.randomInt({ min: 10000000, max: 99999999 });
  }
}

module.exports = new Phone();