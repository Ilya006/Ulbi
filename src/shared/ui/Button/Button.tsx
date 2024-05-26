import { ButtonHTMLAttributes } from 'react'
import { classNames } from '~/shared/lib/classNames'

import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}
// БАГ: при использовании кнопки - ломает браузер Ubuntu
export const Button = (props: ButtonProps) => {
  const {className, children, ...restProps} = props

  return (
    <button className={classNames(cls.button, {}, [className])} {...restProps}>
      {children}
    </button>
  )
}