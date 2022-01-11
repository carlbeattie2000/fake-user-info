/* eslint-disable no-undef */
const address = require("../src/userInformation/address");

test("random postcode", () => {
  expect(address.postcode()).toMatch(/[a-z]*/);
});

test("random street name", () => {
  expect(address.streetName()).toMatch(/[a-z]*/);
});

test("random door number", () => {
  expect(address.doorNumber()).toBeLessThanOrEqual(250);
});

test("random city", () => {
  expect(address.city()).toMatch(/[a-z]*/i);
});

test("random county", () => {
  expect(address.county()).toMatch(/[a-z]*/i);
});

test("random country", () => {
  expect(address.country()).toMatch(/[a-z]*/i);
});

test("create random address object", () => {
  expect(address.createAddress()).toBeDefined();
});

// only one test for array creations,
// as if one of the above fails the bellow counter part will too, 
//and would be the only reason for failure

test("create array of postcodes", () => {
  expect(address.arrayOfPostcodes(10).length).toEqual(10);
});


