
import { Nullable } from "@Module/core/types/core";

export interface tasksType {
  id: number;
  status: string;
  title: string;
  user: string; 
  description: string;
  images: {
    image: string;
  }[];
}

export interface InitialValues {
  id: number;
  status: string;
  title: string;
  user: string;
  description: string;
  images: {
    image: string;
  }[];

}



export type tasksInitialValuesType = Partial<Nullable<InitialValues>>;
