import { CharacterType } from '../constants'

export type StringRandomRequest = {
  characterTypes: { [key in CharacterType]: boolean }
  length: number
  valueCount: number
}

export type StringRandomResponse = {
  values: string[]
}
