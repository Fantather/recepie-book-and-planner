import './index.css'

import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RecipesContextProvider from './context/RecipesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecipesContextProvider>
        <App />
      </RecipesContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
