import React, { useState, useEffect } from "react";
import "./App.css";
import { PETROL_STATIONS_API } from "./services/services";
import { PetrolStationPage } from "./petrolStation/components/PetrolStationPage";

const App = () => {
  const [petrolStations, setPetrolStations] = useState([]);

  useEffect(() => {
    const getPetrolStations = () => {
      fetch(PETROL_STATIONS_API)
        .then((response) => response.json())
        .then((response) => setPetrolStations(response));
    };

    getPetrolStations();

    const interval = setInterval(() => {
      getPetrolStations();
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <PetrolStationPage petrolStations={petrolStations} />
    </div>
  );
};

export default App;
