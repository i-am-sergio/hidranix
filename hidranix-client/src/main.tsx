import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}




const localization = {
  socialButtonsBlockButton: 'Sign In with {{provider|titleize}}',
  signUp: {
    start: {
      title: 'Crea tu cuenta',
      subtitle: 'para continuar a {{applicationName}}',
      actionText: 'Ya tienes una cuenta?',
      actionLink: 'Inicia sesión',
    }
  },
  signIn: {
    start: {
      title: 'Inicia sesión',
      subtitle: 'en {{applicationName}}',
      actionText: 'No tienes una cuenta?',
      actionLink: 'Regístrate',
    }
  },
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"  localization={localization}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)


/**
 createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"  localization={localization}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)


 */

