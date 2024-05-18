import { randomIntFromInterval } from "../../utils";
import { pricesRange } from "../data/prices-range.data";
import { PriceRanges } from "../interfaces";
import { Bottle } from "../interfaces/bottle.interface";

export const generateBottles = (): Bottle[] => {
  const bottles = [1, 3, 5, 15];

  return bottles.map((bottle: number): Bottle => {
    return {
      capacity: bottle,
      price: getPetrolPrice(bottle, pricesRange),
    };
  });
};

const getPetrolPrice = (liters: number, prices: PriceRanges): number => {
  const price = prices[liters];

  if (price == null) {
    throw new Error(`liters capacity doesn't exist`);
  }

  return randomIntFromInterval(price.min, price.max);
};
