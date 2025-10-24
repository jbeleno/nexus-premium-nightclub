import { ERROR_MESSAGES } from '../../constants/errorMessages'

class APIClient {
  constructor(baseURL = '') {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(this.handleErrorStatus(response.status))
      }

      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      return { 
        data: null, 
        error: error.message || ERROR_MESSAGES.GENERIC_ERROR 
      }
    }
  }

  handleErrorStatus(status) {
    switch (status) {
      case 400:
        return 'Solicitud inválida'
      case 401:
        return ERROR_MESSAGES.UNAUTHORIZED
      case 404:
        return ERROR_MESSAGES.NOT_FOUND
      case 500:
        return ERROR_MESSAGES.SERVER_ERROR
      default:
        return ERROR_MESSAGES.GENERIC_ERROR
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' })
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' })
  }
}

export const apiClient = new APIClient()

