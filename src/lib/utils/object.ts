/**
 * Gets the value at path of object.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 *
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
