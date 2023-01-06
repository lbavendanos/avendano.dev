import { Metas } from '@/lib/types/seo'
import Seo from '@/lib/components/Seo'

export default function HomeSeo() {
  const metas: Metas = { description: 'Software Developer' }

  return <Seo metas={metas} />
}
