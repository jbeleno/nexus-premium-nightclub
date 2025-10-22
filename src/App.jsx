import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Componentes
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './utils/ScrollToTop'

// Páginas
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservas from './pages/Reservas'
import Eventos from './pages/Eventos'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
