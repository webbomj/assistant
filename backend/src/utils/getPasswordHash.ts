import crypto from 'node:crypto'

export const getPasswordHash = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('hex')
}
