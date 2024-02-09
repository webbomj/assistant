import { trpc } from '../../lib/trpc'
import { zCreateIdeaTrpcInput } from './input'

export const createIdeaTrpcRoute = trpc.procedure.input(zCreateIdeaTrpcInput).mutation(async ({ input, ctx }) => {
  const ideaInDb = await ctx.prisma.idea.findUnique({
    where: {
      nick: input.nick,
    },
  })
  if (ideaInDb) {
    throw Error('Idea alredy exist')
  }

  await ctx.prisma.idea.create({
    data: input,
  })
  return true
})
