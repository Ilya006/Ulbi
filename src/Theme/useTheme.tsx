import React, { useContext } from 'react'
import { KEY_STORAGE_THEME, ThemeContext, Themes } from './ThemeContext'

interface useThemeResult {
  theme: Themes,
  toggleTheme: () => void
}

export function useTheme(): useThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
    setTheme(newTheme)
    localStorage.setItem(KEY_STORAGE_THEME, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
