import { Base } from "../core/base";
import { AddressObject, Location } from "../types/locales";

export class LocationLocale extends Base {
  locationData: Location;

  constructor(locationData: Location) {
    super();

    this.locationData = locationData;
  }

  city(): string {
    return this.randomArrayElement<string>(this.locationData.cities);
  }

  street(): string {
    return this.randomArrayElement<string>(this.locationData.streets);
  }

  county(): string {
    return this.randomArrayElement<string>(this.locationData.counties);
  }

  postcode(): string {
    if (!this.locationData.postcodes && !this.locationData.zipCodes) {
      throw new Error("No locale data provided for zip code or postcodes");
    }

    if (!this.locationData.postcodes) {
      return this.zip();
    }

    const prefix = this.randomArrayElement<string>(this.locationData.postcodes);

    return (
      prefix +
      this.randomInt({ max: 100 }).toString() +
      " " +
      this.randomInt({ max: 10 }).toString() +
      this.randomString(2)
    );
  }

  zip(): string {
    if (!this.locationData.postcodes && !this.locationData.zipCodes) {
      throw new Error("No locale data provided for zip code or postcodes");
    }

    if (!this.locationData.zipCodes) {
      return this.postcode();
    }

    return this.randomArrayElement<string>(this.locationData.zipCodes);
  }

  buildingNumber({ includeLetters = false, max = 1000 } = {}): string {
    if (includeLetters) {
      return this.randomString(1) + this.randomInt({ max }).toString();
    }

    return this.randomInt({ max }).toString();
  }

  localeCountry(): string {
    return this.randomArrayElement<string>(this.locationData.countries);
  }

  streetAddress(): string {
    return this.buildingNumber() + " " + this.street() + ", " + this.city();
  }

  address(): AddressObject {
    return {
      buildingNumber: this.buildingNumber(),
      street: this.street(),
      city: this.city(),
      postcode: this.postcode(),
      county: this.county(),
      country: this.localeCountry(),
    };
  }
}
