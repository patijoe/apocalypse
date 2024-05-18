import { PetrolStation } from "./interfaces";
import {
  getPetrolStationList,
  updatePetrolStation,
} from "./petrol-station.repository";
import { generateBottles } from "./utils";

export const initPetrolStationsUpdater = () =>
  setInterval(refreshPetrolStations, 30 * 1000);

export const refreshPetrolStations = (): PetrolStation[] => {
  const petrolStations = getPetrolStationList();

  petrolStations.forEach((station: PetrolStation) => {
    station.bottles = generateBottles();
    updatePetrolStation(station);
  });

  return petrolStations;
};
