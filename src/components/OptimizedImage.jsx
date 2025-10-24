import { useState, memo } from 'react'
import { motion } from 'framer-motion'

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  objectFit = 'cover',
  aspectRatio,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => setIsLoaded(true)
  const handleError = () => setHasError(true)

  if (hasError) {
    return (
      <div 
        className={`${className} flex items-center justify-center bg-gray-800`}
        style={{ aspectRatio }}
        role="img"
        aria-label="Imagen no disponible"
      >
        <span className="text-gray-500 text-sm">Imagen no disponible</span>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden" style={{ aspectRatio }}>
      {/* Placeholder mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          objectFit,
          width: '100%',
          height: '100%'
        }}
        {...props}
      />
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage

