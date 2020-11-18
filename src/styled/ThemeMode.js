import { useState } from 'react'
import LogoMobLight from '../images/LogoMobLight.svg'
import LogoMobDark from '../images/LogoMobDark.svg'
import LogoDeskLight from '../images/Logo.svg'
import SearchIconDark from '../images/SearchLogoDark.svg'
import SearchIconLight from '../images/SearchLogoLight.svg'
export default function useThemeMode() {
  const themePalette = {
    light: {
      secondaryBg: '#F2F2F2',
      primaryBg: '#F6F6F6',
      primaryColor: '#717171',
      btnCol: '#DBDBDB',
      containerBg: '#EBEBEB',
      LogoMob: LogoMobLight,
      LogoDesk: LogoDeskLight,
      SearchIcon: SearchIconLight,
    },
    dark: {
      secondaryBg: '#A4A4A4',
      primaryBg: '#ADADAD',
      primaryColor: '#FFFFFF',
      btnCol: '#C4C4C4',
      containerBg: '#F5F5F5',
      LogoMob: LogoMobDark,
      LogoDesk: LogoDeskLight,
      SearchIcon: SearchIconDark,
    },
  }

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const isTheme = theme in themePalette

  !isTheme ? setTheme('light') : localStorage.setItem('theme', theme)

  return [theme, themePalette[theme], setTheme]
}
