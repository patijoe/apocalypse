import { Router, Request, Response } from "express";
import { PetrolStation } from "./interfaces";
import { getPetrolStationList } from "./petrol-station.repository";

const router = Router();

router.get("/", (req: Request, res: Response<PetrolStation[]>): void => {
  res.send(getPetrolStationList());
});

export const petrolStationRouter = router;
