import webpack from 'webpack';
import { BuildOptions } from './types';

export function buildResolvers({ paths }: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': paths.src,
    },
  };
}
