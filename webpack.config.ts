import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build'

import type { BuildPaths } from './config/build/types'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  outpute: path.resolve(__dirname, 'build'),
  template: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
})

export default config
