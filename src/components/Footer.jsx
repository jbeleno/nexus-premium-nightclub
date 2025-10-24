import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Car
} from 'lucide-react'

const Footer = () => {
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
    <footer className="nexus-footer" role="contentinfo">
      <div className="nexus-footer-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Feature Badge */}
          <motion.div 
            className="nexus-footer-badge"
            variants={itemVariants}
          >
            <Car size={16} className="nexus-footer-badge-icon" />
            <span className="nexus-footer-badge-text">Estacionamiento valet disponible</span>
          </motion.div>

          <div className="nexus-footer-grid">
            {/* NEXUS Section */}
            <motion.div className="nexus-footer-section" variants={itemVariants}>
              <h3 className="nexus-footer-title">
                NEXUS
              </h3>
              <p className="nexus-footer-description">
                La experiencia nocturna más exclusiva de la ciudad. Donde la música, el lujo y la diversión se encuentran.
              </p>
              <div className="nexus-footer-social-icons">
                <motion.a
                  href="#"
                  className="nexus-footer-social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram size={20} aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="#"
                  className="nexus-footer-social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Síguenos en Facebook"
                >
                  <Facebook size={20} aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="#"
                  className="nexus-footer-social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Síguenos en Twitter"
                >
                  <Twitter size={20} aria-hidden="true" />
                </motion.a>
              </div>
            </motion.div>

            {/* Horarios Section */}
            <motion.div className="nexus-footer-section" variants={itemVariants}>
              <h3 className="nexus-footer-title">
                <Clock size={20} />
                Horarios
              </h3>
              <div className="nexus-footer-hours-list">
                <div className="nexus-footer-hours-item">
                  <span className="nexus-footer-hours-day">Jueves</span>
                  <span className="nexus-footer-hours-time">22:00 - 04:00</span>
                </div>
                <div className="nexus-footer-hours-item">
                  <span className="nexus-footer-hours-day">Viernes</span>
                  <span className="nexus-footer-hours-time">22:00 - 06:00</span>
                </div>
                <div className="nexus-footer-hours-item">
                  <span className="nexus-footer-hours-day">Sábado</span>
                  <span className="nexus-footer-hours-time">22:00 - 06:00</span>
                </div>
                <div className="nexus-footer-hours-item">
                  <span className="nexus-footer-hours-day">Domingo</span>
                  <span className="nexus-footer-hours-time">Cerrado</span>
                </div>
              </div>
            </motion.div>

            {/* Contacto Section */}
            <motion.div className="nexus-footer-section" variants={itemVariants}>
              <h3 className="nexus-footer-title">
                <Phone size={20} />
                Contacto
              </h3>
              <div className="nexus-footer-contact-list">
                <div className="nexus-footer-contact-item">
                  <div className="nexus-footer-contact-icon">
                    <MapPin size={16} />
                  </div>
                  <div className="nexus-footer-contact-content">
                    <p className="nexus-footer-contact-label">Dirección</p>
                    <p className="nexus-footer-contact-value">Av. Principal 123, Centro</p>
                  </div>
                </div>
                <div className="nexus-footer-contact-item">
                  <div className="nexus-footer-contact-icon">
                    <Phone size={16} />
                  </div>
                  <div className="nexus-footer-contact-content">
                    <p className="nexus-footer-contact-label">Teléfono</p>
                    <p className="nexus-footer-contact-value">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="nexus-footer-contact-item">
                  <div className="nexus-footer-contact-icon">
                    <Mail size={16} />
                  </div>
                  <div className="nexus-footer-contact-content">
                    <p className="nexus-footer-contact-label">Email</p>
                    <p className="nexus-footer-contact-value">info@nexusclub.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div className="nexus-footer-section" variants={itemVariants}>
              <h3 className="nexus-footer-title">
                Newsletter
              </h3>
              <p className="nexus-footer-description">
                Recibe las últimas noticias sobre eventos exclusivos y ofertas VIP.
              </p>
              <form className="nexus-footer-newsletter-form" aria-label="Formulario de suscripción al newsletter">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="nexus-footer-newsletter-input"
                  aria-label="Ingresa tu email para el newsletter"
                  required
                />
                <motion.button
                  type="submit"
                  className="nexus-footer-newsletter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Suscribirse al newsletter"
                >
                  Suscribirse
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="nexus-footer-bottom"
            variants={itemVariants}
          >
            <div className="nexus-footer-bottom-content">
              <p className="nexus-footer-copyright">
                © 2024 NEXUS Premium Nightclub. Todos los derechos reservados.
              </p>
              <nav className="nexus-footer-legal-links" aria-label="Enlaces legales">
                <a 
                  href="#" 
                  className="nexus-footer-legal-link"
                >
                  Política de Privacidad
                </a>
                <a 
                  href="#" 
                  className="nexus-footer-legal-link"
                >
                  Términos de Servicio
                </a>
                <a 
                  href="#" 
                  className="nexus-footer-legal-link"
                >
                  Cookies
                </a>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
