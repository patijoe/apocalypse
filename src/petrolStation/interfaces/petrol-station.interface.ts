import { Bottle } from "./bottle.interface";

export interface PetrolStation {
  id: number;
  name: string;
  bottles: Bottle[];
}
