import React from 'react'
import Header from './components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import useThemeMode from './styled/ThemeMode.js'
import WorksContainer from './components/Works/WorksContainer'
import { Redirect, Route, Switch } from 'react-router-dom'
const Sign = React.lazy(() => import('./components/SignComponent/Sign'))

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.containerBg};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 18px;
  transition: all 0.3s ease-in-out;
`

function App() {
  const [theme, ThemePalette, setTheme] = useThemeMode()
  return (
    <ThemeProvider theme={ThemePalette}>
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/works" render={() => <WorksContainer />} />
          <Route path="/signup" render={() => <Sign page="signup" />} />
          <Route path="/signin" render={() => <Sign page="signin" />} />
          <Redirect from="/" to="/works" />
        </Switch>
      </Container>
    </ThemeProvider>
  )
}

export default App
