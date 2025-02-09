import Counter from '#islands/counter.tsx'
import { useRequestContext } from 'hono/jsx-renderer'

/**
 * you cannot access a Context object in an Island component directly
 * instead, pass it as a value from components outside the Island
 *
 * https://github.com/honojs/honox/blob/main/README.md?plain=1#L406-L416
 */

export default function ContextExample() {
  const context = useRequestContext()

  const start = Number.parseInt(context.req.query('start') ?? '0')

  return <Counter start={start} />
}
