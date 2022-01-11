/* eslint-disable no-undef */
const landmarks = require("../src/userInformation/landmarks");

test("random landmark from around the world", () => {
  expect(landmarks.landmark()).toBeDefined();
});