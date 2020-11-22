import LogoMobLight from '../images/LogoMobLight.svg'
import LogoMobDark from '../images/LogoMobDark.svg'
import LogoDeskLight from '../images/LogoDeskLight.svg'
import LogoDeskDark from '../images/LogoDeskDark.svg'
import SearchIconDark from '../images/SearchLogoDark.svg'
import SearchIconLight from '../images/SearchLogoLight.svg'

export const ThemePalette = {
  light: {
    secondaryBg: '#F2F2F2',
    primaryBg: '#F8F8F8',
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
    LogoDesk: LogoDeskDark,
    SearchIcon: SearchIconDark,
  },
}
