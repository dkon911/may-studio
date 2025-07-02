import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import NotificationDisplay from './components/NotificationDisplay.jsx' // Import the new display component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
        <NotificationDisplay /> {/* Render the display component here */}
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
