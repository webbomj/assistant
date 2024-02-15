import * as _ from 'lodash'
import { z } from 'zod'
import { trpc } from '../../../lib/trpc'

export const getIdeaTrpcRoute = trpc.procedure
  .input(z.object({ ideaNick: z.string() }))
  .query(async ({ input, ctx }) => {
    const rawIdea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.ideaNick,
      },
      include: {
        author: {
          select: {
            id: true,
            nick: true,
            name: true,
          },
        },
        IdeaLike: {
          where: {
            userId: ctx.me?.id,
          },
          select: {
            id: true,
          },
        },
        _count: {
          select: {
            IdeaLike: true,
          },
        },
      },
    })

    const isLikedByMe = !!rawIdea?.IdeaLike.length
    const likesCount = rawIdea?._count.IdeaLike || 0
    const idea = rawIdea && { ..._.omit(rawIdea, ['IdeaLike', '_count']), isLikedByMe, likesCount }

    return { idea: idea || null }
  })
