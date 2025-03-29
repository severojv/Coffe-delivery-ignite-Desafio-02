import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styeles/thems/default'
import { GlobalStyle } from './styeles/thems/global'

function App() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
