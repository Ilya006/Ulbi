import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '~/shared/config/routeConfig/routeConfig'

export const AppRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route key={path} path={path} element={(
            <div className='page-content'>
              {element}
            </div>
          )} />
        ))}
      </Routes>
    </Suspense>
  )
}