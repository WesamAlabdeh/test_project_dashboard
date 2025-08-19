
import { Nullable } from "@Module/core/types/core";

export interface userType {
  id: number;

  username: string;
  email: string;
  phone: string;

}

export interface InitialValues {
  id: number;
  username: string;
  email: string;
  phone: string;


}



export type userInitialValuesType = Partial<Nullable<InitialValues>>;
