import { Script } from 'honox/server'
import { HasIslands } from 'honox/server'
import { jsxRenderer } from 'hono/jsx-renderer'

const styleSheet = import.meta.env.PROD
  ? '/static/assets/style.css'
  : '/app/style.css'

export default jsxRenderer(({ children, Layout: _ }, context) => {
  return (
    <html
      lang="en"
      class="font-mono size-full min-h-full min-w-full scheme-dark"
    >
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lorem</title>
        <link rel="stylesheet" href={styleSheet} />
        {import.meta.env.PROD ? (
          <HasIslands>
            <Script
              src="/static/client.js"
              nonce={context.get('secureHeadersNonce')}
            />
          </HasIslands>
        ) : (
          <Script
            src="/app/client.ts"
            nonce={context.get('secureHeadersNonce')}
          />
        )}
      </head>
      <body class="size-full text-stone-50 flex flex-col justify-between min-h-full min-w-full items-center">
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
