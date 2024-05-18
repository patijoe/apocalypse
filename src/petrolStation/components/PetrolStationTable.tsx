import React from "react";
import { PetrolStation, RequiredBottle } from "../interfaces";
import { TEXT, headers } from "../utils/constants";
import { getFullPetrolStations } from "../utils";

interface PetrolStationTableProps {
  petrolStations: PetrolStation[];
  requiredBottles: RequiredBottle[];
}

const PetrolStationTable = ({
  petrolStations,
  requiredBottles,
}: PetrolStationTableProps) => {
  const newPetrolStations = getFullPetrolStations(
    petrolStations,
    requiredBottles
  );

  const renderTable = (): any =>
    newPetrolStations.map((station) => {
      return (
        <tr key={station.id}>
          <td>{station.name}</td>
          {station.bottles.map((bot) => (
            <td key={bot.price}>{bot.price} €</td>
          ))}
          <td>{station.totalPrice.toFixed(2)} €</td>
        </tr>
      );
    });

  return (
    <table>
      <caption>{TEXT.PETROL_STATION_TABLE_CAPTION}</caption>
      <tbody>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
        {renderTable()}
      </tbody>
    </table>
  );
};

export { PetrolStationTable };
