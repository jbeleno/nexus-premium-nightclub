import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Componentes
import EventModal from './components/EventModal'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservas from './pages/Reservas'
import Eventos from './pages/Eventos'

function App() {
  const [showEventModal, setShowEventModal] = useState(false)

  useEffect(() => {
    // Mostrar el modal de evento solo la primera vez que se carga la página
    const hasSeenModal = localStorage.getItem('hasSeenEventModal')
    if (!hasSeenModal) {
      setShowEventModal(true)
    }
  }, [])

  const handleCloseModal = () => {
    setShowEventModal(false)
    localStorage.setItem('hasSeenEventModal', 'true')
  }

  return (
    <div className="App">
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

      {/* Modal de Evento Semanal */}
      <AnimatePresence>
        {showEventModal && (
          <EventModal onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
