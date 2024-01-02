import { Base } from "../core/base";
import { Person } from "../types/locales";

export class PersonLocale extends Base {
  personData: Person;

  constructor(personData: Person) {
    super();

    this.personData = personData;
  }
}
