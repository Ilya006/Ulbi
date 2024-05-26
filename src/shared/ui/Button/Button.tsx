import { ButtonHTMLAttributes } from 'react'
import { classNames } from '~/shared/lib/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton
}
export const Button = (props: ButtonProps) => {
  const {className, children, theme = ThemeButton.CLEAR, ...restProps} = props

  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </button>
  )
}