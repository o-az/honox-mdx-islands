import { logger } from 'hono/logger'
import { showRoutes } from 'hono/dev'
import type { Env } from '#global.d.ts'
import { createApp } from 'honox/server'
import { prettyJSON } from 'hono/pretty-json'

const app = createApp<{ Bindings: Env }>()

app.use(logger())
app.use(prettyJSON({ space: 2 }))

app.onError((error, context) => {
  console.info(error)
  return context.json({ error: error.message }, 500)
})

app.get('/ping', (context) => context.text('pong', 200))

showRoutes(app)

export default app
