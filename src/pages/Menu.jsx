import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wine, Coffee, Crown, Flame } from 'lucide-react'
import imgExample from '../assets/images/img.jpg'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('cocktails')

  const tabs = [
    { id: 'cocktails', name: 'Cócteles', icon: Wine },
    { id: 'bottles', name: 'Botellas', icon: Crown },
    { id: 'vip', name: 'VIP Packages', icon: Crown },
    { id: 'hookah', name: 'Hookah', icon: Flame }
  ]

  const menuItems = {
    cocktails: [
      {
        id: 1,
        name: 'Nexus Signature',
        description: 'Vodka premium, licor de coco, jugo de piña y un toque de lima',
        price: '$18',
        image: imgExample
      },
      {
        id: 2,
        name: 'Electric Blue',
        description: 'Tequila azul, triple sec, jugo de arándano y soda de lima',
        price: '$16',
        image: imgExample
      },
      {
        id: 3,
        name: 'Neon Dreams',
        description: 'Gin premium, agua de rosas, limón y un toque de miel',
        price: '$20',
        image: imgExample
      },
      {
        id: 4,
        name: 'Gold Rush',
        description: 'Whisky premium, miel, limón y agua mineral',
        price: '$22',
        image: imgExample
      },
      {
        id: 5,
        name: 'Purple Haze',
        description: 'Vodka, triple sec, jugo de uva y soda',
        price: '$17',
        image: imgExample
      }
    ],
    bottles: [
      {
        id: 1,
        name: 'Dom Pérignon',
        description: 'Champagne premium francés, perfecto para celebraciones especiales',
        price: '$350',
        image: imgExample
      },
      {
        id: 2,
        name: 'Johnnie Walker Blue',
        description: 'Whisky escocés de edición limitada, sabor suave y elegante',
        price: '$280',
        image: imgExample
      },
      {
        id: 3,
        name: 'Grey Goose Vodka',
        description: 'Vodka francés premium, destilado con trigo francés',
        price: '$120',
        image: imgExample
      },
      {
        id: 4,
        name: 'Hennessy XO',
        description: 'Cognac francés premium, envejecido en barricas de roble',
        price: '$200',
        image: imgExample
      },
      {
        id: 5,
        name: 'Patrón Silver',
        description: 'Tequila premium mexicano, destilado 3 veces',
        price: '$150',
        image: imgExample
      },
      {
        id: 6,
        name: 'Moët & Chandon',
        description: 'Champagne francés clásico, burbujas elegantes',
        price: '$180',
        image: imgExample
      }
    ],
    vip: [
      {
        id: 1,
        name: 'VIP Table Package',
        description: 'Mesa privada para 6 personas, botella premium incluida',
        price: '$400',
        image: imgExample
      },
      {
        id: 2,
        name: 'Ultimate VIP Experience',
        description: 'Mesa VIP para 8 personas, 2 botellas premium, servicio dedicado',
        price: '$600',
        image: imgExample
      },
      {
        id: 3,
        name: 'Royal VIP Package',
        description: 'Mesa exclusiva, champagne premium, acceso prioritario',
        price: '$800',
        image: imgExample
      },
      {
        id: 4,
        name: 'Bottle Service',
        description: 'Servicio de botella con mixers, hielo y servicio personalizado',
        price: '$250',
        image: imgExample
      }
    ],
    hookah: [
      {
        id: 1,
        name: 'Double Apple',
        description: 'Tabaco tradicional con sabor a manzana verde y roja',
        price: '$25',
        image: imgExample
      },
      {
        id: 2,
        name: 'Mint Chocolate',
        description: 'Combinación refrescante de menta y chocolate',
        price: '$30',
        image: imgExample
      },
      {
        id: 3,
        name: 'Grape Mint',
        description: 'Sabor a uva con un toque refrescante de menta',
        price: '$28',
        image: imgExample
      },
      {
        id: 4,
        name: 'Strawberry Kiwi',
        description: 'Combinación tropical de fresa y kiwi',
        price: '$32',
        image: imgExample
      }
    ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="nexus-menu-page">
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
                  alt={item.name}
                  className="nexus-menu-item-image"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
          <motion.button
            className="nexus-menu-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar Mesa VIP
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
