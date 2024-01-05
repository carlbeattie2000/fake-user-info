import { assertType, expectTypeOf, expect, test } from "vitest";
import { Science } from "../../src/modules/science";

const testScience = new Science();

test("Should select a random asteroid", () => {
  const asteroid = testScience.asteroid();

  expectTypeOf(asteroid).toBeString();
  expect(asteroid.length).toBeGreaterThan(0);
});

test("Should select a random biological term", () => {
  const biologicalTerm = testScience.biologicalTerm();

  expectTypeOf(biologicalTerm).toBeString();
  expect(biologicalTerm.length).toBeGreaterThan(0);
});

test("Should select a random planet", () => {
  const planet = testScience.planet();

  expectTypeOf(planet).toBeString();
  expect(planet.length).toBeGreaterThan(0);
});

test("Should select a random chemical element", () => {
  const chemicalElement = testScience.chemicalElement();

  expectTypeOf(chemicalElement).toBeString();
  expect(chemicalElement.length).toBeGreaterThan(0);
});
