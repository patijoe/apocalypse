import { Express, Request, Response } from "express";
import { petrolStationRouter } from "./petrol-station/petrol-station.router";

export const initRoutes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.use("/petrol-stations", petrolStationRouter);
};
