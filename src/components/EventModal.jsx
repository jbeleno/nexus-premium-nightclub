import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const EventModal = ({ onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Overlay oscuro */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 max-w-2xl w-full border border-gray-700 shadow-2xl"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #050505 100%)',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #050505 100%), linear-gradient(135deg, #FF00FF, #00FFFF)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box'
        }}
      >
        {/* Botón de cerrar */}
        <motion.button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>

        {/* Contenido del modal */}
        <motion.div
          className="text-center"
          variants={contentVariants}
        >
          {/* Logo/Título */}
          <motion.div
            className="mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2">
              NEXUS
            </h1>
            <p className="text-gray-300 text-lg">Premium Nightclub Experience</p>
          </motion.div>

          {/* Evento destacado */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-xl p-6 border border-pink-500/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                🎉 EVENTO ESPECIAL DE LA SEMANA
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2">
                "Neon Dreams"
              </h3>
              <p className="text-gray-300 mb-4">
                Viernes 15 de Diciembre • 22:00 - 06:00
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  DJ Internacional
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  Open Bar VIP
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                  Dress Code Elegante
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Reserva anticipada con 20% de descuento
              </p>
            </div>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="btn btn-primary px-8 py-3 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onClose()
                // Aquí podrías navegar a la página de reservas
                window.location.href = '/reservas'
              }}
            >
              Reservar Ahora
            </motion.button>
            
            <motion.button
              className="btn btn-outline px-8 py-3 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              Ver Más Eventos
            </motion.button>
          </motion.div>

          {/* Texto adicional */}
          <motion.p
            className="text-gray-500 text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            ✨ Experiencia premium • 🎵 Música de vanguardia • 🍾 Servicio VIP
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default EventModal
