import { objGet } from './object'
import app from '@/config/app'
import spotify from '@/config/spotify'

/**
 * Gets the specified configuration value.
 *
 * @param {string} path - The path of the configuration to get.
 * @param {T} [defaultValue] - The value returned if the resolved value is undefined.
 * @returns {T} Returns the resolved value.
 */
export function config<T = any>(path: string, defaultValue?: T): T {
  return objGet({ app, spotify }, path, defaultValue)
}

export { default as cn } from 'clsx'
