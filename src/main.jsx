import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicketApp } from './TicketApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LayoutApp } from './Pages/Layout.jsx'
import { UiProvider } from './Context/UiContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UiProvider>
      <LayoutApp>
        <TicketApp />  
      </LayoutApp>
    </UiProvider>
  </BrowserRouter>,
)
