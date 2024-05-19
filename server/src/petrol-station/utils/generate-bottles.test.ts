import { Bottle } from "../interfaces";
import { generateBottles } from "./index";

describe("generateBottles function", () => {
  test("should generate an array with prices inside an interval", () => {
    const newBottles = generateBottles();

    getExpectedBottlePrice(newBottles, 3.5, 4, 0);
    getExpectedBottlePrice(newBottles, 9, 10.5, 1);
    getExpectedBottlePrice(newBottles, 14, 15, 2);
    getExpectedBottlePrice(newBottles, 41, 42, 3);
  });
});

const getExpectedBottlePrice = (
  arr: Bottle[],
  min: number,
  max: number,
  index: number
) => {
  expect(arr[index].price).toBeGreaterThanOrEqual(min);
  expect(arr[index].price).toBeLessThanOrEqual(max);
};
