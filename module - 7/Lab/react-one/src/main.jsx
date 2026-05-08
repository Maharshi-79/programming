import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './intro.jsx'
import Welcome from './Jsx_1.jsx'
import WelcomeMessage from './components_2.jsx'
import Run from './components_1.jsx'
import { Detail } from './props&state_1.jsx'
import Countercomponent from './props&state_2.jsx'
import Event from './EventHandling_1.jsx'
import Form from './EventHandling_2.jsx'
import LoginLogout from './conditionalRendering_1.jsx'
import Eligiblity from './conditionalRendering_2.jsx'
import Lists from './lists&keys_1.jsx'
import Keys from './lists&keys_2.jsx'
import Formhandling from './form_1.jsx'
import Lifecycle from './lifeCycle_2.jsx'
import Productlist from './lifeCycle_1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
    <Welcome />
    <Run/>
    <WelcomeMessage/>
    <Detail/>
    <Countercomponent/>
    <Event/>
    <Form/>
    <LoginLogout/>
    <Eligiblity/>
    <Lists />
    <Keys />
    <Formhandling/>
    <Lifecycle/>
    <Productlist/>
  </StrictMode>,
)
