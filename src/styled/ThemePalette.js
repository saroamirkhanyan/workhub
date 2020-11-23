import LogoMobLight from '../images/LogoMobLight.svg'
import LogoMobDark from '../images/LogoMobDark.svg'
import LogoDeskLight from '../images/LogoDeskLight.svg'
import LogoDeskDark from '../images/LogoDeskDark.svg'
import SearchIconDark from '../images/SearchLogoDark.svg'
import SearchIconLight from '../images/SearchLogoLight.svg'

export const ThemePalette = {
  light: {
    primaryBg: '#F2F2F2',
    primaryColor: '#717171',
    btnCol: '#DBDBDB',
    containerBg: '#E4E4E4',
    LogoMob: LogoMobLight,
    LogoDesk: LogoDeskLight,
    SearchIcon: SearchIconLight,
  },
  dark: {
    primaryBg: '#A4A4A4',
    primaryColor: '#FFFFFF',
    btnCol: '#C4C4C4',
    containerBg: '#F5F5F5',
    LogoMob: LogoMobDark,
    LogoDesk: LogoDeskDark,
    SearchIcon: SearchIconDark,
  },
}
