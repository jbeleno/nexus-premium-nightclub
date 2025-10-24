import { z } from 'zod'
import { ERROR_MESSAGES } from '../../constants/errorMessages'

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .min(2, ERROR_MESSAGES.MIN_LENGTH(2))
    .max(100, ERROR_MESSAGES.MAX_LENGTH(100)),

  email: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .email(ERROR_MESSAGES.INVALID_EMAIL),

  mensaje: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .min(10, ERROR_MESSAGES.MIN_LENGTH(10))
    .max(1000, ERROR_MESSAGES.MAX_LENGTH(1000))
})

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.REQUIRED_FIELD)
    .email(ERROR_MESSAGES.INVALID_EMAIL)
})

