import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,body{
    width: 100%;
    height:100%
  }
  *,*::before,*::after{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family:"Montserrat"
  }
  label:active{
    -webkit-tap-highlight-color: transparent
  }

`
export default GlobalStyles
