import React, { useState, useRef, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar as CalendarIcon, Clock, MapPin, Music, Users, Star } from 'lucide-react'
import Calendar from '../components/Calendar'
import SEO from '../components/SEO'
import { UPCOMING_EVENTS } from '../data/events'

const Eventos = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const eventDetailRef = useRef(null)

  // Usar eventos importados
  const events = UPCOMING_EVENTS

  // Scroll suave hacia los detalles del evento cuando se selecciona
  useEffect(() => {
    if (selectedEvent && eventDetailRef.current) {
      // Pequeño delay para que la animación se complete
      setTimeout(() => {
        const element = eventDetailRef.current
        const headerOffset = 100 // Offset para el header fijo
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }, 100)
    }
  }, [selectedEvent])

  // Manejar selección de fecha en el calendario
  const handleDateSelect = (day, dayEvents) => {
    setSelectedDate(day)
    if (dayEvents.length > 0) {
      setSelectedEvent(dayEvents[0])
    } else {
      setSelectedEvent(null)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="nexus-eventos-page">
      <SEO 
        title="Eventos Exclusivos"
        description="Descubre los mejores eventos y fiestas en NEXUS. DJs internacionales, fiestas temáticas y experiencias VIP únicas. ¡Reserva tu entrada ahora!"
      />
      <div className="nexus-eventos-container">
        {/* Header */}
        <motion.div
          className="nexus-eventos-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="nexus-eventos-title">
            <span className="nexus-eventos-title-accent">Eventos</span> Exclusivos
          </h1>
          <p className="nexus-eventos-subtitle">
            Descubre las noches más memorables que tenemos preparadas para ti
          </p>
        </motion.div>

        <div className="nexus-eventos-layout">
          {/* Calendario */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="nexus-calendar-header" style={{ marginBottom: '1.5rem' }}>
                <CalendarIcon size={24} />
                <span style={{ marginLeft: '0.75rem' }}>Calendario de Eventos</span>
              </div>
              
              <Calendar 
                events={events}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />
            </motion.div>

            {/* Evento seleccionado */}
            {selectedEvent && (
              <motion.div
                ref={eventDetailRef}
                className="nexus-event-detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={selectedEvent.image}
                  alt={`Evento ${selectedEvent.title} en NEXUS`}
                  className="nexus-event-detail-image"
                  loading="lazy"
                />
                <h3 className="nexus-event-detail-title">{selectedEvent.title}</h3>
                
                <div className="nexus-event-detail-info">
                  <div className="nexus-event-detail-item">
                    <Clock size={20} />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="nexus-event-detail-item">
                    <Music size={20} />
                    <span>{selectedEvent.dj}</span>
                  </div>
                  <div className="nexus-event-detail-item">
                    <Star size={20} />
                    <span>{selectedEvent.type}</span>
                  </div>
                </div>
                
                <p className="nexus-event-detail-description">{selectedEvent.description}</p>
                <div className="nexus-event-detail-price">Cover: {selectedEvent.cover}</div>
                
                <Link to="/reservas">
                  <motion.button
                    className="nexus-event-detail-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Reservar entrada para ${selectedEvent.title}`}
                  >
                    Reserva Ya
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="nexus-eventos-sidebar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="nexus-events-sidebar"
              variants={itemVariants}
            >
              <h2 className="nexus-events-sidebar-title">
                <CalendarIcon size={24} />
                Próximos Eventos
              </h2>

              <div className="space-y-4">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    className="nexus-event-list-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex items-start">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="nexus-event-list-item-image"
                      />
                      <div className="nexus-event-list-item-content">
                        <h3 className="nexus-event-list-item-title">{event.title}</h3>
                        <div className="nexus-event-list-item-date">
                          <CalendarIcon size={14} />
                          <span>{new Date(event.date).toLocaleDateString('es-ES')}</span>
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        <p className="nexus-event-list-item-dj">{event.dj}</p>
                        <div className="nexus-event-list-item-price">{event.cover}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="nexus-events-sidebar-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Todos los Eventos
              </motion.button>
            </motion.div>

            {/* Información adicional */}
            <motion.div
              className="nexus-events-info-card"
              variants={itemVariants}
            >
              <h3 className="nexus-events-info-title">Información Importante</h3>
              <div className="space-y-3">
                <div className="nexus-events-info-item">
                  <div className="nexus-events-info-dot" />
                  <p className="nexus-events-info-text">Dress code elegante requerido</p>
                </div>
                <div className="nexus-events-info-item">
                  <div className="nexus-events-info-dot" />
                  <p className="nexus-events-info-text">Entrada desde las 21:00</p>
                </div>
                <div className="nexus-events-info-item">
                  <div className="nexus-events-info-dot" />
                  <p className="nexus-events-info-text">Reservas VIP disponibles</p>
                </div>
                <div className="nexus-events-info-item">
                  <div className="nexus-events-info-dot" />
                  <p className="nexus-events-info-text">Estacionamiento valet disponible</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Eventos
