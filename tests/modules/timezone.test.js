const { strictEqual, match } = require('assert');
const test = require('node:test');

const impostor = require('../../src/impostor');

const impostorInstance = new impostor({ countryCode: 'en_GB' });

test('timezone tests', async (t) => {
  await t.test('timezone returns a string', () => {
    const timeZoneString = impostorInstance.timezones.timezone();

    strictEqual(typeof(timeZoneString), typeof(''));
  });

  await t.test('dateTimeString return a date-time string for a random timezone if no parameters have been passed', () => {
    const dateTimeString = impostorInstance.timezones.dateTimeString();

    strictEqual(typeof(dateTimeString), typeof(''));
  });

  await t.test('dateTimeString returns a date-time string for a timezone that has been passed to the function', () => {
    const dateTimeString = impostorInstance.timezones.dateTimeString();

    match(dateTimeString, /\d+\/\d+\/\d+, \d+:\d+:\d+/gm);
  });
});