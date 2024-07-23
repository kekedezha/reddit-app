import { describe } from "vitest";
import { randomNumGen } from "../src/utils/utilFunctions";

describe("getRandNumGen(min,max) function", () => {
  test("it should return a random number greater than or equal to the min (50)", () => {
    const min = 50;
    const max = 100;
    const randomValue = randomNumGen(min, max);
    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThan(max);
  });

  test("it should return a random number greater than or equal to the min (3)", () => {
    const min = 3;
    const max = 10;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThan(max);
  });

  test("it should return a random number greater than or equal to the min (1)", () => {
    const min = 1;
    const max = 3;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThan(max);
  });
});

describe("getRandNumGen(min,max) function", () => {
  test("it should return a random number less than the max (10)", () => {
    const min = 5;
    const max = 10;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });

  test("it should return a random number less than the max (100)", () => {
    const min = 1;
    const max = 100;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });

  test("it should return a random number less than the max (3)", () => {
    const min = 1;
    const max = 3;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });
});

describe("getRandNumGen(min,max) function", () => {
  test("it should return a random number between the min (20, inclusive) and max (98, exclusive)", () => {
    const min = 20;
    const max = 98;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });

  test("it should return a random number between the min (1, inclusive) and max (50, exclusive)", () => {
    const min = 1;
    const max = 50;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });

  test("it should return a random number between the min (1, inclusive) and max (6, exclusive)", () => {
    const min = 1;
    const max = 6;
    const randomValue = randomNumGen(min, max);

    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
  });
});
