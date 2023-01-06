const { equal, match } = require("assert");
const test = require("node:test");

const en_GB = require("../../src/locales/en_GB");

test("en_GB location test", async (t) => {

  await t.test("Location city should return a string", () => {
    const city = en_GB.location.city();

    equal(typeof(city), typeof(""))
  })

  await t.test("Location street should return a string", () => {
    const street = en_GB.location.street();

    equal(typeof(street), typeof(""))
  })

  await t.test("Location county should return a string", () => {
    const county = en_GB.location.county();

    equal(typeof(county), typeof(""))
  })

  await t.test("Location postcode should return a string", () => {
    const postcode = en_GB.location.postcode();

    equal(typeof(postcode), typeof(""));
  })

  await t.test("Location building number should return a int", () => {
    const buildingNumber = en_GB.location.buildingNumber();

    equal(typeof(buildingNumber), typeof(0))
  })

  await t.test("Location local country should return a string", () => {
    const localCountry = en_GB.location.localCountry();

    equal(typeof(localCountry), typeof(""));
  })

  await t.test("Location street address should return a string", () => {
    const streetAddress = en_GB.location.streetAddress();

    equal(typeof(streetAddress), typeof(""))
  })

  await t.test("Location full address should return a JSON object", () => {
    const fullAddress = en_GB.location.fullAddress();

    equal(typeof(fullAddress), typeof({}))
  })

})

test("en_GB phone test", async (t) => {

  await t.test("Phone mobile should return a string of length 11", () => {
    const mobile = en_GB.phone.mobile();

    equal(typeof(mobile), typeof(""));
    equal(mobile.length, 11)
  })

  await t.test("Phone landline should return a string of length 11", () => {
    const landline = en_GB.phone.mobile();

    equal(typeof(landline), typeof(""));
    equal(landline.length, 11)
  })

})

test("en_GB vehicle test", async (t) => {

  await t.test("Vehicle plate should return a string of length 8", () => {
    const plate = en_GB.vehicle.plate();

    equal(typeof(plate), typeof(""));
    equal(plate.length, 8);
  })

  await t.test("Vehicle vin should return a string of length 17", () => {
    const vin = en_GB.vehicle.vin();

    equal(typeof(vin), typeof(""))
    equal(vin.length, 17);
  })

  await t.test("Vehicle tax class should return a string", () => {
    const taxClass = en_GB.vehicle.taxClass();

    equal(typeof(taxClass), typeof(""));
  })
})