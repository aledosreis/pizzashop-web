import { z } from 'zod'

const envSchema = z.object({
  VITE_API_UTL: z.string().url(),
  VOTE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
