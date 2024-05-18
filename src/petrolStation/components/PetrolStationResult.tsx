import React from "react";
import { PetrolStation, RequiredBottle } from "../interfaces";
import { PetrolStationTable } from "./PetrolStationTable";

interface PetrolStationResultProps {
  requiredBottles: RequiredBottle[];
  petrolStations: PetrolStation[];
}

const PetrolStationResult = ({
  requiredBottles,
  petrolStations,
}: PetrolStationResultProps) => {
  return (
    <>
      <p>Debes comprar:</p>
      <ul>
        {requiredBottles.map((item) => (
          <li key={item.capacity}>
            {item.capacity} liters bottle: {item.quantity} units
          </li>
        ))}
      </ul>
      <PetrolStationTable
        petrolStations={petrolStations}
        requiredBottles={requiredBottles}
      />
    </>
  );
};

export { PetrolStationResult };
