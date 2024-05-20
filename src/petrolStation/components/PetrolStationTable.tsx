import React from "react";
import styled from "styled-components";
import { PetrolStation, RequiredBottle } from "../interfaces";
import {
  TEXT,
  headers,
  headerName,
  headerTotalPrice,
} from "../utils/constants";
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
        <Row key={station.id}>
          <CellName>{station.name}</CellName>
          {station.bottles.map((bot) => (
            <Cell key={bot.price}>{bot.price} €</Cell>
          ))}
          <CellTotalPrice>{station.totalPrice.toFixed(2)} €</CellTotalPrice>
        </Row>
      );
    });

  return (
    <Table data-testid="resultTable">
      <Caption>{TEXT.PETROL_STATION_TABLE_CAPTION}</Caption>
      <BodyContainer>
        <Row>
          <HeaderName>{headerName}</HeaderName>
          {headers.map((header) => (
            <Header key={header}>{header}</Header>
          ))}
          <HeaderTotalPrice>{headerTotalPrice}</HeaderTotalPrice>
        </Row>
        {renderTable()}
      </BodyContainer>
    </Table>
  );
};

export { PetrolStationTable };

const Table = styled.table`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 10px;
  width: 100%;

  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const Caption = styled.caption`
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const BodyContainer = styled.tbody`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Row = styled.tr`
  border-bottom: 1px solid pink;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 4px;
  text-align: center;
`;

const HeaderName = styled.th`
  width: 120px;

  @media (max-width: 750px) {
    width: 90px;
  }
`;

const CellName = styled.td`
  width: 120px;
  font-weight: bold;

  @media (max-width: 750px) {
    width: 90px;
  }
`;

const HeaderTotalPrice = styled.th`
  width: 100px;

  @media (max-width: 750px) {
    width: 80px;
  }
`;

const CellTotalPrice = styled.td`
  width: 100px;
  font-weight: bold;

  @media (max-width: 750px) {
    width: 80px;
  }
`;

const Header = styled.th`
  width: 50px;

  @media (max-width: 750px) {
    width: 45px;
  }
  @media (max-width: 630px) {
    display: none;
  }
`;

const Cell = styled.td`
  width: 50px;

  @media (max-width: 750px) {
    width: 45px;
  }
  @media (max-width: 630px) {
    display: none;
  }
`;
