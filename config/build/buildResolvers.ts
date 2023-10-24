import webpack from 'webpack'
import { BuildOptions } from './types'

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}