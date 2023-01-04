import { objGet } from './object'
import app from '@/config/app'
import spotify from '@/config/spotify'

/**
 * Gets the specified configuration value.
 *
 * @param {string} path - The path of the configuration to get.
 * @param {any} [defaultValue] - The value returned if the resolved value is undefined.
 * @returns {any} Returns the resolved value.
 */
export function config(path: string, defaultValue?: any): any {
  return objGet({ app, spotify }, path, defaultValue)
}

export { default as cn } from 'clsx'
