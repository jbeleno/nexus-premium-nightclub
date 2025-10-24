import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Componentes estáticos (se cargan inmediatamente)
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './utils/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner'

// Páginas con lazy loading (se cargan bajo demanda)
const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))
const Reservas = lazy(() => import('./pages/Reservas'))
const Eventos = lazy(() => import('./pages/Eventos'))

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      
      <main>
        <Suspense fallback={<LoadingSpinner fullScreen message="Cargando..." />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservas" element={<Reservas />} />
              <Route path="/eventos" element={<Eventos />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
