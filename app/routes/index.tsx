import Counter from '#islands/counter.tsx'
import { createRoute } from 'honox/factory'
import { Suspense } from 'hono/jsx/streaming'
import AsyncComponent from '#components/async-component.tsx'
import ContextExample from '#components/context-example.tsx'

export default createRoute((context, _next) => {
  return context.render(
    <main class="uppercase space-y-8">
      <article>
        <p class="sm:text-xl text-sm font-semibold">
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
        <p class="sm:text-xl text-sm font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="underline text-blue-500"
            href="https://hono.dev/docs/api/context"
          >
            CONTEXT
          </a>{' '}
          USAGE IN AN ISLAND
        </p>
        <ContextExample />
        <p class="sm:text-sm text-xs">
          TRY APPENDING{' '}
          <span class="lowercase bg-slate-400 text-black">`start`</span> QUERY
          PARAMETER TO THE URL
        </p>
        <p class="sm:text-sm text-xs">
          FOR EXAMPLE{' '}
          <span class="lowercase bg-slate-400 text-black">`?start=5`</span>.{' '}
        </p>
        <a
          target="_blank"
          class="lowercase"
          rel="noopener noreferrer"
          href="https://honox-mdx-islands.pages.dev?start=5"
        >
          https://honox-mdx-islands.pages.dev?start=5
        </a>
        <br />
        <p class="sm:text-sm text-xs">
          AN ISLAND THAT HAS ACCESS TO THE CONTEXT OBJECT! [
          <a href="https://github.com/o-az/honox-mdx-islands/blob/main/app/components/context-example.tsx">
            CODE
          </a>
          ]
        </p>
      </article>
      <article>
        <Suspense fallback={<div>Loading...</div>}>
          <p class="sm:text-xl text-sm font-semibold">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hono.dev/docs/guides/jsx#async-component"
            >
              ASYNC COMPONENT
            </a>
          </p>
          <p class="sm:text-sm text-xs">
            HAS A DATA FETCHER THAT'S AWAITED DIRECTLY AND ASYNCHRONOUSLY
          </p>
          <p class="sm:text-sm text-xs">
            IT'S ALSO WRAPPED IN SUSPENSE [
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/o-az/honox-mdx-islands/blob/main/app/components/async-component.tsx"
            >
              CODE
            </a>
            ]
          </p>
          <AsyncComponent />
        </Suspense>
      </article>
      <article>
        <p class="sm:text-xl text-sm font-semibold">
          CHECKOUT THE DUMMY 'BLOG POSTS'
        </p>
        <p class="sm:text-sm text-xs">
          TO SEE MDX WITH FRONTMATTER AND REHYPE REMARK PLUGINS WORKING IN
          HONO/X. [<a href="/writings">WRITINGS</a>]
        </p>
        <p></p>
      </article>
    </main>,
  )
})
