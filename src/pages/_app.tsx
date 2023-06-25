import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import AppProvider from '@/hooks'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  )
}
