adding fonts 

pnpm install @fontsource/sen

4. Set Up Font and Components
In React, you can directly use @fontsource/sen to apply the font:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider.tsx'

import '@fontsource/sen/400.css';
import '@fontsource/sen/500.css';
import '@fontsource/sen/600.css';
import '@fontsource/sen/700.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
       <div className='font-sen'>
          <Header/>
            <App />
          <Footer/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)


1. md:hidden
Applies to: Screens md and larger.
2. max-md:hidden
Applies to: Screens below the md breakpoint.
# Interior-Redo-With-React-pnpm-
