import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicketApp } from './TicketApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LayoutApp } from './Pages/Layout.jsx'
import { UiProvider, SocketProvider } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SocketProvider>
      <UiProvider>
        <LayoutApp>
          <TicketApp />  
        </LayoutApp>
      </UiProvider>
    </SocketProvider>
  </BrowserRouter>,
)
