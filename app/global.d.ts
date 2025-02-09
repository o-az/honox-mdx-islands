import {} from 'hono'
import type { Frontmatter } from '#types.ts'

interface Env {
  ENVIRONMENT: string
}

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      meta?: Frontmatter & { frontmatter: Frontmatter },
    ): Response | Promise<Response>
  }
}
