import { useState, useEffect } from 'react';
import { useGlobalState } from '../states/GlobalState';

function useTheme(): [string, () => void] {
  const { refreshCSSVariables } = useGlobalState();

  const [theme, setTheme] = useState<string>(() => {
    // Get the current theme from local storage on initial render
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    // Update the body class when the theme changes
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);

    // Save the new theme to local storage
    localStorage.setItem('theme', theme);

    refreshCSSVariables();
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, changeTheme];
}

export default useTheme;
