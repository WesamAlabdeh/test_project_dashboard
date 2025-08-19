import { ReactElement } from 'react';
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from '../enums/Abilities';

export type PERMISSION = {
  abilities?: ABILITIES_ENUM;
  abilities_value?: ABILITIES_VALUES_ENUM;
};

export type BaseRouteType = {
  icon: JSX.Element;
  name: string;
  path: string | undefined;
  element: ReactElement;
  sort?: number;
  withOutLayout?: boolean;
} & PERMISSION;

export type ParentRouteType = {
  icon: JSX.Element;
  name: string;
  children: BaseRouteType[];
  sort?: number;
  withOutLayout?: boolean;
} & PERMISSION;

export type RouteType = {
  path: string | undefined;
  element: ReactElement;
  withOutLayout?: boolean;
} & PERMISSION;

export type RoutesType = BaseRouteType | RouteType | ParentRouteType;

export type ViewRoutesType = BaseRouteType | RouteType;

export type SideBarRouteType = BaseRouteType | ParentRouteType;
