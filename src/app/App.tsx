import React, { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <h1>add new bar</h1>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
          <h1>Hello world</h1>
          <h1>Hello world 2</h1>
        </div>
      </Suspense>
    </div>
  )
}

export default App
