import { petrolStations } from "../mocks/petrol-stations.mock";
import { requiredBottles } from "../mocks/required-bottles.mock";
import { getFullPetrolStations } from "./index";

describe("calculateBottles function", () => {
  test("should add a new property totalPrice per petrol station", () => {
    const fullPetrolStations = getFullPetrolStations(
      petrolStations,
      requiredBottles
    );

    const prices = [90.84, 89.74];

    const petrolStationsMock = petrolStations.map((station, i) => ({
      ...station,
      totalPrice: prices[i],
    }));

    expect(fullPetrolStations).toEqual(petrolStationsMock);
  });
});
