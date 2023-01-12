const spotify = {
  id: process.env.SPOTIFY_CLIENT_ID || '',
  secret: process.env.SPOTIFY_CLIENT_SECRET || '',
  token: process.env.SPOTIFY_REFRESH_TOKEN || '',
}

export default spotify
