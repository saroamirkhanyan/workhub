import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    width: 100%;
    height:100%;
    background-color:${(props) => props.theme.containerBg};
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
