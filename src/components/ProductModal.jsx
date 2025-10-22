import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star } from 'lucide-react'

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="nexus-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="nexus-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="nexus-modal-content">
              {/* Close Button */}
              <motion.button
                className="nexus-modal-close"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              
              {/* Image */}
              <div className="nexus-modal-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="nexus-modal-image"
                />
                <div className="nexus-modal-image-overlay" />
                
                {/* Badge Premium */}
                <div className="nexus-modal-badge">
                  <Star size={16} />
                  <span>Premium</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="nexus-modal-body">
                {/* Header */}
                <div className="nexus-modal-header">
                  <h2 className="nexus-modal-title">{product.name}</h2>
                  <div className="nexus-modal-price">{product.price}</div>
                </div>
                
                {/* Description */}
                <div className="nexus-modal-description">
                  <h3 className="nexus-modal-section-title">Descripción</h3>
                  <p className="nexus-modal-text">{product.description}</p>
                </div>
                
                {/* Info adicional */}
                <div className="nexus-modal-info">
                  <p className="nexus-modal-info-text">
                    ✨ Servicio premium con atención personalizada
                  </p>
                  <p className="nexus-modal-info-text">
                    🎯 Producto exclusivo de NEXUS Premium Nightclub
                  </p>
                  <p className="nexus-modal-info-text">
                    📞 Para más información, consulta con nuestro staff
                  </p>
                </div>
                
                {/* Actions */}
                <div className="nexus-modal-actions">
                  <motion.button
                    className="nexus-modal-button-close-full"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cerrar
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProductModal

