import { Base } from "../core/base";

import timezoneData from "../data/timezones.json";
import { localeCodes } from "../types/locales";

export class TimezoneModule extends Base {
  constructor() {
    super();
  }

  timezone(): string {
    return this.randomArrayElement<string>(timezoneData.timezones);
  }

  dateTime(timezone = "", locale: localeCodes = "en_GB"): string {
    const date = new Date();

    if (timezone) {
      return date.toLocaleString(locale.replace("_", "-"), {
        timeZone: timezone,
      });
    }

    return date.toLocaleString(locale.replace("_", "-"), {
      timeZone: this.timezone(),
    });
  }
}
