import { objGet } from './object'
import app from '@/config/app'
import spotify from '@/config/spotify'

/**
 * Gets the specified configuration value.
 *
 * @template T - The type of default value and return value
 * @param {string} path - The path of the configuration to get.
 * @param {T} [defaultValue] - The value returned if the resolved value is undefined.
 * @returns {T} Returns the resolved value.
 */
export function config<T = any>(path: string, defaultValue?: T): T {
  return objGet({ app, spotify }, path, defaultValue)
}

/**
 * Determine if the given value is "blank".
 *
 * @template T - The type of value
 * @param {T} value - The value has checked
 * @returns {boolean} Return the value status
 */
export function blank<T>(value: T): boolean {
  const type = Object.prototype.toString.call(value)

  if (type === '[object Undefined]' || type === '[object Null]') return true

  if (type === '[object Number]' || type === '[object Boolean]') return false

  if (type === '[object String]') return (value as string).trim() === ''

  if (type === '[object Array]' || type === '[object Object]')
    return Array.isArray(value)
      ? value.length === 0
      : Object.keys(value as object).length === 0

  return !value
}

/**
 * Determine if a value is "filled".
 *
 * @template T - The type of value
 * @param {T} value - The value has checked
 * @returns {boolean} Return the value status
 */
export function filled<T>(value: T): boolean {
  return !blank(value)
}

export { default as cn } from 'clsx'
