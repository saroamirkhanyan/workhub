import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
<<<<<<< HEAD
import GlobalStyle from './styled/GlobalStyle.js'
=======
import GlobalStyle from './styled/GlobalStyle/GlobalStyle.js'
>>>>>>> c473126d92c437112d94304c8f1b3603f6c50b50
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/reduxStore'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
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
