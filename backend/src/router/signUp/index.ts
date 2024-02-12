import { trpc } from '../../lib/trpc'
import { zSingUpTrpcInput } from './input'

export const signUpTrpcRoute = trpc.procedure.input(zSingUpTrpcInput).mutation(async ({ input, ctx }) => {
  const existUser = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  })

  if (existUser) {
    throw new Error('User with this nick already exists')
  }

  await ctx.prisma.user.create({
    data: input,
  })

  return true
})
