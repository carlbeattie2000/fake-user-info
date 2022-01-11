/* eslint-disable no-undef */
const user = require("../src/userInformation/user");

test("get a random person's name", () => {
  expect(user.personName()).toMatch(/[a-z]*/ig);
});

test("get a random phone number type: home", () => {
  expect(user.phoneNumber("home")).not.toBe(0);
});

test("get a random phone number type: mobile", () => {
  expect(user.phoneNumber("mobile")).not.toBe(0);
});

test("get a random email", () => {
  expect(user.personEmail()).toMatch(/[a-z]*@/ig);
});

test("get a random date of birth", () => {
  expect(user.dob()).toMatch(/[1-9]*\/[1-9]*\/[1-9]*/ig);
});

test("get random job name", () => {
  expect(user.jobName()).toMatch(/[a-z]*/);
});

test("get random job position", () => {
  expect(user.jobPosition()).toMatch(/[a-z]*/);
});

test("get random job industry", () => {
  expect(user.jobIndustry()).toMatch(/[a-z]*/);
});

test("create a random user object", () => {
  expect(user.createUser()).toBeDefined();
});

// only one test for array creations,
// as if one of the above fails the bellow counter part will too, 
//and would be the only reason for failure

test("create array of names", () => {
  expect(user.arrayOfNames(10).length).toEqual(10);
});
