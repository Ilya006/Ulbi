export enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface ThemeContextParams {
  theme?: Themes,
  setTheme?: (theme: Themes) => void
}