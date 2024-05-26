import { ButtonHTMLAttributes } from 'react'
import { Theme } from '~/app/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from '~/app/providers/ThemeProvider'
import { classNames } from '~/shared/lib/classNames'
import DarkIcon from '~/shared/assets/icons/theme-dark.svg'
import LightIcon from '~/shared/assets/icons/theme-light.svg'
// import ProfileIcon from '~/shared/assets/icons/user.png'

import cls from './ThemeSwitcher.module.scss'
import { Button } from '~/shared/ui/Button'

interface ThemeSwitcher extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcher) => {
  const { className } = props
  const { toggleTheme, theme } = useTheme()

  return (
    <Button 
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}