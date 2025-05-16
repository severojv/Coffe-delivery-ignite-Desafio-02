import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styeles/thems/default'
import { GlobalStyle } from './styeles/thems/global'
import { CoffeProvider } from './Context/CoffeContext'

function App() {
 
  return (
    <CoffeProvider>

    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    <GlobalStyle/>
    </ThemeProvider>
    </CoffeProvider>
  )
}

export default App
