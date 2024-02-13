import { type User } from '@prisma/client'

export const toClientMe = (user: User | null) => {
  return (
    user && {
      id: user.id,
      nick: user.nick,
      name: user.name,
    }
  )
}
