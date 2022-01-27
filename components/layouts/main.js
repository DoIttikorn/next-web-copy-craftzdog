import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react';

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Ittikorn C - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxH={container.md} pt={14}>
          {children}
      </Container>
    </Box>
  )
}

export default Main;
