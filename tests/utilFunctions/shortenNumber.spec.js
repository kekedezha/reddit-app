import { describe } from "vitest";
import { shortenNumber } from "../../src/utils/utilFunctions";

describe("shortenNumber function", () => {
  test.each([
    { a: 0, b: 0, expected: "0" },
    { a: 12, b: 1, expected: "12.0" },
    { a: 1234, b: 1, expected: "1.2k" },
    { a: 100000000, b: 1, expected: "100M" },
    { a: 299792458, b: 1, expected: "299.8M" },
    { a: 759878, b: 1, expected: "759.9k" },
    { a: 759878, b: 0, expected: "760k" },
    { a: 123, b: 0, expected: "123" },
    { a: 123.456, b: 1, expected: "123.5" },
    { a: 123.456, b: 2, expected: "123.46" },
    { a: 123.456789, b: 4, expected: "123.4568" },
  ])("shorten $a to $b digits -> $expected", ({ a, b, expected }) => {
    const generatedValue = shortenNumber(a, b);
    expect(generatedValue).toBe(expected);
  });
});
