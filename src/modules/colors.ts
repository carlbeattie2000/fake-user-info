import { Base } from "../core/base";

export class ColorModule extends Base {
  constructor() {
    super();
  }

  rgb(): number[] {
    return new Array(3).fill(0).map((_) => this.randomInt({ max: 255 }));
  }

  rgba(): number[] {
    return [...this.rgb(), this.randomFloat(1)];
  }

  rgbString(): string {
    return `rgb(${this.rgb().join(", ")})`;
  }

  rgbaString(): string {
    return `rgba(${this.rgba().join(", ")})`;
  }

  hex(): string {
    return (
      "#" +
      new Array(6)
        .fill(0)
        .map((_) => ~~this.randomInt({ max: 16 }).toString(16))
    );
  }

  hsl(): number[] {
    return [
      this.randomInt({ max: 360 }),
      ...new Array(2).fill(0).map((_) => this.randomInt({ max: 100 })),
    ];
  }

  hslString(): string {
    return `hsl(${this.hsl().join(", ")})`;
  }
}
