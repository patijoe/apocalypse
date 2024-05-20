import React from "react";
import styled from "styled-components";
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
    <ResultContainer petrolStations={petrolStations}>
      <Description>
        <Text>{TEXT.CAPACITY_RESULT}</Text>
      </Description>
      <ListContainer>
        <ul>
          {requiredBottles.map((item) => (
            <Item
              key={item.capacity}
              data-testid={`${item.capacity}LitersBottle`}
            >
              {item.capacity} liters bottle: {item.quantity}{" "}
              {item.quantity === 1 ? TEXT.UNIT : TEXT.UNITS}
            </Item>
          ))}
        </ul>
      </ListContainer>
      <PetrolStationTable
        petrolStations={petrolStations}
        requiredBottles={requiredBottles}
      />
    </ResultContainer>
  );
};

export { PetrolStationResult };

const ResultContainer = styled.div<{ petrolStations: PetrolStation[] }>`
  align-items: center;
  border: 2px solid pink;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 0 10px;
  padding: 30px;
  width: 70%;
`;

const Description = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const Text = styled.div`
  margin: 0;
`;

const ListContainer = styled.div`
  margin: 0;

  @media (max-width: 550px) {
    padding-left: 0;
  }
`;

const List = styled.ul`
  @media (max-width: 550px) {
    padding: 0;
  }
`;

const Item = styled.li`
  margin: 0;
`;
