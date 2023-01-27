import Container from '@mui/material/Container'
import { ReactNode } from 'react'
import { Header } from '../Header/Header'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title='Utility Tool' />
      <main>
        <Container maxWidth='lg'>{children}</Container>
      </main>
    </>
  )
}
