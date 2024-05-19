import React from "react";
import { PetrolStation, RequiredBottle } from "../interfaces";
import { PetrolStationTable } from "./PetrolStationTable";
import { TEXT } from "../utils/constants";

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
          <li key={item.capacity} data-testid={`${item.capacity}LitersBottle`}>
            {item.capacity} liters bottle: {item.quantity}{" "}
            {item.quantity === 1 ? TEXT.UNIT : TEXT.UNITS}
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
