import { Link } from 'react-router-dom';
import { classNames } from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';

import cls from './Navbar.module.scss'
import { AppLinkTheme } from '~/shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

export function Navbar (props: NavbarProps) {
  const { className } = props

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.wrapper}>
        <AppLink theme={AppLinkTheme.PRIMATY} className={cls.link} to={'/about'}>About</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.link} to={'/'}>Main</AppLink>
      </div>
    </nav>
  )
}
