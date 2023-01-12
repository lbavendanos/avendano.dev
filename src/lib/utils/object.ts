import { blank } from './helpers'

/**
 * Gets the value at path of object.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @template T - The type of default value and return value
 * @param {object} object - The object to query.
 * @param {string | string[]} [path] - The path of the property to get.
 * @param {T} [defaultValue] - The value returned for undefined resolved values.
 * @returns {T} Returns the resolved value.
 */
export function objGet<T = any>(
  object: object,
  path?: string | string[],
  defaultValue?: T
): T {
  if (!path) return object as T

  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const keys = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

  if (keys) {
    for (const key of keys) {
      if (!(object && object[key as keyof object])) return defaultValue as T

      object = object[key as keyof object]
    }
  }

  return object as T
}

/**
 * This method creates an object composed of the own
 * and inherited enumerable string keyed properties
 * of object that predicate doesn't return truthy for.
 * The predicate is invoked with two arguments: (value, key).
 *
 * @template T - The type of object and return value
 * @param {T} object - The source object.
 * @param {(value: any) => boolean} check - The function invoked per property.
 * @returns {T} Returns a new object.
 */
export function objOmitBy<T extends object>(
  object: T,
  check: (value: any) => boolean
): T {
  object = { ...object }

  Object.entries(object).forEach(
    ([key, value]) => check(value) && delete object[key as keyof object]
  )

  return object
}

/**
 * This method delete the blank properties and
 * creates an object with filled values
 *
 * @template T - The type of object and return value
 * @param {T} object - The source object.
 * @returns {T} Returns a new object.
 */
export function objClear<T extends object>(object: T): T {
  return objOmitBy<T>(object, blank)
}
