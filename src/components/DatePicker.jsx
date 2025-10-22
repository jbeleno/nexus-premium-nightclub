import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

const DatePicker = ({ value, onChange, name, required = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const pickerRef = useRef(null)
  
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
  
  // Formatear fecha para mostrar
  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${day}/${month}/${year}`
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
    
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    
    onChange({
      target: {
        name: name,
        value: dateStr
      }
    })
    
    setIsOpen(false)
  }
  
  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Verificar si es el día seleccionado
  const isSelected = (day) => {
    if (!day || !value) return false
    const [year, month, selectedDay] = value.split('-')
    return day === parseInt(selectedDay) && 
           currentMonth === parseInt(month) - 1 && 
           currentYear === parseInt(year)
  }
  
  // Verificar si es hoy
  const isToday = (day) => {
    if (!day) return false
    const today = new Date()
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear()
  }
  
  // Nombre del mes
  const monthName = new Date(currentYear, currentMonth).toLocaleDateString('es-ES', { 
    month: 'long', 
    year: 'numeric' 
  })
  
  return (
    <div className="nexus-datepicker" ref={pickerRef}>
      <div 
        className="nexus-datepicker-input"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={formatDisplayDate(value)}
          placeholder="dd/mm/aaaa"
          readOnly
          required={required}
          className="nexus-form-input"
          style={{ cursor: 'pointer', paddingRight: '3rem' }}
        />
        <CalendarIcon 
          size={20} 
          className="nexus-datepicker-icon"
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--color-primary-gold)',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nexus-datepicker-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header con navegación */}
            <div className="nexus-datepicker-header">
              <motion.button
                type="button"
                className="nexus-datepicker-nav-button"
                onClick={previousMonth}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={16} />
              </motion.button>
              
              <div className="nexus-datepicker-month-name">
                {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
              </div>
              
              <motion.button
                type="button"
                className="nexus-datepicker-nav-button"
                onClick={nextMonth}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
            
            {/* Días de la semana */}
            <div className="nexus-datepicker-weekdays">
              {weekDays.map(day => (
                <div key={day} className="nexus-datepicker-weekday">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Grid de días */}
            <div className="nexus-datepicker-days-grid">
              {calendarDays.map((day, index) => {
                const isDaySelected = isSelected(day)
                const isDayToday = isToday(day)
                
                return (
                  <motion.button
                    key={index}
                    type="button"
                    className={`
                      nexus-datepicker-day-cell
                      ${!day ? 'empty' : ''}
                      ${isDaySelected ? 'selected' : ''}
                      ${isDayToday ? 'today' : ''}
                    `}
                    onClick={() => handleDayClick(day)}
                    whileHover={day ? { scale: 1.05 } : {}}
                    whileTap={day ? { scale: 0.95 } : {}}
                    disabled={!day}
                  >
                    {day && <span className="nexus-datepicker-day-number">{day}</span>}
                  </motion.button>
                )
              })}
            </div>
            
            <div className="nexus-datepicker-footer">
              <motion.button
                type="button"
                className="nexus-datepicker-today-button"
                onClick={() => {
                  const today = new Date()
                  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
                  onChange({
                    target: {
                      name: name,
                      value: dateStr
                    }
                  })
                  setCurrentDate(today)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Hoy
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DatePicker

