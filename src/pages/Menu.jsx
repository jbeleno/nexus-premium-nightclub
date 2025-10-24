import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wine, Coffee, Crown, Flame } from 'lucide-react'
import ProductModal from '../components/ProductModal'
import SEO from '../components/SEO'
import { MENU_ITEMS, MENU_TABS } from '../data/menu'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('cocktails')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  const tabs = [
    { id: 'cocktails', name: 'Cócteles', icon: Wine },
    { id: 'bottles', name: 'Botellas', icon: Crown },
    { id: 'vip', name: 'VIP Packages', icon: Crown },
    { id: 'hookah', name: 'Hookah', icon: Flame }
  ]

  const menuItems = MENU_ITEMS

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="nexus-menu-page">
      <SEO 
        title="Menú y Precios Premium"
        description="Descubre nuestro menú premium: cócteles exclusivos, botellas de lujo, paquetes VIP y hookah. Los mejores precios para la mejor experiencia en NEXUS."
      />
      <div className="nexus-menu-container">
        {/* Header */}
        <motion.div
          className="nexus-menu-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="nexus-menu-title">
            <span className="nexus-menu-title-accent">Precios</span> Premium
          </h1>
          <p className="nexus-menu-subtitle">
            Conoce nuestros precios antes de visitarnos. Bebidas premium, paquetes VIP y experiencias exclusivas
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="nexus-menu-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                className={`nexus-menu-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="nexus-menu-tab-icon" size={20} />
                {tab.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeTab}
          className="nexus-menu-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems[activeTab].map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="nexus-menu-item-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="nexus-menu-item-image-container">
                <img
                  src={item.image}
                  alt={`${item.name} - Menú NEXUS`}
                  className="nexus-menu-item-image"
                  loading="lazy"
                />
                <div className="nexus-menu-item-price">
                  {item.price}
                </div>
                <div className="nexus-menu-item-overlay" />
              </div>
              <div className="nexus-menu-item-content">
                <h3 className="nexus-menu-item-title">{item.name}</h3>
                <p className="nexus-menu-item-description">{item.description}</p>
                <motion.button
                  className="nexus-menu-item-button"
                  onClick={() => handleOpenModal(item)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Ver detalles de ${item.name}`}
                >
                  Ver Detalles
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="nexus-menu-cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="nexus-menu-cta-title">
            ¿Listo para vivir la experiencia NEXUS?
          </h2>
          <p className="nexus-menu-cta-description">
            Reserva tu mesa VIP y disfruta de nuestros productos premium en el ambiente más exclusivo de la ciudad. 
            Nuestro equipo está listo para brindarte el mejor servicio.
          </p>
          <Link to="/reservas">
            <motion.button
              className="nexus-menu-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserva Ya
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Modal de Producto */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default Menu
