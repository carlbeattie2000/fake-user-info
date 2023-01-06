const { equal, match } = require("assert");
const test = require("node:test");

const impostor = require("../../src/impostor");

const impostorInstance = new impostor({ countryCode: "en_GB" });

test("internet tests", async (t) => {
  const internetModule = impostorInstance.internet;

  t.beforeEach((t) => t.diagnostic(`about to run ${t.name}`));

  await t.test("IPV4 should return a string", () => {
    const IPV4 = internetModule.IPV4();

    equal(typeof(IPV4), typeof(""));
  })

  await t.test("IPV6 should return a string", () => {
    const IPV6 = internetModule.IPV6();

    equal(typeof(IPV6), typeof(""));
  })

  await t.test("IPV6 length should be 39", () => {
    const IPV6 = internetModule.IPV6();

    equal(IPV6.length, 39);
  })

  await t.test("domain should return a string", () => {
    const domain = internetModule.domain();

    equal(typeof(domain), typeof(""));
  })

  await t.test("domain should include a valid domain extension", () => {
    const domain = internetModule.domain();

    match(domain, /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/);
  })

  await t.test("URL should return a string", () => {
    const URL = internetModule.URL();

    equal(typeof(URL), typeof(""));
  })

  await t.test("URL should be a valid HTTPS url", () => {
    const URL = internetModule.URL();
    
    match(URL, /^https:\/\/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/);
  })

  await t.test("userAgent should return a string", () => {
    const userAgent = internetModule.userAgent();

    equal(typeof(userAgent), typeof(""));
  })

  await t.test("httpMethod should return a string", () => {
    const httpMethod = internetModule.httpMethod();

    equal(typeof(httpMethod), typeof(""));
  })

  await t.test("port should return a int", () => {
    const port = internetModule.port();

    equal(typeof(port), typeof(0));
  })

  await t.test("port shouldn't be less than 0 or greater than 49151", () => {
    const port = internetModule.port();

    equal(port < 0, false);
    equal(port > 49151, false)
  })
})