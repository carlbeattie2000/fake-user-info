import { Base } from "../core/base";
import { Person } from "../types/locales";

export class PersonLocale extends Base {
  personData: Person;

  constructor(personData: Person) {
    super();

    this.personData = personData;
  }

  firstName(sex: "male" | "female" = "male"): string {
    return this.randomArrayElement<string>(
      this.personData.names.firstNames[sex],
    );
  }

  lastName(): string {
    return this.randomArrayElement<string>(this.personData.names.lastNames);
  }

  fullName(sexI: "male" | "female" | "random" = "random"): string {
    const sex: "male" | "female" =
      sexI === "random"
        ? this.randomArrayElement<"male" | "female">(["male", "female"])
        : sexI;

    return (
      this.randomArrayElement<string>(this.personData.names.firstNames[sex]) +
      " " +
      this.randomArrayElement<string>(this.personData.names.lastNames)
    );
  }

  sex(): string {
    return this.randomArrayElement<string>(["male", "female"]);
  }

  dob(): string {
    return this.randomStringFormatter("DD/MM/YYYY");
  }

  email(): string {
    return (
      this.firstName().toLowerCase() +
      this.randomArrayElement<string>(["_", "-", "&", ""]) +
      this.lastName() +
      "@" +
      this.randomArrayElement<string>(this.personData.emailExtensions)
    );
  }

  jobTitle(): string {
    return this.randomArrayElement<string>(this.personData.jobTitles);
  }

  jobArea(): string {
    return this.randomArrayElement<string>(this.personData.jobAreas);
  }
}
