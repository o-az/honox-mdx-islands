import { Style } from 'hono/css'
import type { Context } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { HasIslands, Link, Script } from 'honox/server'

const IS_PRODUCTION = import.meta.env.PROD

export default jsxRenderer(({ children, Layout: _ }, context) => {
  return (
    <html lang="en" class="font-mono size-full min-h-full min-w-full">
      <head>
        <meta charset="UTF-8" />
        <title>Lorem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="stylesheet" href="/app/style.css" />
        <Script src="/app/client.ts" />
        <Style />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌩️</text></svg>"
        />
        {/* <DynamicLink />
        <DynamicScript context={context} /> */}
      </head>
      <body class="size-full dark:text-stone-50 flex flex-col justify-between min-h-full min-w-full items-center">
        <header>
          <h1>Lorem</h1>
          <a href="/">Home</a>
        </header>
        <main class="size-full max-w-96 m-4 p-4">
          <article>{children}</article>
        </main>
        <footer className="">footer</footer>
      </body>
    </html>
  )
})

export function DynamicLink() {
  return IS_PRODUCTION ? (
    <Link rel="stylesheet" href="/static/assets/style.css" />
  ) : (
    <Link rel="stylesheet" href="/app/style.css" />
  )
}

export function DynamicScript({ context }: { context: Context }) {
  return IS_PRODUCTION ? (
    <HasIslands>
      <Script
        src="/static/client.js"
        nonce={context.get('secureHeadersNonce')}
      />
    </HasIslands>
  ) : (
    <Script src="/app/client.ts" nonce={context.get('secureHeadersNonce')} />
  )
}
