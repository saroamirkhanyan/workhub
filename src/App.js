import React, { Profiler } from 'react'
import Header from './components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import useThemeMode from './styled/ThemeMode.js'
import Search from './components/SerachComponent/Search'
import DivideLine from './components/Content/DivideLine/DivideLine'
import Jobs from './components/Content/Main/Jobs/Jobs'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.containerBg};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 18px;
`

function App() {
  const [theme, ThemePalette, setTheme] = useThemeMode()

  return (
    <Profiler id="Navigation" onRender={<h1>Loading mazafaka</h1>}>
      <ThemeProvider theme={ThemePalette}>
        <Container>
          <Header theme={theme} setTheme={setTheme} />
          <Search />
          <DivideLine />
          <Jobs />
        </Container>
      </ThemeProvider>
    </Profiler>
  )
}

export default App
