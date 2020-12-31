import React from 'react'
import Header from './components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import useThemeMode from './styled/ThemeMode.js'
import GlobalStyles from './styled/GlobalStyles.js'

import { Route, Switch } from 'react-router-dom'
import { Loader } from './styled/StyledElements'
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
`

function App() {
  const [theme, ThemePalette, setTheme] = useThemeMode()
  return (
    <ThemeProvider theme={ThemePalette}>
      <GlobalStyles />
      <Container>
        <Header theme={theme} setTheme={setTheme} />

        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Route
              exact
              path={['/', '/searchQuery=:searchQuery']}
              render={() => <WorksContainer />}
            />
          </Switch>
        </React.Suspense>
      </Container>
    </ThemeProvider>
  )
}

export default App
