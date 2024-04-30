import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicketApp } from './TicketApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LayoutApp } from './Pages/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LayoutApp>
       <TicketApp />  
    </LayoutApp>
  </BrowserRouter>,
)
