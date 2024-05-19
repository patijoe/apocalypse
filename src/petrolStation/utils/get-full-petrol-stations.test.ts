import { petrolStations } from "./mocks/petrol-stations.mock";
import { requiredBottles } from "./mocks/required-bottles.mock";
import { getFullPetrolStations } from "./index";

describe("calculateBottles function", () => {
  test("should generate an array with the quantity of bottles of each capacity", () => {
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
