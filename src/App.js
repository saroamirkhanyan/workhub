import React from 'react'
import Header from './components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import useThemeMode from './styled/ThemeMode.js'

const Conrainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.containerBg};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

function App() {
  const [theme, themePalette, setTheme] = useThemeMode()

  return (
    <ThemeProvider theme={themePalette}>
      <Conrainer>
        <Header theme={theme} setTheme={setTheme} />
        <div>as</div>
      </Conrainer>
    </ThemeProvider>
  )
}

export default App
