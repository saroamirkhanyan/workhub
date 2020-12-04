import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,body{
    width: 100%;
  }
  *,*::before,*::after{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: Arial;
    font-weight:bold;
    word-break:break-word;
  }
  label:active{
    -webkit-tap-highlight-color: transparent
  }
  input{
    outline:none;
  }
`
export default GlobalStyles
