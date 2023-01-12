/**
 * This method is a fetch api wrapper to use with SWR
 *
 * @async
 * @template T - The type of returned promise value
 * @param {RequestInfo | URL} input - The input source
 * @param {RequestInit} [init] - The init source
 * @returns {Promise<T>} Returns a promise with the type specified
 */
export async function fetcher<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, init)

  return response.json()
}
