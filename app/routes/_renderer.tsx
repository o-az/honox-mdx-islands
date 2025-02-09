import { Style } from 'hono/css'
import type { Context } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { HasIslands, Link, Script } from 'honox/server'

const IS_PRODUCTION = import.meta.env.PROD

export default jsxRenderer(
  ({ children, title, frontmatter, Layout: _ }, _context) => {
    // console.info(JSON.stringify({title,frontmatter}, undefined, 2))
    return (
      <html lang="en" class="font-mono size-full min-h-full min-w-full">
        <head>
          <meta charset="UTF-8" />
          <title>{title ?? frontmatter?.title ?? 'Lorem'}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Link rel="stylesheet" href="/app/style.css" />
          <Script src="/app/client.ts" />
          <Style />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌩️</text></svg>"
          />
        </head>
        <body class="size-full dark:text-stone-50 flex flex-col justify-between min-h-full min-w-full items-center">
          <header class="w-full pl-3 pt-2">
            <h1 class="text-2xl font-extrabold">Lorem Ipsum</h1>
            <nav class="uppercase">
              <ul>
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/writings">writings</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/o-az/honox-mdx-island"
                  >
                    source code
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main class="size-full max-w-2xl m-4 p-4">
            <article>{children}</article>
          </main>
          <footer className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/o-az/honox-mdx-islands"
              class="bg-emerald-300 font-extrabold p-2 text-black! no-underline! hover:bg-black hover:text-white!"
            >
              github.com/o-az/honox-mdx-islands
            </a>
          </footer>
        </body>
      </html>
    )
  },
)
