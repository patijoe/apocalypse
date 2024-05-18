import { PetrolStation, RequiredBottle } from "../interfaces";

export const calculateBottles = (
  requiredLiters: number,
  petrolStations: PetrolStation[]
): RequiredBottle[] => {
  let remainingLiters = requiredLiters;
  const bottlesCapacity = petrolStations[0].bottles.map((bot) => bot.capacity);
  const requiredBottles: RequiredBottle[] = bottlesCapacity
    .sort(sortDescending)
    .map((capacity) => {
      const quantity = Math.floor(remainingLiters / capacity);
      remainingLiters = remainingLiters - quantity * capacity;
      return { capacity, quantity };
    });

  return requiredBottles;
};

const sortDescending = (a: number, b: number) => b - a;
