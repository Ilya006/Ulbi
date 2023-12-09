import { createContext } from 'react';
import { ThemeContextParams, Themes } from '../types';

export const KEY_STORAGE_THEME = 'theme';
export const defaultTheme = (localStorage.getItem(KEY_STORAGE_THEME) as Themes) || Themes.LIGHT;

export const ThemeContext = createContext<ThemeContextParams>({});
