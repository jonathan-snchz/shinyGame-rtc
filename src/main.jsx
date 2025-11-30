import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Welcome.jsx'
import NotFound from './components/404.jsx'
import ShinyGame from './components/shinyGame.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import GenerationsForm from './components/GenerationsForm.jsx'
import { ProgressContextProvider } from './context/ProgressContext.jsx'
import Stats from './components/Stats.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <ProgressContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path='/shinyGame' element={<GenerationsForm />}/>
            <Route path='/game' element={<ShinyGame />}/>
            <Route path='/stats' element={<Stats />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
