import compose from 'compose-function';

import {withSuspense} from './withSuspense'
import {withStyles} from './withStyles'

export const withProviders = compose(
  withStyles,
  withSuspense
)

