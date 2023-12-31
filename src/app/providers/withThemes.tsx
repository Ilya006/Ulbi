import { ComponentType } from 'react';

import { ThemeProvider } from '~/shared/lib/styles/ui/ThemeProvider';

import { AppProps } from '../types';

export const withThemes = (Component: ComponentType<AppProps>) => (props: AppProps) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
);
