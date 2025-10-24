export const ERROR_MESSAGES = {
  // Form validation
  REQUIRED_FIELD: 'Este campo es requerido',
  INVALID_EMAIL: 'Email inválido',
  INVALID_PHONE: 'Teléfono inválido',
  MIN_LENGTH: (min) => `Mínimo ${min} caracteres`,
  MAX_LENGTH: (max) => `Máximo ${max} caracteres`,
  
  // API errors
  NETWORK_ERROR: 'Error de conexión. Por favor, intenta de nuevo.',
  SERVER_ERROR: 'Error en el servidor. Intenta más tarde.',
  NOT_FOUND: 'Recurso no encontrado',
  UNAUTHORIZED: 'No autorizado',
  
  // Reservations
  RESERVATION_ERROR: 'Error al procesar la reserva',
  RESERVATION_SUCCESS: '¡Reserva enviada exitosamente!',
  
  // Generic
  GENERIC_ERROR: 'Ha ocurrido un error. Por favor, intenta de nuevo.'
}

