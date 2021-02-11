import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'

const App = () => {
  localStorage.setItem('cart', JSON.stringify([
    {
      product: "Product 1",
      quantity: 1,
      shop: '14252525'
    }
  ]))
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    < BrowserRouter >
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  </BrowserRouter >
)}

export default hot(module)(App)
