import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
const Layout = ( {children} ) => {
  return (
    <>
        <Head>
            <title>Real Estate App</title>
        </Head>
        <Box maxWidth={"1280"} m="auto" >
            <header>
                navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </Box>
    </>
  )
}

export default Layout