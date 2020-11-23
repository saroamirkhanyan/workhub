import { useState } from 'react'
import { ThemePalette } from './ThemePalette'

export default function useThemeMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const isTheme = theme in ThemePalette

  if (!isTheme) setTheme('light')
  localStorage.setItem('theme', theme)

  return [theme, ThemePalette[theme], setTheme]
}
