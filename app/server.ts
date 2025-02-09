import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

app.get('/ping', (context) => context.text('pong', 200))

showRoutes(app)

export default app
