import { Metas } from '@/lib/types/seo'
import SeoCustom from '@/lib/components/SeoCustom'

export default function HomeSeo() {
  const metas: Metas = { description: 'Software Developer' }

  return <SeoCustom metas={metas} />
}
