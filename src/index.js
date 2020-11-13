import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styled/GlobalStyles.js'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/reduxStore'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<h1>Preolader</h1>}>
          <App />
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
