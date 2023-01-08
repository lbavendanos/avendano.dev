import { url } from '@/lib/utils/url'
import { useMemo } from 'react'
import { Metas } from '@/lib/types/seo'
import Seo from '@/lib/components/Seo'

interface SlugSeoProps {
  metas?: Metas
}

export default function SlugSeo({ metas: metasProp = {} }: SlugSeoProps) {
  const metas = useMemo(() => {
    const { image, ...restMetasProp } = metasProp

    return { ...restMetasProp, image: image ? url(image!) : '' }
  }, [metasProp])

  return <Seo metas={metas} />
}
