import { assertType, expectTypeOf, expect, test } from "vitest";
import { PersonLocale } from "../../src/locales/person";
import enGBData from "../../src/data/locales/en_GB.json";

const testPerson = new PersonLocale(enGBData.person);

test("Select a random first name", () => {
  const firstName = testPerson.firstName();

  expectTypeOf(firstName).toBeString();
  expect(firstName.length).toBeGreaterThan(0);
});

test("Select a random last name", () => {
  const lastName = testPerson.lastName();

  expectTypeOf(lastName).toBeString();
  expect(lastName.length).toBeGreaterThan(0);
});

test("Select a random full name", () => {
  const fullName = testPerson.fullName();

  expectTypeOf(fullName).toBeString();
  expect(fullName).toMatch(/^\w+ \w+$/gm);
});

test("Select a random sex", () => {
  const sex = testPerson.sex();

  expectTypeOf(sex).toBeString();
  expect(sex).toMatch(/^male$|^female$/gm);
});

test("Select a random date of birth", () => {
  const dob = testPerson.dob();

  expectTypeOf(dob).toBeString();
  expect(dob).toMatch(/^\d{2}\/\d{2}\/\d{4}$/gm);
});

test("Select a random email", () => {
  const email = testPerson.email();

  expectTypeOf(email).toBeString();
  expect(email).toContain("@");
  expect(email.length).toBeGreaterThan(0);
});

test("Select a random job title", () => {
  const jobTitle = testPerson.jobTitle();

  expectTypeOf(jobTitle).toBeString();
  expect(jobTitle.length).toBeGreaterThan(0);
});

test("Select a random job area", () => {
  const jobArea = testPerson.jobArea();

  expectTypeOf(jobArea).toBeString();
  expect(jobArea.length).toBeGreaterThan(0);
});

test("Generate a random username", () => {
  const usernameNormal = testPerson.username();
  const usernameSpecial = testPerson.username({
    specialCharacters: true,
    multiword: true,
  });
  const usernameCustomSpecial = testPerson.username({
    specialCharacters: true,
    multiword: true,
    customSpecialCharacters: "?~",
  });
  const usernameExactLength = testPerson.username({
    specialCharacters: true,
    multiword: true,
    length: 9,
  });

  expectTypeOf(usernameNormal).toBeString();
  expect(usernameNormal.length).toBeGreaterThan(0);

  expectTypeOf(usernameSpecial).toBeString();
  expect(usernameSpecial.length).toBeGreaterThan(0);
  expect(usernameSpecial).toMatch(/[^A-Za-z0-9]/g);

  expectTypeOf(usernameCustomSpecial).toBeString();
  expect(usernameCustomSpecial.length).toBeGreaterThan(0);
  expect(usernameCustomSpecial).toMatch(/[?~]/g);

  expectTypeOf(usernameExactLength).toBeString();
  expect(usernameExactLength).toHaveLength(9);
});
