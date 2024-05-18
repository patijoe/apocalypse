import React from "react";
import { PetrolStation } from "../interfaces";
import { TEXT } from "../utils/constants";
import { useCalculateBottles } from "../hooks/useCalculateBottles";
import { PetrolStationResult } from "./PetrolStationResult";

interface PetrolStationTableProps {
  petrolStations: PetrolStation[];
}

const PetrolStationPage = ({ petrolStations }: PetrolStationTableProps) => {
  const {
    requiredBottles,
    requiredLiters,
    handleLitersValue,
    handleCalculateBottles,
  } = useCalculateBottles(petrolStations);

  return (
    <>
      <p>{TEXT.INPUT_SEARCH_DESCRIPTION}</p>
      <input
        id="search"
        name="search"
        onChange={handleLitersValue}
        placeholder={TEXT.INPUT_SEARCH_PLACEHOLDER}
        type="text"
        value={`${requiredLiters}`}
      />
      <button onClick={handleCalculateBottles}>{TEXT.SEARCH_BUTTON}</button>
      {Object.keys(requiredBottles).length !== 0 && (
        <PetrolStationResult
          requiredBottles={requiredBottles}
          petrolStations={petrolStations}
        />
      )}
    </>
  );
};

export { PetrolStationPage };
