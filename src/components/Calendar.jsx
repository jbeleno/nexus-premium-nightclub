import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = ({ events = [], onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  
  // Días de la semana
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  
  // Obtener primer día del mes
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  // Obtener último día del mes
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  
  // Generar días del calendario
  const calendarDays = []
  
  // Días vacíos al inicio
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  
  // Días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }
  
  // Verificar si un día tiene eventos
  const hasEvent = (day) => {
    if (!day) return false
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.some(event => event.date === dateStr)
  }
  
  // Obtener eventos de un día
  const getEventsForDate = (day) => {
    if (!day) return []
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }
  
  // Verificar si es el día seleccionado
  const isSelected = (day) => {
    if (!day || !selectedDate) return false
    return selectedDate === day
  }
  
  // Verificar si es hoy
  const isToday = (day) => {
    if (!day) return false
    const today = new Date()
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear()
  }
  
  // Navegar al mes anterior
  const previousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1))
  }
  
  // Navegar al mes siguiente
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1))
  }
  
  // Manejar click en día
  const handleDayClick = (day) => {
    if (!day) return
    const dayEvents = getEventsForDate(day)
    if (onDateSelect) {
      onDateSelect(day, dayEvents)
    }
  }
  
  // Nombre del mes
  const monthName = new Date(currentYear, currentMonth).toLocaleDateString('es-ES', { 
    month: 'long', 
    year: 'numeric' 
  })
  
  return (
    <div className="nexus-calendar-wrapper">
      {/* Header con navegación */}
      <div className="nexus-calendar-navigation">
        <motion.button
          className="nexus-calendar-nav-button"
          onClick={previousMonth}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={20} />
        </motion.button>
        
        <h3 className="nexus-calendar-month-name">
          {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
        </h3>
        
        <motion.button
          className="nexus-calendar-nav-button"
          onClick={nextMonth}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
      
      {/* Días de la semana */}
      <div className="nexus-calendar-weekdays">
        {weekDays.map(day => (
          <div key={day} className="nexus-calendar-weekday">
            {day}
          </div>
        ))}
      </div>
      
      {/* Grid de días */}
      <div className="nexus-calendar-days-grid">
        {calendarDays.map((day, index) => {
          const dayHasEvent = hasEvent(day)
          const isDaySelected = isSelected(day)
          const isDayToday = isToday(day)
          
          return (
            <motion.div
              key={index}
              className={`
                nexus-calendar-day-cell
                ${!day ? 'empty' : ''}
                ${dayHasEvent ? 'has-event' : ''}
                ${isDaySelected ? 'selected' : ''}
                ${isDayToday ? 'today' : ''}
              `}
              onClick={() => handleDayClick(day)}
              whileHover={day ? { scale: 1.05 } : {}}
              whileTap={day ? { scale: 0.95 } : {}}
            >
              {day && (
                <>
                  <span className="nexus-calendar-day-number">{day}</span>
                  {dayHasEvent && (
                    <div className="nexus-calendar-event-dots">
                      {getEventsForDate(day).slice(0, 3).map((_, i) => (
                        <span key={i} className="nexus-calendar-event-dot" />
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar

