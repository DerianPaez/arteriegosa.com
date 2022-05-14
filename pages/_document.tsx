import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            key="description"
            name="description"
            content="ArteRiego ofrece servicios profesionales dedicados al riego de jardines y areas verdes con más de 29 años de experiencia en el mercado local"
          />
          <meta
            name="keywords"
            content="arteriego, riegos, instalalación, instalaciónes, areas, areas verdes, sitios verdes, pared verde, jardin, jardin vertical, vertical, riego, empresa de riego, goteo, aspersion, nebulizacion, aspersores tipo cañon, mangueras, tubos, mangueras con goteros, goteros, cintas de riego, cintas con goteros, bombas, bombas de agua, bombas a diesel, bombas a gasolina, bombas electricas, tuberias, pegamentos, pega PVC, accesorios roscados, accesorios de compresion, filtros de agua, filtros de anillos, filtros de malla, fertilizacion, venturi, valvulas, irrigation, installation, installations, green areas, green sites, green wall, garden, vertical garden, vertical, irrigation company, drip, sprinkling, misting, sprinklers, hoses, tubes, hoses with drippers, drippers, irrigation tapes, drip tapes, pumps, water pumps, diesel pumps, gasoline pumps, electric pumps, pipes, glues, PVC glue, threaded fittings, compression fittings, water filters, ring filters, filters mesh, fertilization, venturi, valves"
          />
          <meta name="author" content="Vipacio" />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:title" property="og:title" content="" />
          <meta
            key="og:description"
            property="og:description"
            content="Arteriego S.A."
          />
          <meta
            key="og:site_name"
            property="og:site_name"
            content="ArteRiego ofrece servicios profesionales dedicados al riego de jardines y areas verdes con más de 29 años de experiencia en el mercado local"
          />
          <meta
            key="og:url"
            property="og:url"
            content="https://www.arteriegosa.com"
          ></meta>
          <meta property="og:site_name" content="ArteRiego S.A." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/Favicon.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
