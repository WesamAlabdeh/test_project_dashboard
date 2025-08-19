import { Suspense, lazy } from 'react';
import Logo from '../../../../assets/core/Logo.webp';
import { getBodyClassName, removeBodyClassName, setBodyClassName } from '@Module/core/utils/document/BodyClassName';
import { getVariables, setVariables } from '@Module/core/utils/document/rootVariables';
import NavDrawer from './NavDrawer';

// Lazy load the menu components
const TranslateMenu = lazy(() => import('../menu/TranslateMenu'));
const ProfileMenu = lazy(() => import('../menu/ProfileMenu'));
const ThemeMenu = lazy(() => import('../menu/ThemeMenu'));

const NavBar = () => {

  const handleOpenSideBar = () => {
    const close_side_bar = getBodyClassName('close_side_bar');
    const sideBarCloseWidth = getVariables('sideBarCloseWidth');
    const sideBarOpenWidth = getVariables('sideBarOpenWidth');
   

    if (close_side_bar) {
      setVariables('sideBarWidth', sideBarOpenWidth as string);
      removeBodyClassName('close_side_bar');
      return;
    }

    setVariables('sideBarWidth', sideBarCloseWidth as string);
    setBodyClassName('close_side_bar');
  };

  return (
    <nav className="NavBar">
      <div className="NavBarLeft">
      <header>
    
        <h4 onClick={handleOpenSideBar}>
          TASK MANAGEMENT
        </h4>
      </header>
      </div>
      <div className="NavBarRight">
        <Suspense fallback={<></>}>
          <TranslateMenu />
          <ThemeMenu />
          <ProfileMenu />
        </Suspense>
      </div>
      <div className="NavBarMenu">
        <NavDrawer/>
      </div>
    </nav>
  );
};

export default NavBar;
