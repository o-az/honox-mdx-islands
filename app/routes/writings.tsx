import { createRoute } from 'honox/factory'
import type { Meta } from '#types.ts'

export default createRoute((context) => {
  const writings = import.meta.glob<{ frontmatter: Meta }>(
    ['./experiments/*.md', './experiments/*.mdx'],
    { eager: true },
  )
  const iterableWritings = Object.entries(writings).filter(
    ([_, module]) => !module.frontmatter?.hidden,
  )

  return context.render(
    <div>
      <h2>Posts</h2>
      <ul class="article-list">
        {iterableWritings.map(([id, module]) => (
          <li>
            <a href={`${id.replace(/\.mdx$/, '')}`}>
              {module.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>,
  )
})
