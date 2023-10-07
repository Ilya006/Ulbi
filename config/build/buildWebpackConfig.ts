import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'

import type { BuildOptions } from './types'

export function buildWebpackConfig (options: BuildOptions):webpack.Configuration {
  const {mode, paths} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.outpute,
      clean: true,
    },
    devtool: "eval-source-map",
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
  }
}