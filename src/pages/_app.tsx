import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import AppProvider from '@/hooks'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />

        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://',
            siteName: 'Portifólio Flank Silva',
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  )
}
