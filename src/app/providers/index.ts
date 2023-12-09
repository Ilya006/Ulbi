import compose from '~/shared/lib/compose';

import { withSuspense } from './withSuspense';
import { withThemes } from './withThemes';

export const withProviders = compose(withThemes, withSuspense);
