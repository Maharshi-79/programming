import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Hooks_1.jsx'
import Effect from './Hooks_2.jsx'
import App1 from './Hooks_4.jsx'
import Routingg from './Routing_1.jsx'
import Nav from './Routing_2.jsx'
import ThemeProvider from './ThemeContext.jsx'
import Page from './page.jsx'
import Authprovider from './Authentication.jsx'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <Counter />
    <Effect />
    <App1/>
    <Routingg/>
    <Nav />
    <ThemeProvider>
        <Page />
    </ThemeProvider>

    <Authprovider>
        <Dashboard />
    </Authprovider>
  </StrictMode>,
)
