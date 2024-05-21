import { petrolStationsMock } from "../mocks/petrol-stations.mock";
import { requiredBottlesMock } from "../mocks/required-bottles.mock";
import { getFullPetrolStations } from "./index";

describe("calculateBottles function", () => {
  test("should add a new property totalPrice per petrol station", () => {
    const fullPetrolStations = getFullPetrolStations(
      petrolStationsMock,
      requiredBottlesMock
    );

    const prices = [90.84, 89.74];

    const petrolStationsExpected = petrolStationsMock.map((station, i) => ({
      ...station,
      totalPrice: prices[i],
    }));

    expect(fullPetrolStations).toEqual(petrolStationsExpected);
  });
});
