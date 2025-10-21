import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Phone, Mail, MapPin, Clock, Crown } from 'lucide-react'

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    personas: '',
    tipoReserva: 'general',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar la reserva
    console.log('Reserva enviada:', formData)
    alert('¡Reserva enviada exitosamente! Te contactaremos pronto.')
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
    <div className="nexus-reservas-page">
      <div className="nexus-reservas-container">
        {/* Header */}
        <motion.div
          className="nexus-reservas-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="nexus-reservas-title">
            <span className="nexus-reservas-title-accent">Reservas</span> VIP
          </h1>
          <p className="nexus-reservas-subtitle">
            Asegura tu lugar en la experiencia nocturna más exclusiva de la ciudad
          </p>
        </motion.div>

        <div className="nexus-reservas-layout">
          {/* Formulario */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="nexus-reservation-form-container"
              variants={itemVariants}
            >
              <h2 className="nexus-reservation-form-title">
                <Calendar size={24} />
                Formulario de Reserva
              </h2>

              <form onSubmit={handleSubmit} className="nexus-form-grid">
                <div className="nexus-form-grid-2">
                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="nexus-form-input"
                      placeholder="Tu nombre completo"
                    />
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="nexus-form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>
                </div>

                <motion.div className="nexus-form-field" variants={itemVariants}>
                  <label className="nexus-form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="nexus-form-input"
                    placeholder="tu@email.com"
                  />
                </motion.div>

                <div className="nexus-form-grid-2">
                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      required
                      className="nexus-form-input"
                    />
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Hora *
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                      required
                      className="nexus-form-select"
                    >
                      <option value="">Selecciona hora</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                    </select>
                  </motion.div>
                </div>

                <div className="nexus-form-grid-2">
                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Número de Personas *
                    </label>
                    <select
                      name="personas"
                      value={formData.personas}
                      onChange={handleChange}
                      required
                      className="nexus-form-select"
                    >
                      <option value="">Selecciona</option>
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5 personas</option>
                      <option value="6">6 personas</option>
                      <option value="7">7 personas</option>
                      <option value="8">8 personas</option>
                      <option value="9+">9+ personas</option>
                    </select>
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Tipo de Reserva *
                    </label>
                    <select
                      name="tipoReserva"
                      value={formData.tipoReserva}
                      onChange={handleChange}
                      required
                      className="nexus-form-select"
                    >
                      <option value="general">General</option>
                      <option value="vip">VIP</option>
                      <option value="premium">Premium</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div className="nexus-form-field" variants={itemVariants}>
                  <label className="nexus-form-label">
                    Mensaje Adicional
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="nexus-form-textarea"
                    placeholder="Cuéntanos sobre ocasión especial, preferencias de mesa, etc."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="nexus-form-submit-button"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Reserva
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="nexus-reservas-sidebar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Información de contacto */}
            <motion.div
              className="nexus-info-card"
              variants={itemVariants}
            >
              <h2 className="nexus-info-card-title">
                <Phone size={24} />
                Información de Contacto
              </h2>

              <div className="space-y-4">
                <div className="nexus-info-item">
                  <Phone className="nexus-info-item-icon" size={20} />
                  <div className="nexus-info-item-content">
                    <h4>Teléfono</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="nexus-info-item">
                  <Mail className="nexus-info-item-icon" size={20} />
                  <div className="nexus-info-item-content">
                    <h4>Email</h4>
                    <p>reservas@nexusclub.com</p>
                  </div>
                </div>

                <div className="nexus-info-item">
                  <Clock className="nexus-info-item-icon" size={20} />
                  <div className="nexus-info-item-content">
                    <h4>Horario de Atención</h4>
                    <p>Lunes a Domingo: 18:00 - 02:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ubicación */}
            <motion.div
              className="nexus-info-card"
              variants={itemVariants}
            >
              <h2 className="nexus-info-card-title">
                <MapPin size={24} />
                Ubicación
              </h2>

              <div className="mb-6">
                <p className="nexus-info-item-content p">
                  Av. Principal 123<br />
                  Zona Rosa, Ciudad<br />
                  Código Postal: 12345
                </p>
              </div>

              {/* Mapa placeholder */}
              <div className="nexus-map-placeholder">
                <MapPin size={32} />
                <p>Mapa Interactivo</p>
                <p>Google Maps integrado</p>
              </div>
            </motion.div>

            {/* Políticas */}
            <motion.div
              className="nexus-policies-card"
              variants={itemVariants}
            >
              <h2 className="nexus-policies-card-title">
                <Crown size={24} />
                Políticas de Reserva
              </h2>

              <div className="space-y-4">
                <div className="nexus-policy-item">
                  <div className="nexus-policy-item-dot" />
                  <p className="nexus-policy-item-text">Las reservas deben confirmarse con 24 horas de anticipación</p>
                </div>
                <div className="nexus-policy-item">
                  <div className="nexus-policy-item-dot" />
                  <p className="nexus-policy-item-text">Dress code elegante requerido</p>
                </div>
                <div className="nexus-policy-item">
                  <div className="nexus-policy-item-dot" />
                  <p className="nexus-policy-item-text">Cancelaciones sin cargo hasta 2 horas antes</p>
                </div>
                <div className="nexus-policy-item">
                  <div className="nexus-policy-item-dot" />
                  <p className="nexus-policy-item-text">Servicio VIP disponible con reserva anticipada</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Reservas
