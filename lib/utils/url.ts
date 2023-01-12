import { config } from './helpers'

/**
 * Generate a full url
 *
 * @param {string} [path] - The path of the url
 * @returns {string} Returns the full url
 */
export function url(path: string = ''): string {
  return new URL(path, config('app.url')).toString()
}
