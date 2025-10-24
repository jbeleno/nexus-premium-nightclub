import { apiClient } from './client'
import { API_ENDPOINTS } from '../../constants/apiEndpoints'

export const reservationsService = {
  async create(reservationData) {
    // Por ahora simulamos la llamada API con un mock
    // En producción, esto haría la llamada real al backend
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Reserva enviada:', reservationData)
        resolve({
          data: {
            id: Date.now(),
            ...reservationData,
            status: 'pending',
            createdAt: new Date().toISOString()
          },
          error: null
        })
      }, 1500) // Simula latencia de red
    })

    // Cuando tengas backend real, descomentar:
    // return apiClient.post(API_ENDPOINTS.RESERVATIONS, reservationData)
  },

  async getAll() {
    return apiClient.get(API_ENDPOINTS.RESERVATIONS)
  },

  async getById(id) {
    return apiClient.get(`${API_ENDPOINTS.RESERVATIONS}/${id}`)
  }
}

