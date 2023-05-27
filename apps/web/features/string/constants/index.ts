export type CharacterType = 'UpperCaseAlphabet' | 'LowerCaseAlphabet' | 'Number' | 'Symbol'

export const CharacterTypes: CharacterType[] = [
  'UpperCaseAlphabet',
  'LowerCaseAlphabet',
  'Number',
  'Symbol',
]

export const Characters: { [key in CharacterType]: string } = {
  UpperCaseAlphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LowerCaseAlphabet: 'abcdefghijklmnopqrstuvwxyz',
  Number: '0123456789',
  Symbol: '!¥"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
}

export const CharacterTypeLabels: { [key in CharacterType]: string } = {
  UpperCaseAlphabet: '英字（大文字）',
  LowerCaseAlphabet: '英字（小文字）',
  Number: '数字',
  Symbol: '記号',
}
