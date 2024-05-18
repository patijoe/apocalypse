import { PetrolStation } from "./interfaces";
import { petrolStationsData } from "./data/petrol-station.data";

export const getPetrolStationList = (): PetrolStation[] => {
  return [...petrolStationsData];
};

export const updatePetrolStation = (
  petrolStation: PetrolStation
): PetrolStation => {
  const updatedPetrolStationIndex = petrolStationsData.findIndex(
    (station: PetrolStation) => station.id === petrolStation.id
  );
  petrolStationsData[updatedPetrolStationIndex] = petrolStation;
  return petrolStationsData[updatedPetrolStationIndex];
};
