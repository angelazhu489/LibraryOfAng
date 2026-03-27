import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// context
import '@vitejs/plugin-react/preamble'
import { BlogContextProvider } from './contexts/BlogContext'
import { AuthContextProvider } from './contexts/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
