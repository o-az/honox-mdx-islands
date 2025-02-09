import {} from 'hono'
import type { Meta } from '#types.ts'

interface Env {
  ENVIRONMENT: string
}

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      meta?: Meta & { frontmatter: Meta },
    ): Response | Promise<Response>
  }
}
