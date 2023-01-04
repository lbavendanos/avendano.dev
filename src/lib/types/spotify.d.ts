export interface SpotifyResponse {
  timestamp?: number
  context?: null
  progress_ms?: number
  item?: Item
  currently_playing_type?: string
  actions?: Actions
  is_playing?: boolean
}

export interface Actions {
  disallows?: Disallows
}

export interface Disallows {
  resuming?: boolean
  skipping_prev?: boolean
  toggling_repeat_context?: boolean
  toggling_repeat_track?: boolean
  toggling_shuffle?: boolean
}

export interface Item {
  album?: Album
  artists?: Artist[]
  available_markets?: string[]
  disc_number?: number
  duration_ms?: number
  explicit?: boolean
  external_ids?: ExternalIDS
  external_urls?: ExternalUrls
  href?: string
  id?: string
  is_local?: boolean
  name?: string
  popularity?: number
  preview_url?: string
  track_number?: number
  type?: string
  uri?: string
}

export interface Album {
  album_type?: string
  artists?: Artist[]
  available_markets?: string[]
  external_urls?: ExternalUrls
  href?: string
  id?: string
  images?: Image[]
  name?: string
  release_date?: string
  release_date_precision?: string
  total_tracks?: number
  type?: string
  uri?: string
}

export interface Artist {
  external_urls?: ExternalUrls
  href?: string
  id?: string
  name?: string
  type?: string
  uri?: string
}

export interface ExternalUrls {
  spotify?: string
}

export interface Image {
  height?: number
  url?: string
  width?: number
}

export interface ExternalIDS {
  isrc?: string
}