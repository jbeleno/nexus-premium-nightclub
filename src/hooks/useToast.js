import toast from 'react-hot-toast'

export const useToast = () => {
  const success = (message, options = {}) => {
    return toast.success(message, {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#D4AF37',
        color: '#000',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        padding: '16px',
        borderRadius: '12px',
      },
      iconTheme: {
        primary: '#000',
        secondary: '#D4AF37',
      },
      ...options,
    })
  }

  const error = (message, options = {}) => {
    return toast.error(message, {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#1E1E1E',
        color: '#EAEAEA',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        padding: '16px',
        borderRadius: '12px',
        border: '2px solid #D4AF37',
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#1E1E1E',
      },
      ...options,
    })
  }

  const loading = (message, options = {}) => {
    return toast.loading(message, {
      position: 'top-center',
      style: {
        background: '#1E1E1E',
        color: '#D4AF37',
        fontFamily: 'Roboto, sans-serif',
        padding: '16px',
        borderRadius: '12px',
      },
      ...options,
    })
  }

  const promise = (promise, messages) => {
    return toast.promise(
      promise,
      {
        loading: messages.loading || 'Cargando...',
        success: messages.success || '¡Éxito!',
        error: messages.error || 'Error',
      },
      {
        success: {
          style: {
            background: '#D4AF37',
            color: '#000',
          },
        },
        error: {
          style: {
            background: '#1E1E1E',
            color: '#EAEAEA',
            border: '2px solid #D4AF37',
          },
        },
      }
    )
  }

  return { success, error, loading, promise }
}

