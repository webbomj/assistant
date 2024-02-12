import cors from 'cors'
import express from 'express'
import { createAppContext, type AppContext } from './lib/ctx'
import { env } from './lib/env'
import { applyPassportToExpressApp } from './lib/passport'
import { applyTrpcToExpressApp } from './lib/trpc'
import { trpcRouter } from './router'

void (async () => {
  let ctx: AppContext | null = null

  try {
    ctx = createAppContext()
    const expressApp = express()
    expressApp.use(cors())
    applyPassportToExpressApp(expressApp, ctx)
    applyTrpcToExpressApp(expressApp, ctx, trpcRouter)
    expressApp.listen(env.PORT, () => {
      console.info(`Listening at http://localhost:${env.PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
})()
