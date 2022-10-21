import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

import theme from './theme'
import GlobalStyles from './styles/globalStyles'

import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
