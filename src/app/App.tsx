import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from '~/app/providers/ThemeProvider';
import { AboutPage } from '~/pages/AboutPage';
import { MainPage } from '~/pages/MainPage';
import { ThemeSwitcher } from '~/widget/ThemeSwitcher';
import { classNames } from '~/shared/lib/classNames';

import './styles/index.scss';
import { AppRoute } from './providers/route';
import { Navbar } from '~/widget/Navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <AppRoute />
    </div>
  );
};

export default App;
