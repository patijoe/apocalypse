import { render, screen, waitFor } from "@testing-library/react";
import { PetrolStationPage } from "./PetrolStationPage";

import userEvent from "@testing-library/user-event";
import { petrolStations } from "../mocks/petrol-stations.mock";
import { TEXT } from "../utils/constants";

describe(`A user in PetrolStationPage view`, () => {
  test(`then should see an input and a search button`, async () => {
    const { input, searchButton, description } = initTest();
    expect(description).toBeVisible();
    expect(input).toBeVisible();
    expect(searchButton).toBeVisible();
  });

  describe("after type the liters needed and click on search button", () => {
    test(`then should be a list with quantity bottles of each capacity and 
    petrol stations table with the total price`, async () => {
      const { input, searchButton } = initTest();

      userEvent.type(input, "15");
      userEvent.click(searchButton);

      const bottleXL = await screen.findByTestId("15LitersBottle");
      expect(bottleXL).toBeVisible();
      const bottleL = await screen.findByTestId("5LitersBottle");
      expect(bottleL).toBeVisible();
      const bottleM = await screen.findByTestId("3LitersBottle");
      expect(bottleM).toBeVisible();
      const bottleS = await screen.findByTestId("1LitersBottle");
      expect(bottleS).toBeVisible();
      const resultTable = screen.getByTestId("resultTable");
      expect(resultTable).toBeVisible();
    });
  });
});

const initTest = () => {
  render(<PetrolStationPage petrolStations={petrolStations} />);

  const input = screen.getByTestId("searchInput");
  const searchButton = screen.getByRole("button", {
    name: TEXT.SEARCH_BUTTON,
  });
  const description = screen.getByText(TEXT.INPUT_SEARCH_DESCRIPTION);
  return { input, searchButton, description };
};
