import { SideBarRouteType } from '../../types/route';

export function SortRouteCompareNumbers(
  a: SideBarRouteType,
  b: SideBarRouteType,
) {
  if (!a.sort && !b.sort) return 0;

  if ((a.sort || 0) > (b.sort || 0)) return -1;
  else return 1;
}
