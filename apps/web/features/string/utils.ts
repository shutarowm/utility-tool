import crypto from 'crypto'

export const generateRandomString = (characters: string, length: number) => {
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map((n) => characters[n % characters.length])
    .join('')
}
