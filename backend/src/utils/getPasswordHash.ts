import crypto from 'node:crypto'
import { env } from '../lib/env'

export const getPasswordHash = (password: string) => {
  return crypto.createHash('sha256').update(`${env.PASSWORD_SALT}${password}`).digest('hex')
}
