import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {UlifeApp} from './UlifeApp.tsx'
import './presentation/themes/App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UlifeApp />
    </BrowserRouter>
  </React.StrictMode>,
)
