/* eslint-disable no-undef */
const internet = require("../src/sensitiveInformation/internet");

test("random IPV4", () => {
  expect(internet.IPV4()).toMatch(/\d*.\d*.\d*.\d*/i);
});

test("random IPV6", () => {
  expect(internet.IPV6()).toMatch(/\w{4}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}/i);
});

test("random domain name", () => {
  expect(internet.domainName()).toMatch(/[a-z].[a-z]/);
});

test("random domain url", () => {
  expect(internet.URL()).toMatch(/https:\/\/[a-z]*/i);
});

test("random user agent", () => {
  expect(internet.userAgent()).toBeDefined();
});

test("random password", () => {
  expect(internet.password()).toMatch(/[a-z]*/i);
});

test("random protocol", () => {
  expect(internet.protocol()).toMatch(/[a-z]*/i);
});

test("random http method", () => {
  expect(internet.httpMethod()).toMatch(/[a-z]*/i);
});

test("random port", () => {
  expect(internet.port()).toBeLessThan(49151);
});

// array test

test("random array of IPV4's", () => {
  expect(internet.arrayIPV4()).toBeDefined();
});