import { getCurrentlyPlaying } from 'lib/utils/spotify'
import { CurrentlyPlayingResponse } from 'lib/types/spotify'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler() {
  const response = await getCurrentlyPlaying()

  if (response.status === 204 || response.status > 400)
    return new Response('{}', {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    })

  const currentlyPlayingResponse: CurrentlyPlayingResponse =
    await response.json()
  const { item } = currentlyPlayingResponse

  if (!item)
    return new Response('{}', {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    })

  const name = item.name
  const artist = item.artists?.map((artist) => artist.name).join(', ')
  const url = item.external_urls?.spotify

  return new Response(JSON.stringify({ name, artist, url }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })
}
