import * as React from 'react'
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
import { Layout, Loader } from '@components/common'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = initStore()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const interval = setTimeout(() => setIsLoading(true), 2000)
    return () => clearTimeout(interval)
  })

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ArteRiego ofrece servicios profesionales dedicados al riego de jardines y areas verdes con más de 29 años de experiencia en el mercado local"
        />
        <meta
          name="keywords"
          content="arteriego, riegos, instalalación, instalaciónes, areas, areas verdes, sitios verdes, pared verde, jardin, jardin vertical, vertical, riego, empresa de riego, goteo, aspersion, nebulizacion, aspersores tipo cañon, mangueras, tubos, mangueras con goteros, goteros, cintas de riego, cintas con goteros, bombas, bombas de agua, bombas a diesel, bombas a gasolina, bombas electricas, tuberias, pegamentos, pega PVC, accesorios roscados, accesorios de compresion, filtros de agua, filtros de anillos, filtros de malla, fertilización, fertilizacion"
        />
        <meta name="author" content="Vipacio" />
        <meta property="og:title" content="ArteRiego S.A." />
        <meta
          property="og:description"
          content="ArteRiego ofrece servicios profesionales dedicados al riego de jardines y areas verdes con más de 29 años de experiencia en el mercado local"
        />
        <meta property="og:site_name" content="ArteRiego S.A." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arteriegosa.com" />

        <title>ArteRiego S.A.</title>

        <link rel="shortcut icon" href="/Favicon.svg" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        {!isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
