import honox from 'honox/vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import client from 'honox/vite/client'
import tailwindcss from '@tailwindcss/vite'
import remarkSmartypants from 'remark-smartypants'
import remarkFrontmatter from 'remark-frontmatter'
import { defineConfig, type PluginOption } from 'vite'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import honoVitePages from '@hono/vite-build/cloudflare-pages'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype'

const plugins = [
  tailwindcss(),
  mdx({
    jsxImportSource: 'hono/jsx',
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        rehypeShiki,
        <RehypeShikiOptions>{
          themes: { dark: 'github-dark', light: 'github-light' },
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
] satisfies Array<PluginOption>

export default defineConfig((config) => {
  if (config.mode === 'client') {
    return {
      plugins: [client(), ...plugins],
      build: {
        rollupOptions: { input: ['./app/style.css'] },
      },
    }
  }

  return {
    plugins: [honox(), honoVitePages(), ...plugins],
  }
})
