import { z } from 'zod'
import { ideas } from '../../lib/ideas'
import { trpc } from '../../lib/trpc'

export const createIdeaTrpcRoute = trpc.procedure
  .input(
    z.object({
      nick: z.string().min(1),
      name: z
        .string()
        .min(1)
        .regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
      description: z.string().min(1),
    })
  )
  .mutation(({ input }) => {
    ideas.unshift(input)
    return true
  })
