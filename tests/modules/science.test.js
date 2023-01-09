const { equal } = require('assert');
const test = require('node:test');

const impostor = require('../../src/impostor');

const impostorInstance = new impostor({ countryCode: 'en_GB' });

test('internet tests', async (t) => {
  const scienceModule = impostorInstance.science;

  await t.test('asteroid should return a string', () => {
    const asteroid = scienceModule.asteroid();

    equal(typeof(asteroid), typeof(''));
  });

  await t.test('biologicalTerm should return a string', () => {
    const biologicalTerm = scienceModule.biologicalTerm();

    equal(typeof(biologicalTerm), typeof(''));
  });

  await t.test('planet should return a string', () => {
    const planet = scienceModule.planet();

    equal(typeof(planet), typeof(''));
  });

  await t.test('chemicalElement should return a string', () => {
    const chemicalElement = scienceModule.chemicalElement();

    equal(typeof(chemicalElement), typeof(''));
  });
});