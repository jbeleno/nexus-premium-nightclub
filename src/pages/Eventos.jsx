import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Music, Users, Star } from 'lucide-react'
import imgExample from '../assets/images/img.jpg'

const Eventos = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Datos de ejemplo para eventos
  const events = [
    {
      id: 1,
      title: "Neon Dreams",
      date: "2024-12-15",
      time: "22:00",
      dj: "DJ Electric",
      cover: "$30",
      description: "Una noche épica con los mejores beats electrónicos y luces neón que iluminarán tu experiencia.",
      image: imgExample,
      type: "Electrónica"
    },
    {
      id: 2,
      title: "Electric Nights",
      date: "2024-12-22",
      time: "22:00",
      dj: "DJ Storm",
      cover: "$25",
      description: "Noche de música electrónica con los mejores DJs internacionales y efectos visuales increíbles.",
      image: imgExample,
      type: "House"
    },
    {
      id: 3,
      title: "VIP Experience",
      date: "2024-12-29",
      time: "21:00",
      dj: "DJ Premium",
      cover: "$50",
      description: "Experiencia VIP exclusiva con servicio de mesa privada y botellas premium.",
      image: imgExample,
      type: "VIP"
    },
    {
      id: 4,
      title: "New Year's Eve",
      date: "2024-12-31",
      time: "21:00",
      dj: "DJ Countdown",
      cover: "$75",
      description: "Celebra el año nuevo con nosotros en la fiesta más exclusiva de la ciudad.",
      image: imgExample,
      type: "Especial"
    }
  ]

  // Generar días del mes actual
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const getEventsForDate = (day) => {
    if (!day) return []
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
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
            <motion.div
              className="nexus-calendar-section"
              variants={itemVariants}
            >
              <h2 className="nexus-calendar-header">
                <Calendar size={24} />
                Calendario de Eventos
              </h2>

              <div className="nexus-calendar-month-header">
                <h3 className="nexus-calendar-month-title">
                  {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </h3>
              </div>

              {/* Días de la semana */}
              <div className="nexus-calendar-weekdays">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                  <div key={day} className="nexus-calendar-weekday">
                    {day}
                  </div>
                ))}
              </div>

              {/* Días del mes */}
              <div className="nexus-calendar-grid">
                {days.map((day, index) => {
                  const dayEvents = getEventsForDate(day)
                  const hasEvents = dayEvents.length > 0
                  
                  return (
                    <motion.div
                      key={index}
                      className={`nexus-calendar-day ${day === null ? 'empty' : ''} ${hasEvents ? 'has-event' : ''} ${selectedDate === day ? 'selected' : ''}`}
                      variants={itemVariants}
                      whileHover={{ scale: hasEvents ? 1.05 : 1.02 }}
                      onClick={() => {
                        if (day && hasEvents) {
                          setSelectedDate(day)
                          setSelectedEvent(dayEvents[0])
                        }
                      }}
                    >
                      {day && (
                        <>
                          {day}
                          {hasEvents && <div className="nexus-event-indicator" />}
                        </>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Evento seleccionado */}
            {selectedEvent && (
              <motion.div
                className="nexus-event-detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="nexus-event-detail-image"
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
                
                <motion.button
                  className="nexus-event-detail-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reservar Ahora
                </motion.button>
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
                <Calendar size={24} />
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
                          <Calendar size={14} />
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
