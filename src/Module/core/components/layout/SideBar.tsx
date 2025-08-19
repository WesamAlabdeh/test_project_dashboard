import { SortRouteCompareNumbers } from '@Module/core/utils/number/compareNumbers';
import { BaseRoute } from '../../../../Routes';
import { RoutesType, SideBarRouteType } from '../../types/route';
import MenuItem from '../sideBar/MenuItem';
import { hasAbility } from '@Module/core/utils/fn/hasAbility';
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from '@Module/core/enums/Abilities';
import { getBodyClassName, removeBodyClassName, setBodyClassName } from '@Module/core/utils/document/BodyClassName';
import { getVariables, setVariables } from '@Module/core/utils/document/rootVariables';
import { useState } from 'react';
const SideBar = () => {
  const SideBarBaseRoute = BaseRoute.filter(
    (item: RoutesType) => 'icon' in item,
  ) as SideBarRouteType[];
  

  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(getBodyClassName('close_side_bar') !== null);


  const handleOpenSideBar = () => {
    const sideBarCloseWidth = getVariables('sideBarCloseWidth');
    const sideBarOpenWidth = getVariables('sideBarOpenWidth');

    if (isSidebarClosed) {
      setVariables('sideBarWidth', sideBarOpenWidth as string);
      removeBodyClassName('close_side_bar');
      setIsSidebarClosed(false);
    } else {
      setVariables('sideBarWidth', sideBarCloseWidth as string);
      setBodyClassName('close_side_bar');
      setIsSidebarClosed(true);
    }
  };

  return (
    <div className="SideBar">

      <main>
        <ul>
          {SideBarBaseRoute.sort(SortRouteCompareNumbers)?.map(
            (item: SideBarRouteType, index: number) => {
              const useAbility = hasAbility(item.abilities ?? ABILITIES_ENUM.PASS, item.abilities_value ?? ABILITIES_VALUES_ENUM.INDEX) ;
              if (!useAbility) {
                return false;
              }

              return <MenuItem key={index} item={item} />;
            },
          )}
        </ul>
      </main>
    </div>
  );
};

export default SideBar;
