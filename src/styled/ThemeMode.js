import { useEffect, useState } from 'react'
import LogoMobLight from '../images/LogoMobLight.svg'
import LogoMobDark from '../images/LogoMobDark.svg'
import LogoDeskLight from '../images/Logo.svg'
export default function useThemeMode() {
  const lightTheme = {
    primaryBg: '#F2F2F2',
    secondaryBg: '#F6F6F6',
    primaryColor: '#717171',
    BtnCol: '#DBDBDB',
    containerBg: '#EBEBEB',
    logoMob: LogoMobLight,
    LogoDesk: LogoDeskLight,
  }
  const darkTheme = {
    primaryBg: '#A4A4A4',
    secondaryBg: '#ADADAD',
    primaryColor: '#FFFFFF',
    BtnCol: '#C4C4C4',
    containerBg: '#F5F5F5',
    logoMob: LogoMobDark,
    LogoDesk: LogoDeskLight,
  }
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    if (!theme) {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }, [theme])
  return [theme, theme === 'light' ? lightTheme : darkTheme, setTheme]
}
