import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CssBaseline } from '@material-ui/core'
import reportWebVitals from './reportWebVitals'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8eaebd',
    },
    secondary: {
      main: '#d5d5d5',
    },
    type: 'dark',
    background: {
      default: '#1D2731',
      footer: ' #121a21',
    },
  },
  typography: {
    fontFamily: ['JetBrains Mono'].join(','),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
