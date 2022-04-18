import * as React from 'react'
import styled from 'styled-components'

// Components
import AboutUs from '@components/common/AboutUs'

const AboutStyled = styled.div`
  /*  */
`

const About: React.FC = () => {
  return (
    <AboutStyled>
      <AboutUs
        aboutUsTitle='Sobre nosotros'
        aboutUsText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit, massa quis aliquam dictum, metus est aliquet risus, eu placerat massa lorem a nisl.'
        aboutImage='/assets/AboutImage.png'
      />
    </AboutStyled>
  )
}

export default About
