import React from "react";
import styled from "styled-components";
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
    <MainContainer>
      <SearchContainer>
        <Description>
          <p>{TEXT.INPUT_SEARCH_DESCRIPTION}</p>
        </Description>
        <InputContainer>
          <Input
            data-testid="searchInput"
            name="search"
            onChange={handleLitersValue}
            placeholder={TEXT.INPUT_SEARCH_PLACEHOLDER}
            type="text"
            value={`${requiredLiters}`}
          />
          <Button onClick={handleCalculateBottles}>{TEXT.SEARCH_BUTTON}</Button>
        </InputContainer>
      </SearchContainer>
      {Object.keys(requiredBottles).length !== 0 && (
        <PetrolStationResult
          requiredBottles={requiredBottles}
          petrolStations={petrolStations}
        />
      )}
    </MainContainer>
  );
};

export { PetrolStationPage };

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 50px;
  padding: 30px;
  height: 100vh;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 30px;

  @media (max-width: 550px) {
    margin-bottom: 0;
    width: 100%;
  }
`;

const Description = styled.div`
  width: 90%;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
  width: 80%;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 20px;
  width: 70%;

  @media (max-width: 550px) {
    margin-bottom: 8px;
    width: 80%;
  }
`;

const Button = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  height: 30px;
  width: 25%;

  @media (max-width: 550px) {
    font-size: 12px;
    width: 35%;
  }
`;
