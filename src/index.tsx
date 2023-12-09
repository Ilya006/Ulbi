import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './shared/lib/styles/ui/ThemeProvider';
import { App } from './app/App';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  root,
);
