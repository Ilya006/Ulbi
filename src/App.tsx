import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";

import './styles/index.scss'
import { ThemeContext, Themes } from "./Theme/ThemeContext";
import { useTheme } from "./Theme/useTheme";



export function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>about</Link>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
