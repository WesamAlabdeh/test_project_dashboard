import { User } from '@Module/core/types/auth';
import { Nullable } from '@Module/core/types/core';

export interface ILogin {
  token: string;
  admin: User;
}

export interface InitialValues {
  username: string;
  password: string;
}

export type InitialValuesLogin = Partial<Nullable<InitialValues>>;
