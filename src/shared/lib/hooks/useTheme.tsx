import { useContext } from 'react';

import { Themes } from '../styles/types';
import { KEY_STORAGE_THEME, ThemeContext } from '../styles/utils/ThemeContext';

interface useThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(KEY_STORAGE_THEME, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
