import { ComponentType, Suspense } from 'react';

import { AppProps } from '../types';

export const withSuspense = (Component: ComponentType<AppProps>) => (props: AppProps) => (
  <Suspense fallback="Loading...">
    <Component {...props} />
  </Suspense>
);
