import Counter from '#islands/counter.tsx'
import { createRoute } from 'honox/factory'
import ContextExample from '#components/context-example.tsx'

export default createRoute((context, _next) => {
  return context.render(
    <main class="uppercase space-y-8">
      <article>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jasonformat.com/islands-architecture/"
          >
            ISLAND
          </a>{' '}
          EXAMPLE
        </p>
        <Counter />
      </article>
      <article>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="underline text-blue-500"
            href="https://hono.dev/docs/api/context"
          >
            CONTEXT
          </a>{' '}
          USAGE IN AN ISLAND EXAMPLE
        </p>
        <ContextExample />
        <p>
          TRY APPENDING{' '}
          <span class="lowercase bg-slate-400 text-black">`start`</span> QUERY
          PARAMETER TO THE URL
        </p>
        <p>
          FOR EXAMPLE{' '}
          <span class="lowercase bg-slate-400 text-black">`?start=5`</span>.{' '}
        </p>
        <a
          target="_blank"
          class="lowercase"
          rel="noopener noreferrer"
          href="https://hono-mdx-islands.pages.dev?start=5"
        >
          https://hono-mdx-islands.pages.dev?start=5
        </a>
        <br />
        THIS IS AN ISLAND THAT HAS ACCESS TO THE CONTEXT OBJECT!
      </article>
      <article>
        <p>CHECKOUT THE DUMMY 'BLOG POSTS'</p>
        <p>
          TO SEE MDX WITH FRONTMATTER AND REHYPE REMARK PLUGINS WORKING IN
          HONO/X
        </p>
        <p>
          <a href="/writings">WRITINGS</a>
        </p>
      </article>
    </main>,
  )
})
