import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Phone, Mail, MapPin, Clock, Crown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import DatePicker from '../components/DatePicker'
import Select from '../components/Select'
import SEO from '../components/SEO'
import { reservationSchema } from '../services/validation/reservationSchema'
import { reservationsService } from '../services/api/reservations'
import { useReservationStore } from '../store/useReservationStore'
import { useToast } from '../hooks/useToast'

const Reservas = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const addReservation = useReservationStore((state) => state.addReservation)
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    resolver: zodResolver(reservationSchema),
    mode: 'onBlur'
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    const loadingToast = toast.loading('Enviando reserva...')

    try {
      const { data: reservation, error } = await reservationsService.create(data)
      
      if (error) {
        throw new Error(error)
      }

      addReservation(reservation)
      toast.success('¡Reserva enviada exitosamente! Te contactaremos pronto.')
      reset()
    } catch (error) {
      toast.error(error.message || 'Error al enviar la reserva. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
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
    <div className="nexus-reservas-page">
      <SEO 
        title="Reservas VIP"
        description="Reserva tu mesa VIP en NEXUS Premium Nightclub. Servicio exclusivo, botellas premium y la mejor experiencia nocturna de la ciudad."
      />
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
                      {...register('nombre')}
                      className={`nexus-form-input ${errors.nombre ? 'border-red-500' : ''}`}
                      placeholder="Tu nombre completo"
                      aria-invalid={errors.nombre ? 'true' : 'false'}
                      disabled={isSubmitting}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.nombre.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      {...register('telefono')}
                      className={`nexus-form-input ${errors.telefono ? 'border-red-500' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      aria-invalid={errors.telefono ? 'true' : 'false'}
                      disabled={isSubmitting}
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.telefono.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div className="nexus-form-field" variants={itemVariants}>
                  <label className="nexus-form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`nexus-form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="tu@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                <div className="nexus-form-grid-2">
                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      {...register('fecha')}
                      className={`nexus-form-input ${errors.fecha ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.fecha && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.fecha.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Hora *
                    </label>
                    <select
                      {...register('hora')}
                      className={`nexus-form-select ${errors.hora ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona hora</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                      <option value="00:00">00:00</option>
                      <option value="00:30">00:30</option>
                    </select>
                    {errors.hora && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.hora.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                <div className="nexus-form-grid-2">
                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Número de Personas *
                    </label>
                    <select
                      {...register('personas')}
                      className={`nexus-form-select ${errors.personas ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
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
                      <option value="9">9 personas</option>
                      <option value="10">10 personas</option>
                      <option value="11+">11+ personas</option>
                    </select>
                    {errors.personas && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.personas.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div className="nexus-form-field" variants={itemVariants}>
                    <label className="nexus-form-label">
                      Tipo de Reserva *
                    </label>
                    <select
                      {...register('tipoReserva')}
                      className={`nexus-form-select ${errors.tipoReserva ? 'border-red-500' : ''}`}
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona tipo</option>
                      <option value="general">General</option>
                      <option value="vip">VIP</option>
                      <option value="premium">Premium</option>
                      <option value="exclusive">Exclusive</option>
                    </select>
                    {errors.tipoReserva && (
                      <p className="text-red-500 text-sm mt-1" role="alert">
                        {errors.tipoReserva.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div className="nexus-form-field" variants={itemVariants}>
                  <label className="nexus-form-label">
                    Mensaje Adicional
                  </label>
                  <textarea
                    {...register('mensaje')}
                    className={`nexus-form-textarea ${errors.mensaje ? 'border-red-500' : ''}`}
                    placeholder="Cuéntanos sobre ocasión especial, preferencias de mesa, etc."
                    disabled={isSubmitting}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.mensaje.message}
                    </p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  className="nexus-form-submit-button"
                  variants={itemVariants}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                  aria-label="Enviar reserva"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Reserva'}
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
