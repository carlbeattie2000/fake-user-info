const { equal, match } = require('assert');
const test = require('node:test');

const fr = require('../../src/locales/fr');

test('fr location test', async (t) => {

  await t.test('Location city should return a string', () => {
    const city = fr.location.city();

    equal(typeof(city), typeof(''));
  });

  await t.test('Location street should return a string', () => {
    const street = fr.location.street();

    equal(typeof(street), typeof(''));
  });

  await t.test('Location department should return a string', () => {
    const department = fr.location.department();

    equal(typeof(department), typeof(''));
  });

  await t.test('Location postcode should return a string', () => {
    const postcode = fr.location.postcode();

    equal(typeof(postcode), typeof(''));
  });

  await t.test('Location building number should return a int', () => {
    const buildingNumber = fr.location.buildingNumber();

    equal(typeof(buildingNumber), typeof(0));
  });

  await t.test('Location local country should return a string', () => {
    const localCountry = fr.location.localCountry();

    equal(typeof(localCountry), typeof(''));
  });

  await t.test('Location street address should return a string', () => {
    const streetAddress = fr.location.streetAddress();

    equal(typeof(streetAddress), typeof(''));
  });

  await t.test('Location full address should return a JSON object', () => {
    const fullAddress = fr.location.fullAddress();

    equal(typeof(fullAddress), typeof({}));
  });

});

test('fr phone test', async (t) => {

  await t.test('Phone mobile should return a string of length 14', () => {
    const mobile = fr.phone.mobile();

    equal(typeof(mobile), typeof(''));
    equal(mobile.length, 14);
  });

  await t.test('Phone landline should return a string of length 14', () => {
    const landline = fr.phone.mobile();

    equal(typeof(landline), typeof(''));
    equal(landline.length, 14);
  });

});

test('fr vehicle test', async (t) => {

  await t.test('Vehicle plate should return a string', () => {
    const plate = fr.vehicle.plate();

    equal(typeof(plate), typeof(''));
  });

  await t.test('Vehicle vin should return a string of length 17', () => {
    const vin = fr.vehicle.vin();

    equal(typeof(vin), typeof(''));
    equal(vin.length, 17);
  });
});