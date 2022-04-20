import * as React from 'react'

// Data
import { hero } from '@data/hero.data'
import { services } from '@data/services.data'
import { productsRainbird } from '@data/productsRainbird.data'
import { projects } from '@data/projects.data'
import { clients } from '@data/clients.data'

// Components
import {
  Hero,
  Services,
  PublicityProduct,
  FeaturedProjects,
  Clients } from '@components/common'

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
      <Clients
        clientsData={clients}
      />
    </>
  )
}

export default Home