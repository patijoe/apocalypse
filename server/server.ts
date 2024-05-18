import express, { Express } from "express";
import { initRoutes } from "./src/routes";
import { initPetrolStationsUpdater } from "./src/petrol-station/petrol-station-price-updater.service";
var cors = require("cors");

export const app: Express = express();
const port = 3001;

app.use(cors());

initRoutes(app);
initPetrolStationsUpdater();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
