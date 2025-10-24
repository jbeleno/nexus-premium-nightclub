const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const API_ENDPOINTS = {
  // Reservations
  RESERVATIONS: `${API_BASE_URL}/reservations`,
  
  // Events
  EVENTS: `${API_BASE_URL}/events`,
  EVENT_BY_ID: (id) => `${API_BASE_URL}/events/${id}`,
  
  // Menu
  MENU: `${API_BASE_URL}/menu`,
  MENU_BY_CATEGORY: (category) => `${API_BASE_URL}/menu/${category}`,
  
  // Newsletter
  NEWSLETTER: `${API_BASE_URL}/newsletter`,
  
  // Contact
  CONTACT: `${API_BASE_URL}/contact`
}

