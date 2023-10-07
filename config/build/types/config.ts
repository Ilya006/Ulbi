export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string,
  outpute: string,
  template: string
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean
}