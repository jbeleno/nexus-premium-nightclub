import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Calendar, Star, Users } from 'lucide-react'
import imgExample from '../assets/images/img.jpg'
import fondoGaleria from '../assets/images/fondo_galeria.jpg'
import Silk from '../components/Silk'

const Home = () => {
  // Datos de ejemplo para los próximos eventos
  const upcomingEvents = [
    {
      id: 1,
      title: "Neon Dreams",
      date: "15 Dic",
      time: "22:00",
      image: imgExample,
      type: "DJ Internacional"
    },
    {
      id: 2,
      title: "Electric Nights",
      date: "22 Dic",
      time: "22:00",
      image: imgExample,
      type: "Live Performance"
    },
    {
      id: 3,
      title: "VIP Experience",
      date: "29 Dic",
      time: "21:00",
      image: imgExample,
      type: "Exclusive Event"
    }
  ]

  // Datos de ejemplo para la galería
  const galleryItems = [
    {
      id: 1,
      type: "video",
      thumbnail: imgExample,
      title: "Noche Épica"
    },
    {
      id: 2,
      type: "image",
      thumbnail: imgExample,
      title: "DJ Session"
    },
    {
      id: 3,
      type: "video",
      thumbnail: imgExample,
      title: "VIP Lounge"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen page-container">
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Fondo Silk animado */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.2}
            color="#d4af37"
            noiseIntensity={1.2}
            rotation={0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenido del Hero */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Título principal */}
          <motion.div variants={itemVariants}>
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse-neon">
                NEXUS
              </span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-8 font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse-neon">
                La experiencia nocturna más exclusiva de la ciudad
              </span>
            </p>
          </motion.div>

          {/* Botones CTA - Refactorizado */}
          <motion.div
            className="hero-buttons-container"
            variants={itemVariants}
          >
            {/* Botón Principal */}
            <motion.div
              className="hero-button-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/reservas"
                className="btn-primary"
              >
                <Calendar size={20} />
                Reservar Ahora
              </Link>
            </motion.div>
            
            {/* Botón Secundario */}
            <motion.div
              className="hero-button-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/eventos"
                className="btn-white"
              >
                <Play size={20} />
                Ver Eventos
              </Link>
            </motion.div>
          </motion.div>

          {/* Indicadores de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Próximos Eventos */}
      <section className="nexus-events-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="nexus-events-title">
              <span className="nexus-events-title-accent">Próximos</span> <span className="nexus-events-title-static">Eventos</span>
            </h2>
            <p className="nexus-events-subtitle">
              Descubre las noches más exclusivas que tenemos preparadas para ti
            </p>
          </motion.div>

          <motion.div
            className="nexus-events-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                className="nexus-event-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nexus-event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="nexus-event-image"
                  />
                  <div className="nexus-event-badge">
                    {event.type}
                  </div>
                  <div className="nexus-event-overlay" />
                </div>
                <div className="nexus-event-info">
                  <h3 className="nexus-event-name">{event.title}</h3>
                  <div className="nexus-event-datetime">
                    <Calendar size={16} />
                    <span>{event.date} • {event.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="nexus-events-button-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/eventos"
              className="btn-secondary"
            >
              Ver Todos los Eventos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Galería */}
      <section className="nexus-gallery-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="nexus-gallery-title">
              <span className="nexus-gallery-title-accent">Galería</span> Exclusiva
            </h2>
            <p className="nexus-gallery-subtitle">
              Momentos únicos capturados en nuestras noches más memorables
            </p>
          </motion.div>

          <motion.div
            className="nexus-gallery-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="nexus-gallery-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="nexus-gallery-image"
                />
                <div className="nexus-gallery-overlay">
                  <h3 className="nexus-gallery-item-title">{item.title}</h3>
                  <div className="nexus-gallery-item-type">
                    {item.type === 'video' ? (
                      <Play size={16} />
                    ) : (
                      <Star size={16} />
                    )}
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA VIP */}
      <section className="nexus-vip-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="nexus-vip-title">
              <span className="nexus-vip-title-accent">Experiencia</span> VIP
            </h2>
            <p className="nexus-vip-subtitle">
              Accede a nuestros servicios más exclusivos: mesa privada, botellas premium, 
              servicio personalizado y acceso prioritario.
            </p>
            
            <div className="nexus-vip-features-grid">
              <motion.div
                className="nexus-vip-feature"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nexus-vip-icon">
                  <Users size={32} />
                </div>
                <h3 className="nexus-vip-feature-title">Mesa Privada</h3>
                <p className="nexus-vip-feature-description">Espacio exclusivo para tu grupo</p>
              </motion.div>
              
              <motion.div
                className="nexus-vip-feature"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nexus-vip-icon">
                  <Star size={32} />
                </div>
                <h3 className="nexus-vip-feature-title">Botellas Premium</h3>
                <p className="nexus-vip-feature-description">Selección de bebidas de lujo</p>
              </motion.div>
              
              <motion.div
                className="nexus-vip-feature"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nexus-vip-icon">
                  <Calendar size={32} />
                </div>
                <h3 className="nexus-vip-feature-title">Acceso Prioritario</h3>
                <p className="nexus-vip-feature-description">Sin filas, entrada directa</p>
              </motion.div>
            </div>

            <motion.div
              className="nexus-vip-button-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/reservas"
                className="btn-primary text-xl px-12 py-4"
              >
                Reservar Experiencia VIP
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
