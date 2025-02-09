import Counter from '#islands/counter.tsx'
import { createRoute } from 'honox/factory'
import ContextExample from '#components/context-example.tsx'

export default createRoute((context) => {
  return context.render(
    <main>
      <h2>gm</h2>
      <Counter />
      <br />
      <ContextExample />
      <br />
      <a href="/writings">Writings</a>
    </main>,
  )
})
