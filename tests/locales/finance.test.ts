import { assertType, expectTypeOf, expect, test } from "vitest";
import { FinanceLocale } from "../../src/locales/finance";
import enGBData from "../../src/data/locales/en_GB.json";
import { TransactionObject } from "../../src/types/locales";

const testFinance = new FinanceLocale(enGBData.finance);

test("select random bank from banks list", () => {
  const bank = testFinance.bank();

  expectTypeOf(bank).toBeString();
  expect(bank.length).toBeGreaterThan(0);
});

test("generates random card number", () => {
  const cardNumber = testFinance.cardNumber();
  const minCardNumber = 2000000000000000;

  expectTypeOf(cardNumber).toBeNumber();
  expect(cardNumber).toBeGreaterThan(minCardNumber);
});

test("generates random card cvv", () => {
  const cvv = testFinance.cvv();
  const minCvv = 100;

  expectTypeOf(cvv).toBeNumber();
  expect(cvv).toBeGreaterThan(minCvv);
});

test("generate random expiry date given min and max year", () => {
  const minYear = 2022;
  const maxYear = 2028;

  const expiryDateObject = testFinance.expiryDateObject({
    min: minYear,
    max: maxYear,
  });
  const expiryDateString = testFinance.expiryDateString({
    min: minYear,
    max: maxYear,
  });

  expect(expiryDateObject.getFullYear()).toBeLessThanOrEqual(maxYear);
  expect(expiryDateObject.getFullYear()).toBeGreaterThanOrEqual(minYear);

  expectTypeOf(expiryDateString).toBeString();
  expect(expiryDateString.length).toBeGreaterThan(0);
  expect(expiryDateString).toMatch(/\d{2}\/\d{2}/gm);
});

test("generate random sort code", () => {
  const sortCode = testFinance.sortCode();

  expectTypeOf(sortCode).toBeNumber();
});

test("generate random account number", () => {
  const accountNumber = testFinance.accountNumber();

  expectTypeOf(accountNumber).toBeNumber();
});

test("generate random currency value string", () => {
  const value = testFinance.currencyValueString({ max: 500 });

  expectTypeOf(value).toBeString();
  expect(value).contains("£");
});

test("generate random balance", () => {
  const balance = testFinance.balance(500);

  expectTypeOf(balance).toBeNumber();
  expect(balance).toBeGreaterThan(0);
  expect(balance).toBeLessThanOrEqual(500);
});

test("generate random transaction object", () => {
  const transactionObject: TransactionObject = testFinance.transactionObject();

  expectTypeOf(transactionObject).toMatchTypeOf<TransactionObject>();
  expect(
    transactionObject.newBalance > 0 || transactionObject.oldBalance > 0,
  ).toBeTruthy();
});

test("generate random transaction string", () => {
  const transactionString = testFinance.transactionString();

  expectTypeOf(transactionString).toBeString();
  expect(transactionString.length).toBeGreaterThan(0);
});

test("generate random list of transaction objects", () => {
  const transactionObjects = testFinance.transactionObjects();

  expectTypeOf(transactionObjects).toMatchTypeOf<TransactionObject[]>();
  expect(transactionObjects.length).toBeGreaterThan(0);
});

test("generate random list of transaction string", () => {
  const transactionStrings = testFinance.transactionStrings();

  expectTypeOf(transactionStrings).toMatchTypeOf<string[]>();
  expect(transactionStrings.length).toBeGreaterThan(0);
});
