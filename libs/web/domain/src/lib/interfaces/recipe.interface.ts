import {Ingradient} from "./ingradient.interface";

export interface Recipe {
  _id?: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingradients: Ingradient[];
}
