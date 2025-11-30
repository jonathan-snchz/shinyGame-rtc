import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}App`}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
