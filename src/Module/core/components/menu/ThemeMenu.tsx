import useTheme from '@Module/core/hooks/ChangeTheme';
import { Switch } from 'antd';
import React from 'react';

const ThemeMenu: React.FC = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <Switch
      aria-label="Toggle dark mode"
      aria-labelledby="theme-toggle-label"
      defaultChecked={theme === 'dark'}
      onChange={() => {
        changeTheme();
      }}
    />
  );
};

export default ThemeMenu;
