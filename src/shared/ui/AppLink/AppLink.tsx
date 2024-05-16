import { FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '~/shared/lib/classNames'
import type { LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMATY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, theme = AppLinkTheme.PRIMATY, ...restProps } = props
  return (
    <Link 
      className={classNames(cls.appLink, {}, [className, cls[theme]])} 
      {...restProps}
    >
      {children}
    </Link>
  )
}