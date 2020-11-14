import { useEffect, useState } from 'react'
import LogoMobLight from '../images/LogoMobLight.svg'
import LogoMobDark from '../images/LogoMobDark.svg'
import LogoDeskLight from '../images/Logo.svg'
import SearchIconDark from '../images/SearchLogoDark.svg'
import SearchIconLight from '../images/SearchLogoLight.svg'
export default function useThemeMode() {
  const lightTheme = {
    primaryBg: '#F2F2F2',
    secondaryBg: '#F6F6F6',
    primaryColor: '#717171',
    btnCol: '#DBDBDB',
    containerBg: '#EBEBEB',
    LogoMob: LogoMobLight,
    LogoDesk: LogoDeskLight,
    SearchIcon: SearchIconLight,
  }
  const darkTheme = {
    primaryBg: '#A4A4A4',
    secondaryBg: '#ADADAD',
    primaryColor: '#FFFFFF',
    btnCol: '#C4C4C4',
    containerBg: '#F5F5F5',
    LogoMob: LogoMobDark,
    LogoDesk: LogoDeskLight,
    SearchIcon: SearchIconDark,
  }

  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    if (theme !== 'light' && theme !== 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      const newTheme = theme === 'light' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
    }
  }, [theme])
  return [theme, theme === 'light' ? lightTheme : darkTheme, setTheme]
}
