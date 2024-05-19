import { PetrolStation, RequiredBottle } from "../interfaces";

interface FullPetrolStation extends PetrolStation {
  totalPrice: number;
}

export const getFullPetrolStations = (
  petrolStations: PetrolStation[],
  requiredBottles: RequiredBottle[]
): FullPetrolStation[] => {
  return petrolStations.map((station) => {
    let totalPrice = 0;

    station.bottles.forEach((bottle) => {
      const requiredBottle = requiredBottles.find(
        (el) => bottle.capacity === el.capacity
      ) as RequiredBottle;

      const bottleResult: number = requiredBottle.quantity * bottle.price;

      totalPrice = totalPrice + bottleResult;
    });

    const newStation = { ...station, totalPrice };
    return newStation;
  });
};
