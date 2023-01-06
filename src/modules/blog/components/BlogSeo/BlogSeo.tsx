import { config } from '@/lib/utils/helpers'
import { Metas } from '@/lib/types/seo'
import SeoCustom from '@/lib/components/SeoCustom'

export default function BlogSeo() {
  const appName = config<string>('app.name')
  const metas: Metas = {
    title: `Blog | ${appName}`,
    description: 'Thoughts on the software industry',
  }

  return <SeoCustom metas={metas} />
}
