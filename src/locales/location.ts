import { Base } from "../core/base";

export class LocationLocale extends Base {
  locationData: Location;

  constructor(locationData: Location) {
    super();

    this.locationData = locationData;
  }
}
