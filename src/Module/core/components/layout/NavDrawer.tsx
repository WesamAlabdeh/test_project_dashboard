import  { useState } from 'react';
import { Drawer } from 'antd';
import { HiBars3 } from 'react-icons/hi2';
import SideBar from './SideBar';

const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <span className="NavMenu">
    <div onClick={handleDrawerToggle}>
      <HiBars3 />
    </div>
    <Drawer
    width={300}
    title={
      <div className="drawerHeader">
        {/* <img src={Lo    go.src} alt="logo" className="drawerLogo" /> */}
      </div>
    }
    placement="right"
    onClose={handleDrawerToggle}
    open={isDrawerOpen}
  >
    <div className="drawerLinks">
     <SideBar/>
    </div>
  </Drawer>
  </span>
  );
};

export default NavDrawer;
