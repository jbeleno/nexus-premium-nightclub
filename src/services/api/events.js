import { apiClient } from './client'
import { API_ENDPOINTS } from '../../constants/apiEndpoints'
import { UPCOMING_EVENTS } from '../../data/events'

export const eventsService = {
  async getAll() {
    // Mock implementation - retorna datos locales
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: UPCOMING_EVENTS,
          error: null
        })
      }, 500)
    })

    // Cuando tengas backend real, descomentar:
    // return apiClient.get(API_ENDPOINTS.EVENTS)
  },

  async getById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = UPCOMING_EVENTS.find(e => e.id === parseInt(id))
        resolve({
          data: event || null,
          error: event ? null : 'Evento no encontrado'
        })
      }, 300)
    })

    // Cuando tengas backend real, descomentar:
    // return apiClient.get(API_ENDPOINTS.EVENT_BY_ID(id))
  }
}

