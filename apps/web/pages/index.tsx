import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layouts/Layout/Layout'

type Tool = {
  name: string
  link: string
}

const tools: Array<Tool> = [{ name: 'ランダム文字列生成', link: '/string/random' }]

const Home: NextPageWithLayout = () => {
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
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item key={index}>
            <Link href={tool.link} sx={{ textDecoration: 'none' }}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography>{tool.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
