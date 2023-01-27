import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { ChangeEvent, MouseEventHandler, ReactElement, useEffect, useState } from 'react'
import { Layout } from '@/components/layouts/Layout/Layout'
import { CharacterType, CharacterTypeLabels, CharacterTypes } from '@/features/string/constants'
import { NextPageWithLayout } from '@/pages/_app'

const StringRandom: NextPageWithLayout = () => {
  const initialCharacterTypeStatus: { [key in CharacterType]: boolean } = {
    UpperCaseAlphabet: true,
    LowerCaseAlphabet: true,
    Number: true,
    Symbol: true,
  }
  const [characterTypesStatus, setCharacterTypeStatus] = useState(initialCharacterTypeStatus)
  const [length, setLength] = useState('8')
  const [valueCount, setValueCount] = useState('5')
  const [randomStrings, setRandomStrings] = useState<string[]>()

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const characterType = e.target.id as CharacterType
    const updatedStatus = { ...characterTypesStatus }
    updatedStatus[characterType] = e.target.checked
    setCharacterTypeStatus(updatedStatus)
  }

  const handleGenerateButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    const postData = async () => {
      const response = await axios.post('/api/string/random', {
        characterTypes: characterTypesStatus,
        length: length,
        valueCount: valueCount,
      })
      setRandomStrings(response.data.values)
    }

    postData()
  }

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        ランダム文字列の生成
      </Typography>
      <FormGroup row={true} sx={{ pb: 2 }}>
        {CharacterTypes.map((characterType) => (
          <FormControlLabel
            key={characterType}
            control={
              <Checkbox
                id={characterType}
                defaultChecked={initialCharacterTypeStatus[characterType]}
                onChange={handleChangeCheckbox}
              />
            }
            label={CharacterTypeLabels[characterType]}
          />
        ))}
      </FormGroup>
      <Grid container justifyContent='center' alignItems='center' spacing={2} sx={{ pb: 2 }}>
        <Grid item>
          <TextField
            id='length'
            label='文字数'
            onChange={(e) => setLength(e.target.value)}
            size='small'
            type='number'
            value={length}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id='valueCount'
            label='生成数'
            onChange={(e) => setValueCount(e.target.value)}
            size='small'
            type='number'
            value={valueCount}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Button variant='contained' onClick={handleGenerateButton}>
        生成
      </Button>
      <Grid container justifyContent='center' alignItems='center' spacing={2} sx={{ pt: 2 }}>
        {randomStrings?.map((randomString, index) => (
          <Grid item key={index}>
            <Paper variant='outlined' sx={{ p: 1 }}>
              {randomString}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

StringRandom.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default StringRandom
