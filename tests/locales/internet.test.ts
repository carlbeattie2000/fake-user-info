import { assertType, expectTypeOf, expect, test } from "vitest";
import { InternetLocale } from "../../src/locales/internet";
import enGBData from "../../src/data/locales/en_GB.json";

const testInternet = new InternetLocale(enGBData.internet);

test("Should generate a random IPV4", () => {
  const IPV4 = testInternet.IPV4();

  expectTypeOf(IPV4).toBeString();
  expect(IPV4).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g);
});

test("Should generate a random IPV6", () => {
  const IPV6 = testInternet.IPV6();

  expectTypeOf(IPV6).toBeString();
  expect(IPV6).toMatch(/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/gm);
});

test("Should generate a random domain", () => {
  const domain = testInternet.domain();

  expectTypeOf(domain).toBeString();
  expect(domain.length).toBeGreaterThan(0);
});

test("Should generate a random URL", () => {
  const url = testInternet.url();

  expectTypeOf(url).toBeString();
  expect(url).toMatch(/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/gm);
});

test("Should generate a random userAgent", () => {
  const userAgent = testInternet.userAgent();

  expectTypeOf(userAgent).toBeString();
  expect(userAgent.length).toBeGreaterThan(0);
});

test("Should generate a random HTTP method", () => {
  const httpMethod = testInternet.http();

  expectTypeOf(httpMethod).toBeString();
  expect(httpMethod.length).toBeGreaterThan(0);
});

test("Should generate a random PORT", () => {
  const port = testInternet.port();

  expectTypeOf(port).toBeNumber();
  expect(port).toBeGreaterThan(0);
});

test("Should generate a random ISP", () => {
  const isp = testInternet.isp();

  expectTypeOf(isp).toBeString();
  expect(isp.length).toBeGreaterThan(0);
});
