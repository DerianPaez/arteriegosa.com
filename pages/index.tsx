import * as React from 'react'

// Data
import { hero } from '@data/hero.data'
import { services } from '@data/services.data'

// Components
import { Hero, Services } from '@components/common'

const Home: React.FC = () => {
  return (
    <>
      <Hero
        headline={hero.headline}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
      />
      <Services
        title={services.title}
        text={services.text}
        serviceList={services.servicesList}
      />
    </>
  )
}

export default Home