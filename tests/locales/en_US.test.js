const { equal } = require("assert");
const test = require("node:test");

const en_US = require("../../src/locales/en_US");

test("en_US location test", async (t) => {
  await t.test("Location city should return a string", () => {
    const city = en_US.location.city();

    equal(typeof city, typeof "");
  });

  await t.test("Location street should return a string", () => {
    const street = en_US.location.street();

    equal(typeof street, typeof "");
  });

  await t.test("Location county should return a string", () => {
    const county = en_US.location.county();

    equal(typeof county, typeof "");
  });

  await t.test(
    "Location state shorthand should return a string of length 2",
    () => {
      const stateShorthand = en_US.location.stateShorthand();

      equal(typeof stateShorthand, typeof "");
      equal(stateShorthand.length, 2);
    },
  );

  await t.test("Location state should return a string", () => {
    const state = en_US.location.state();

    equal(typeof state, typeof "");
  });

  await t.test("Location zip should return a int", () => {
    const zip = en_US.location.zip();

    equal(typeof zip, typeof 0);
  });

  await t.test("Location building number should return a int", () => {
    const buildingNumber = en_US.location.buildingNumber();

    equal(typeof buildingNumber, typeof 0);
  });

  await t.test("Location local country should return a string", () => {
    const localCountry = en_US.location.localCountry();

    equal(typeof localCountry, typeof "");
  });

  await t.test("Location street address should return a string", () => {
    const streetAddress = en_US.location.streetAddress();

    equal(typeof streetAddress, typeof "");
  });

  await t.test("Location full address should return a JSON object", () => {
    const fullAddress = en_US.location.fullAddress();

    equal(typeof fullAddress, typeof {});
  });
});

test("en_US phone test", async (t) => {
  await t.test("Phone mobile should return a string1", () => {
    const mobile = en_US.phone.mobile();

    equal(typeof mobile, typeof "");
  });
});

test("en_US vehicle test", async (t) => {
  await t.test("Vehicle plate should return a string", () => {
    const plate = en_US.vehicle.plate();

    equal(typeof plate, typeof "");
  });

  await t.test("Vehicle vin should return a string of length 17", () => {
    const vin = en_US.vehicle.vin();

    equal(typeof vin, typeof "");
    equal(vin.length, 17);
  });
});

test("en_US person test", async (t) => {
  await t.test("firstName returns a string", () => {
    const firstName = en_US.person.firstName();

    equal(typeof firstName, typeof "");
  });

  await t.test("firstName with a passed gender returns a string", () => {
    const firstName = en_US.person.firstName("male");

    equal(typeof firstName, typeof "");
  });

  await t.test("lastName returns a string", () => {
    const lastName = en_US.person.lastName();

    equal(typeof lastName, typeof "");
  });

  await t.test("fullName returns a string", () => {
    const fullName = en_US.person.lastName();

    equal(typeof fullName, typeof "");
  });

  await t.test("sex returns a string", () => {
    const sex = en_US.person.sex();

    equal(typeof sex, typeof "");
  });

  await t.test("dob returns a string", () => {
    const dob = en_US.person.dob();

    equal(typeof dob, typeof "");
  });

  await t.test("email returns a string", () => {
    const email = en_US.person.email();

    equal(typeof email, typeof "");
  });

  await t.test("jobTitle returns a string", () => {
    const jobTitle = en_US.person.jobTitle();

    equal(typeof jobTitle, typeof "");
  });

  await t.test("jobArea returns a string", () => {
    const jobArea = en_US.person.jobArea();

    equal(typeof jobArea, typeof "");
  });
});
