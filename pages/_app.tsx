import * as React from 'react'
import Router from 'next/router'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Assets
import '@assets/globals.css'
import '@assets/chrome-bug.css'

// Redux
import { initStore } from '@state/store'

// Config
import { defaultTheme } from '@config/themeConfig'

// Components
import { Head, Layout, Loader } from '@components/common'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = initStore()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const interval = setTimeout(() => setIsLoading(true), 4000)
    return () => clearTimeout(interval)
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Head />
        {
          !isLoading
            ? <Loader />
            : <Layout>
                <Component {...pageProps} />
              </Layout>
        }
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
