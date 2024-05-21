import React from "react";
import styled from "styled-components";
import { PetrolStation } from "../interfaces";
import { TEXT } from "../utils/constants";
import { useCalculateBottles } from "../hooks/useCalculateBottles";
import { PetrolStationResult } from "./PetrolStationResult";

const PetrolStationPage = () => {
  const {
    requiredBottles,
    requiredLiters,
    handleLitersValue,
    handleCalculateBottles,
    petrolStations,
  } = useCalculateBottles();

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
      <FooterContainer>
        <FooterText>Made with &#10084;&#65039;</FooterText>
      </FooterContainer>
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
  justify-content: center;
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
  margin-right: 30px;
  max-width: 300px;
  padding-left: 5px;
  width: 70%;

  @media (max-width: 550px) {
    margin-bottom: 8px;
    margin-right: 0;
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

const FooterContainer = styled.div`
  border-top: 1px solid pink;
  position: fixed;
  bottom: 0;
  width: 80%;
  background-color: white;
`;

const FooterText = styled.p`
  font-size: 12px;
`;
