import * as React from 'react'

// Data
import { hero } from '@data/hero.data'
import { services } from '@data/services.data'
import { productsRainbird } from '@data/productsRainbird.data'
import { projects } from '@data/projects.data'

// Components
import { Hero, Services } from '@components/common'
import PublicityProduct from '@components/common/PublicityProduct'
import FeaturedProjects from '@components/common/FeaturedProjects'

const Home: React.FC = () => {
  return (
    <>
      <Hero
        heroData={hero}
      />
      <Services
        serviceData={services}
      />
      <PublicityProduct
        productList={productsRainbird}
      />
      <FeaturedProjects
        projectList={projects}
      />
    </>
  )
}

export default Home