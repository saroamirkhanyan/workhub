import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,body{
    width:100%;
    height:100%; 
    box-sizing:border-box;
  }

  *,*::before,*::after{
    margin: 0;
    padding: 0;
    font-family:'Montserrat';
    -webkit-tap-highlight-color: transparent
  }
  input:focus {
    outline: none;
    user-select:none;
 
}
`
export default GlobalStyle
