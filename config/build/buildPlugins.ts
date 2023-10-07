import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'

import type { BuildPaths } from './types'

export function buildPlugins ({template}: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: template,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({
      systemvars: true
    })
  ]
}