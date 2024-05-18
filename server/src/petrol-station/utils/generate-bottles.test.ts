import { Bottle } from "../interfaces";
import { generateBottles } from "./generate-bottles";

describe("generateBottles function", () => {
  it("should generate an array with prices inside an interval", () => {
    const newBottles = generateBottles();

    getExpectedBottlePrice(newBottles, 3.5, 4);
    getExpectedBottlePrice(newBottles, 9, 10.5);
    getExpectedBottlePrice(newBottles, 14, 15);
    getExpectedBottlePrice(newBottles, 41, 42);
  });
});

const getExpectedBottlePrice = (arr: Bottle[], min: number, max: number) => {
  expect(arr[0].price).toBeGreaterThanOrEqual(min);
  expect(arr[0].price).toBeLessThanOrEqual(max);
};
