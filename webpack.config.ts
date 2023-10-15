import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build'

import type { BuildPaths, BuildEnv } from './config/build/types'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    outpute: path.resolve(__dirname, 'build'),
    template: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const mode = env.mode || 'development'
  const port = env.port || 3000

  const isDev = mode === 'development'
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  })

  return config
}
