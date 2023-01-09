const ImpostorBase = require('../../core/impostorBase');

class Color extends ImpostorBase {
  constructor() { super(); }

  rgb() {
    return [this.randomInt({ max: 255 }), this.randomInt({ max: 255 }), this.randomInt({ max: 255 })];
  }

  rgba() {
    return [this.randomInt({ max: 255 }), this.randomInt({ max: 255 }), this.randomInt({ max: 255 }), this.randomFloat({ max: 1 })];
  }

  rgbString() {
    return `rgb(${this.randomInt({ max: 255 })}, ${this.randomInt({ max: 255 })}, ${this.randomInt({ max: 255 })})`;
  }

  rgbaString() {
    return `rgba(${this.randomInt({ max: 255 })}, ${this.randomInt({ max: 255 })}, ${this.randomInt({ max: 255 })}, ${this.randomFloat({ max: 1 })})`;
  }

  hex() {
    return '#000000'.replace(/0/g, function() {
      return (~~(Math.random()*16)).toString(16);
    });
  }

  hsl() {
    return [this.randomInt({ max: 360 }), this.randomInt({ max: 100 }), this.randomInt({ max: 100 })];
  }

  hslString() {
    return `hsl(${this.randomInt({ max: 360 })}, ${this.randomInt({ max: 100 })}, ${this.randomInt({ max: 100 })})`;
  }
}

module.exports = Color;