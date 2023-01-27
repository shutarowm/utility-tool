import { NextApiRequest, NextApiResponse } from 'next'
import { StringRandomRequest } from '@/features/string/api/random'
import { Characters, CharacterType } from '@/features/string/constants'
import { generateRandomString } from '@/features/string/utils'

interface StringRandomApiRequest extends NextApiRequest {
  body: StringRandomRequest
}

const handler = (req: StringRandomApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const characters = Object.keys(req.body.characterTypes)
        .map((key) => {
          const characterType = key as CharacterType

          return req.body.characterTypes[characterType] ? Characters[characterType] : ''
        })
        .join('')

      const values: string[] = []
      for (let i = 0; i < req.body.valueCount; i++) {
        values.push(generateRandomString(characters, req.body.length))
      }

      res.status(200).json({ values: values })
      break
    default:
      res.status(405).end()
      break
  }
}

export default handler
