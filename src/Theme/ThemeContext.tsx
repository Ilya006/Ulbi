import { createContext } from "react";

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface ThemeContext {
  theme?: Themes,
  setTheme?: (theme: Themes) => void
}

export const KEY_STORAGE_THEME = 'theme'


export const ThemeContext = createContext<ThemeContext>({})