import * as React from 'react'

// Data
import { hero } from '@data/hero.data'

// Components
import Hero from '@components/common/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Hero
        headline={hero.headline}
        description={hero.description}
      />
    </>
  )
}

export default Home