import { petrolStationsMock } from "../mocks/petrol-stations.mock";
import { calculateBottles } from "./index";

describe("calculateBottles function", () => {
  test("should generate an array with the quantity of bottles of each capacity", () => {
    const requiredBottles_01 = calculateBottles(15, petrolStationsMock);
    expect(requiredBottles_01).toMatchSnapshot([
      { capacity: 15, quantity: 1 },
      { capacity: 5, quantity: 0 },
      { capacity: 3, quantity: 0 },
      { capacity: 1, quantity: 0 },
    ]);
    const requiredBottles_02 = calculateBottles(98, petrolStationsMock);
    expect(requiredBottles_02).toEqual([
      { capacity: 15, quantity: 6 },
      { capacity: 5, quantity: 1 },
      { capacity: 3, quantity: 1 },
      { capacity: 1, quantity: 0 },
    ]);
  });
});
