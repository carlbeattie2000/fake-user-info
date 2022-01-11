/* eslint-disable no-undef */
const entertainment = require("../src/userInformation/entertainment");

test("random move genre", () => {
  expect(entertainment.movieGenre()).toMatch(/[a-z]/i);
});

test("random music genre", () => {
  expect(entertainment.musicGenre()).toMatch(/[a-z]/i);
});

test("random music artist", () => {
  expect(entertainment.artist()).toMatch(/[a-z]/i);
});

test("random performer (actor/actress)", () => {
  expect(entertainment.performer()).toMatch(/[a-z]/i);
});