import { showRoutes } from 'hono/dev'
import type { Env } from '#global.d.ts'
import { createApp } from 'honox/server'

const app = createApp<{ Bindings: Env }>()

app.get('/ping', (context) => context.text('pong', 200))

showRoutes(app)

export default app
