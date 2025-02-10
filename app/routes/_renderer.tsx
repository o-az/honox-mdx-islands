import { Style } from 'hono/css'
import { Link, Script } from 'honox/server'
import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(
  ({ children, title, frontmatter, Layout: _ }, _context) => {
    return (
      <html lang="en" class="font-mono dark dark:bg-[#111314] bg-[#fff8fc]">
        <head>
          <meta charset="UTF-8" />
          <title>{title ?? frontmatter?.title ?? 'Lorem'}</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌩</text></svg>"
          ></link>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <Link rel="stylesheet" href="/app/style.css" />
          <Script src="/app/client.ts" />
          <Style />
        </head>
        <body class="m-0 dark:text-stone-50 flex flex-col justify-between items-center">
          <header class="w-full pl-3 pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/o-az/honox-mdx-islands"
              class="bg-emerald-300 font-extrabold p-1 dark:text-black! text-white! no-underline! hover:bg-black hover:text-white!"
            >
              github.com/o-az/honox-mdx-islands
            </a>
            <h1 class="text-3xl font-extrabold">Lorem Ipsum</h1>
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
                    href="https://github.com/o-az/honox-mdx-islands"
                  >
                    source code
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main class="max-w-2xl m-4 p-4">
            <article>{children}</article>
          </main>
        </body>
      </html>
    )
  },
)
