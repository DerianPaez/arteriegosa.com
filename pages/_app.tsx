import * as React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

// Assets
import '@assets/globals.css'
import '@assets/chrome-bug.css'

// Redux
import { initStore } from '@state/store'

// Config
import { defaultTheme } from '@config/themeConfig'

// Components
import Head from '@components/common/Head'
import Layout from '@components/common/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = initStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
