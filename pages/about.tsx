import * as React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

// Theme
import { H2, Paragraph } from '@config/themeConfig'

// Data
import { aboutUs } from '@data/aboutUs.data'

// Components
import { Banner, Section, StrategicMap } from '@components/common'

const AboutStyled = styled.div`
  .aboutUs {
    .aboutUs__container {
      display: grid;
      gap: 20px;
      grid-template-areas:
        'aboutText'
        'aboutImage';
    }

    .aboutUs__content {
      display: grid;
      grid-auto-rows: max-content;
      align-self: center;
      gap: 20px;
      grid-area: aboutText;
    }

    .aboutUs__text__content {
      display: grid;
      gap: 15px;
    }

    .strategicMap__container {
      display: grid;
      gap: 20px;
    }

    .aboutUs__image {
      position: relative;
      grid-area: aboutImage;
      min-height: 350px;
      
      img {
        border-radius: 10px;
      }
    }

    .aboutUs__image__gradiant {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 500;
      border-radius: 10px;
      background: linear-gradient(to right, rgba(37, 114, 62, 0.3), rgba(37, 114, 62, 0.3));
    }

    .aboutUs__experience {
      display: grid;
      grid-template-columns: min-content min-content;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      gap: 10px;
      position: absolute;
      z-index: 600;
      bottom: -20px;
      left: 0;
      right: 0;
      width: 240px;
      height: 80px;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    .aboutUs__experience__year {
      font-size: 45px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secundaryLight}
    }

    .aboutUs__experiece__text {
      font-size: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.secundaryLight}
    }

    @media (min-width: 768px) {
      .aboutUs__container {
        grid-template-areas:
        'aboutImage aboutText';
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1024px) {
      .strategicMap__container, .aboutUs__content {
        gap: 30px;
      }

      .aboutUs__container {
        gap: 50px;
      }
    }
  }
`

const About: React.FC = () => {
  return (
    <AboutStyled>
      <Banner
        title='Sobre Nosotros'
      />

      <Section className="aboutUs">
        <div className="aboutUs__container">
          <div className="aboutUs__content">
            <div className="aboutUs__text__content">
              <H2 className="aboutUs__title">{aboutUs.title}</H2>
              <Paragraph>{aboutUs.text}</Paragraph>
            </div>
            <div className="strategicMap__container">
              <StrategicMap icon="Mision" title="Misión" text="Asesorar, Diseñar, Suministrar, Instalar y dar mantenimiento a Sistemas de Riego Automáticos para áreas verdes en distintos sectores, para la aplicación del recurso hídrico con miras a satisfacer las necesidades específicas de los proyectos de cada uno de nuestros clientes"/>
              <StrategicMap icon="Vision" title="Visión" text="Orientar nuestra actividad al posicionamiento de ARTERIEGO S.A. Como líder en el mercado de soluciones tecnológicas para el uso inteligente del agua en sus diferentes usos en los sectores públicos o privados"/>
            </div>
          </div>
          <div className="aboutUs__image">
            <div className="aboutUs__image__gradiant"></div>

            {aboutUs.image && 
              <Image
              src={aboutUs.image}
              alt="Image"
              layout="fill"
              aria-label="Image"
              objectFit="cover"
              priority={false}
            />}
            
            <div className="aboutUs__experience">
              <p className="aboutUs__experience__year">29</p>
              <p className="aboutUs__experiece__text">años de experiencia</p>
            </div>
          </div>
        </div>
      </Section>
    </AboutStyled>
  )
}

export default About
