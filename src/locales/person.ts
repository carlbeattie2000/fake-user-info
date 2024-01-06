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

  // If multiword is false, and special characters is also false, the username may be bellow the desired length, will be changed to support a better method
  username({
    specialCharacters = false,
    multiword = false,
    customSpecialCharacters = ',<.>/?#~\'@;:]}[{=+-_!"£$%^&*()"',
    length = 8,
  } = {}): string {
    if (length < 0) {
      throw new Error("Length shouldn't be negative.");
    }

    if (specialCharacters && customSpecialCharacters.length === 0) {
      throw new Error("Empty special character string.");
    }

    let username = "";
    const wordLengthQuota = specialCharacters
      ? Math.floor(length * 0.8)
      : length;
    const specialCharactersLength = length - wordLengthQuota;

    if (multiword) {
      while (username.length < wordLengthQuota) {
        username += this.randomArrayElement<string>(
          this.personData.usernames,
        ).replace(" ", this.randomArrayElement<string>(["_", "-"]));
      }

      username = username.slice(0, wordLengthQuota);
    } else {
      username = this.randomArrayElement<string>(this.personData.usernames);
    }

    if (specialCharacters) {
      username += new Array(specialCharactersLength)
        .fill("")
        .map((_) =>
          this.randomArrayElement<string>(customSpecialCharacters.split("")),
        )
        .join("");
    }

    return username.slice(0, length);
  }
}
