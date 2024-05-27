import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '~/app/providers/ThemeProvider';

import App from './app/App';
import './shared/config/i18n'

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
