import React, { useState, ReactNode } from 'react';
import { Drawer, Space } from 'antd';

interface DrawerNavBarProps {
  button: React.ReactNode;
  children: ReactNode;
  className?: string;
}

const DrawerNavBar: React.FC<DrawerNavBarProps> = ({
  button,
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);

  let What_the_language = localStorage.getItem('language') ?? 'en';

  return (
    <>
      <Space>
        {React.cloneElement(button as React.ReactElement, {
          onClick: () => setOpen(true),
        })}
      </Space>
      <Drawer
        // title={title}
        placement={What_the_language === 'ar' ? 'right' : 'left'}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={What_the_language}
        width="260"
      >
        <div className={className}>{children}</div>
      </Drawer>
    </>
  );
};

export default DrawerNavBar;

//   <DrawerNavBar
//   button={<Button type="primary">Open</Button>}
// >
//   {/* Your content goes here */}
// </DrawerNavBar>
