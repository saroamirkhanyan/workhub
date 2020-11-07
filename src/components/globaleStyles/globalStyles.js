import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,body{
    width: 100%;
    height:100%
  }
  *,*::before,*::after{
    margin:0;
    padding: 0;
  }
`
export default GlobalStyles
