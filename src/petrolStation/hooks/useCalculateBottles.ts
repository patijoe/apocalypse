import { useCallback, useEffect, useState } from "react";
import { PetrolStation, RequiredBottle } from "../interfaces";
import { calculateBottles } from "../utils";
import { PETROL_STATIONS_API } from "../../services/services";

const useCalculateBottles = () => {
  const [requiredLiters, setRequiredLiters] = useState("");
  const [requiredBottles, setRequiredBottles] = useState<RequiredBottle[]>([]);
  const [petrolStations, setPetrolStations] = useState([]);
  const [pollingInterval, setPollingInterval] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  const handleLitersValue = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) =>
      setRequiredLiters(ev.target.value),
    [setRequiredLiters]
  );

  const getCalculatedBottles = (petrolStations: PetrolStation[]) => {
    const bottlesNedeed = calculateBottles(
      Number(requiredLiters),
      petrolStations
    );
    setRequiredBottles(bottlesNedeed);
  };

  const handleCalculateBottles = async () => {
    try {
      const getPetrolStations = async (): Promise<PetrolStation[]> => {
        const newPetrolStations = await fetch(PETROL_STATIONS_API).then(
          (response) => response.json()
        );
        setPetrolStations(newPetrolStations);
        return newPetrolStations;
      };

      const newPetrolStations = await getPetrolStations();
      getCalculatedBottles(newPetrolStations);

      if (pollingInterval) {
        clearInterval(pollingInterval);
      }

      const interval = setInterval(() => {
        getPetrolStations();
      }, 10 * 1000);

      setPollingInterval(interval);
    } catch (e) {
      return console.log(e || "ha habido un error en la request");
    }
  };

  return {
    requiredBottles,
    requiredLiters,
    handleLitersValue,
    handleCalculateBottles,
    petrolStations,
  };
};

export { useCalculateBottles };
