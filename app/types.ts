export interface Frontmatter {
  date: string
  title: string
  excerpt: string
  hidden?: boolean
  type: 'article' | 'experiment'
}
