import * as React from 'react'
import styled from 'styled-components'

// Components
import AboutUs from '@components/common/AboutUs'
import { Banner } from '@components/common'

const AboutStyled = styled.div`
  /*  */
`

const About: React.FC = () => {
  return (
    <AboutStyled>
      <Banner
        title='Sobre Nosotros'
      />
      <AboutUs
        title='Somos una empresa dedicada al riego de jardines y áreas verdes'
        text='Nuestros años de experiencia y conocimiento local nos han llevado a tener una gama completa de soluciones eficientes e innovadoras que se pueden aplicar desde las pequeñas áreas verdes (Residencias) a las grandes empresas comerciales (Urbanizaciones).'
        image='/assets/AboutImage.png'
      />
    </AboutStyled>
  )
}

export default About
