import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const ideas = [
  { nick: 'Aboba1', name: 'Idea 1', description: 'Description of idea 1...' },
  { nick: 'Aboba2', name: 'Idea 2', description: 'Description of idea 2...' },
  { nick: 'Aboba3', name: 'Idea 3', description: 'Description of idea 3...' },
  { nick: 'Aboba4', name: 'Idea 4', description: 'Description of idea 4...' },
  { nick: 'Aboba5', name: 'Idea 5', description: 'Description of idea 5...' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),

  getIdea: trpc.procedure
    .input(
      z.object({
        ideaNick: z.string(),
      })
    )
    .query(({ input }) => {
      const idea = ideas.find((el) => input.ideaNick === el.nick)
      return { idea: idea || undefined }
    }),
})

export type TrpcRouter = typeof trpcRouter
