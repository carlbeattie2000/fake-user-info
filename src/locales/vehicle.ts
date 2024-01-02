import { Base } from "../core/base";
import { Vehicle } from "../types/locales";

export class VehicleLocale extends Base {
  vehicleData: Vehicle;

  constructor(vehicleData: Vehicle) {
    super();

    this.vehicleData = vehicleData;
  }
}
