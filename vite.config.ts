import honox from 'honox/vite'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import { defineConfig } from 'vite'
import rehypeSlug from 'rehype-slug'
import tailwindcss from '@tailwindcss/vite'
import remarkSmartypants from 'remark-smartypants'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype'

const entry = './app/server.ts'

export default defineConfig((_config) => ({
  plugins: [
    honox({ islands: true }),
    ssg({ entry }),
    tailwindcss(),
    mdx({
      jsxImportSource: 'hono/jsx',
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypeShiki,
          <RehypeShikiOptions>{
            themes: {
              dark: 'github-dark',
              light: 'github-light',
            },
          },
        ],
      ],
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        remarkSmartypants,
        remarkMdxFrontmatter,
      ],
    }),
  ],
}))
