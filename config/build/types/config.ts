import type {Port} from 'webpack-dev-server'

export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string,
  outpute: string,
  template: string,
  src: string
}

export interface BuildEnv {
  mode: BuildMode,
  port: Port
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: Port,
}