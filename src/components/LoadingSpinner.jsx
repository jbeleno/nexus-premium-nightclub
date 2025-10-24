import { motion } from 'framer-motion'

const LoadingSpinner = ({ fullScreen = false, size = 'md', message = 'Cargando...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-black flex items-center justify-center z-50'
    : 'flex items-center justify-center py-12'

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className={`${sizeClasses[size]} border-4 border-gray-800 border-t-[#D4AF37] rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        {message && (
          <motion.p
            className="text-[#D4AF37] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default LoadingSpinner

