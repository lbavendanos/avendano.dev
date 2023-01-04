import { getNowPlaying } from '@/lib/utils/spotify'
import { NowPlayingSong, SpotifyResponse } from '@/lib/types/spotify'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NowPlayingSong>
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400)
    return res.status(200).json({})

  const spotifyResponse: SpotifyResponse = await response.json()
  const { item } = spotifyResponse

  if (!item) return res.status(200).json({})

  const name = item.name
  const artist = item.artists?.map((artist) => artist.name).join(', ')
  const url = item.external_urls?.spotify

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ name, artist, url })
}
