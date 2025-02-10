Showcasing how all the following work in harmony together:

- Hono
- [HonoX](https://github.com/honojs/honox)
- Vite
- [Island](https://jasonformat.com/islands-architecture/) Components
- TailwindCSS v4
- MDX
  - frontmatter
  - rehype plugins
  - remark plugins

# Get started

install dependencies
```sh
# upgrade bun first if you haven't in a while
bun upgrade

# install dependencies
bun install
```

dev
```sh
bun --bun vite --port 4200 --open
```

build
```sh
bun --bun vite build --mode client
bun --bun vite build
```

preview
```sh
bun x wrangler pages dev dist
```

deploy
```sh
bun x wrangler pages deploy dist --project-name='honox-mdx-islands'
```