import { Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "~/shared/lib/hooks";
import '~/shared/lib/styles/index.scss'

import { AboutPage, HomePage } from "../pages";
import {withProviders} from './providers'
import type {AppProps} from './types'

const App: React.FC<AppProps> = () => {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

const ProvidedApp: React.FC<AppProps> = withProviders(App)

export { ProvidedApp as App }