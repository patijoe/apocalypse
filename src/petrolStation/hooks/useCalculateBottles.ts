import { useCallback, useState } from "react";
import { PetrolStation, RequiredBottle } from "../interfaces";
import { calculateBottles } from "../utils";

const useCalculateBottles = (petrolStations: PetrolStation[]) => {
  const [requiredLiters, setRequiredLiters] = useState("");
  const [requiredBottles, setRequiredBottles] = useState<RequiredBottle[]>([]);

  const handleLitersValue = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) =>
      setRequiredLiters(ev.target.value),
    [setRequiredLiters]
  );

  const handleCalculateBottles = useCallback(() => {
    const bottlesNedeed = calculateBottles(
      Number(requiredLiters),
      petrolStations
    );
    setRequiredBottles(bottlesNedeed);
  }, [requiredLiters, petrolStations]);

  return {
    requiredBottles,
    requiredLiters,
    handleLitersValue,
    handleCalculateBottles,
  };
};

export { useCalculateBottles };
