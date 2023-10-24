import React, { FC, useMemo, useState } from 'react'
import { KEY_STORAGE_THEME, ThemeContext, Themes } from './ThemeContext'

export const defaultTheme = localStorage.getItem(KEY_STORAGE_THEME) as Themes || Themes.LIGHT


export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme, setTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
