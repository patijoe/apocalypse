import { PetrolStation } from "../interfaces";
import { generateBottles } from "../utils";

export const petrolStationsData: PetrolStation[] = [
  {
    id: 1,
    name: "petrol_01",
    bottles: generateBottles(),
  },
  {
    id: 2,
    name: "petrol_02",
    bottles: generateBottles(),
  },
  {
    id: 3,
    name: "petrol_03",
    bottles: generateBottles(),
  },
];
