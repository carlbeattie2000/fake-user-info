import { Base } from "../core/base";
import { Vehicle } from "../types/locales";

export class VehicleLocale extends Base {
  vehicleData: Vehicle;

  constructor(vehicleData: Vehicle) {
    super();

    this.vehicleData = vehicleData;
  }

  plate(): string {
    return (
      this.randomArrayElement<string>(this.vehicleData.memoryTags) +
      this.randomArrayElement<string>(this.vehicleData.ageIdentifiers) +
      this.randomString(3).toUpperCase()
    );
  }

  vin(): string {
    return this.randomBytesString(9).toUpperCase().substring(0, 17);
  }

  taxClass(): string {
    return this.randomArrayElement<string>(this.vehicleData.taxClasses);
  }
}
