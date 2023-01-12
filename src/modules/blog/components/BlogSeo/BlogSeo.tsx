import { Metas } from 'lib/types/seo'
import Seo from 'lib/components/Seo'

export default function BlogSeo() {
  const metas: Metas = {
    title: 'Blog',
    description: 'Thoughts on the software industry',
  }

  return <Seo metas={metas} />
}
