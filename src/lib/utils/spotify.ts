import { config } from './helpers'
import { TokenResponse } from '../types/spotify'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const CURRENTLY_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'

async function getToken(): Promise<TokenResponse> {
  const id = config('spotify.id')
  const secret = config('spotify.secret')
  const token = config('spotify.token')

  const basic = btoa(`${id}:${secret}`)

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: token,
    }),
  })

  return response.json()
}

export async function getCurrentlyPlaying() {
  const { access_token } = await getToken()

  return fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
