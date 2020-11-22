import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,body{
    width: 100%;
    height:100%;
    word-break:break-all;
  }
  *,*::before,*::after{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family:"Montserrat", Arial;
  }
  label:active{
    -webkit-tap-highlight-color: transparent
  }
  input{
    outline:none;
  }
  a{
    text-decoration:none;
  }
`
export default GlobalStyles
