import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

const Select = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  placeholder = "Selecciona una opción",
  required = false 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const selectRef = useRef(null)
  
  // Encontrar la opción seleccionada
  const selectedOption = options.find(opt => opt.value === value)
  
  // Filtrar opciones basadas en búsqueda
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Manejar selección de opción
  const handleSelect = (optionValue) => {
    onChange({
      target: {
        name: name,
        value: optionValue
      }
    })
    setIsOpen(false)
    setSearchTerm('')
  }
  
  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  return (
    <div className="nexus-select-wrapper" ref={selectRef}>
      {label && (
        <label className="nexus-select-label">
          {label} {required && <span className="nexus-select-required">*</span>}
        </label>
      )}
      
      {/* Input/Trigger */}
      <div 
        className={`nexus-select-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`nexus-select-value ${!selectedOption ? 'placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="nexus-select-icon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      
      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nexus-select-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search (opcional, solo si hay muchas opciones) */}
            {options.length > 5 && (
              <div className="nexus-select-search">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="nexus-select-search-input"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            
            {/* Options List */}
            <div className="nexus-select-options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    className={`nexus-select-option ${value === option.value ? 'selected' : ''}`}
                    onClick={() => handleSelect(option.value)}
                    whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="nexus-select-option-label">{option.label}</span>
                    {value === option.value && (
                      <Check size={18} className="nexus-select-option-check" />
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="nexus-select-empty">
                  No se encontraron opciones
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden input para validación de formulario */}
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />
    </div>
  )
}

export default Select

