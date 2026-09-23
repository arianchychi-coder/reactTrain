import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MouseFollower } from 'react-mouse-follower';
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <MouseFollower/>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
