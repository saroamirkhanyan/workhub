import React from 'react'
import Header from './components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import useThemeMode from './styled/ThemeMode.js'
import GlobalStyles from './styled/GlobalStyles.js'

import { Redirect, Route, Switch } from 'react-router-dom'
import { PagesLoader } from './styled/StyledElements'
import WorksContainer from './components/Works/WorksContainer'
const SignUp = React.lazy(() => import('./components/SignComponent/SignUp'))
const SignIn = React.lazy(() => import('./components/SignComponent/SignIn'))

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
      <GlobalStyles />
      <Container>
        <Header theme={theme} setTheme={setTheme} />

        <React.Suspense fallback={<PagesLoader />}>
          <Switch>
            <Route path="/works" render={() => <WorksContainer />} />
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Redirect from="/" to="/works" />
          </Switch>
        </React.Suspense>
      </Container>
    </ThemeProvider>
  )
}

export default App
