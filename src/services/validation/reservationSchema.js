import { z } from 'zod'
import { ERROR_MESSAGES } from '../../constants/errorMessages'

export const reservationSchema = z.object({
  nombre: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .min(2, ERROR_MESSAGES.MIN_LENGTH(2))
    .max(100, ERROR_MESSAGES.MAX_LENGTH(100)),

  telefono: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .regex(
      /^[\d\s\+\-\(\)]+$/,
      ERROR_MESSAGES.INVALID_PHONE
    ),

  email: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .email(ERROR_MESSAGES.INVALID_EMAIL),

  fecha: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  hora: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  personas: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  tipoReserva: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  mensaje: z
    .string()
    .max(500, ERROR_MESSAGES.MAX_LENGTH(500))
    .optional()
})

