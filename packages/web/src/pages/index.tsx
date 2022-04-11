import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor="blackAlpha.800" h="100vh">
        Sample
      </Box>
    </>
  )
}

export default Home
