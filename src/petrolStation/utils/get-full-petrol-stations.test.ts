import { petrolStations } from "../mocks/petrol-stations.mock";
import { requiredBottles } from "../mocks/required-bottles.mock";
import { getFullPetrolStations } from "./index";

describe("calculateBottles function", () => {
  test("should add a new property totalPrice per petrol station", () => {
    const fullPetrolStations = getFullPetrolStations(
      petrolStations,
      requiredBottles
    );

    const newPetrolStations = [...petrolStations];
    newPetrolStations[0].totalPrice = 90.84;
    newPetrolStations[1].totalPrice = 89.74;

    expect(fullPetrolStations).toEqual(
      expect.arrayContaining(newPetrolStations)
    );
  });
});
