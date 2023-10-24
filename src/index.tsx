import {render} from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Theme/ThemeProvider'

const root = document.getElementById('root')
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
, root)