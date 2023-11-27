import { FC, useMemo, useState } from 'react'

import { ThemeContext, defaultTheme } from '../utils/ThemeContext'
import { Themes } from '../types'

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

