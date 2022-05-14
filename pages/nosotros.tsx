import * as React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

// Theme
import { H2, Paragraph } from '@config/themeConfig'

// Data
import { aboutUs } from '@data/aboutUs.data'
import { team } from '@data/team.data'
import { chooseUs } from '@data/chooseUs.data'

// Components
import {
  Banner,
  Section,
  StrategicMap,
  Teammate,
  ChooseUsItem
} from '@components/common'
import Head from 'next/head'

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
      min-height: 450px;

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
      background: linear-gradient(
        to right,
        rgba(37, 114, 62, 0.3),
        rgba(37, 114, 62, 0.3)
      );
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
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    .aboutUs__experiece__text {
      font-size: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    @media (min-width: 768px) {
      .aboutUs__container {
        grid-template-areas: 'aboutImage aboutText';
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1024px) {
      .strategicMap__container,
      .aboutUs__content {
        gap: 30px;
      }

      .aboutUs__container {
        gap: 50px;
      }
    }
  }

  .chooseUs {
    background-color: rgba(37, 114, 62, 0.08);
    .chooseUs__container {
      display: grid;
      gap: 40px;
    }

    .chooseUs__list {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    .chooseUs__title__h2 {
      text-align: center;
    }

    @media (min-width: 768px) {
      .chooseUs__list {
        grid-template-columns: 1fr 1fr;
        gap: 40px 10%;
      }
    }
  }

  .team {
    .team__container {
      display: grid;
      gap: 40px;
    }

    .team__title {
      text-align: center;
    }

    .team__list {
      display: grid;
      gap: 40px;
    }

    @media (min-width: 550px) {
      .team__list {
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 768px) {
      .team__list {
        justify-self: center;
        grid-template-columns: repeat(2, 335px);
      }
    }
  }
`

const About: React.FC = () => {
  return (
    <AboutStyled>
      <Banner title="Sobre Nosotros" />

      <Section className="aboutUs">
        <div className="aboutUs__container">
          <div className="aboutUs__content">
            <div className="aboutUs__text__content">
              <H2 className="aboutUs__title">{aboutUs.title}</H2>
              <Paragraph>{aboutUs.text}</Paragraph>
            </div>
            <div className="strategicMap__container">
              <StrategicMap
                icon="Mision"
                title={aboutUs.strategicMaps.mision.title}
                text={aboutUs.strategicMaps.mision.text}
              />
              <StrategicMap
                icon="Vision"
                title={aboutUs.strategicMaps.vision.title}
                text={aboutUs.strategicMaps.vision.text}
              />
            </div>
          </div>
          <div className="aboutUs__image">
            <div className="aboutUs__image__gradiant"></div>

            {aboutUs.image && (
              <Image
                src={aboutUs.image}
                alt="Image"
                layout="fill"
                aria-label="Image"
                objectFit="cover"
                priority={true}
              />
            )}

            <div className="aboutUs__experience">
              <p className="aboutUs__experience__year">
                {aboutUs.experience.year}
              </p>
              <p className="aboutUs__experiece__text">
                {aboutUs.experience.text}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="chooseUs">
        <div className="chooseUs__container">
          <H2 className="chooseUs__title__h2">{chooseUs.title}</H2>
          <div className="chooseUs__list">
            {chooseUs.chooseUsList.map(item => {
              return (
                <ChooseUsItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="team">
        <div className="team__container">
          <H2 className="team__title">{team.title}</H2>
          <div className="team__list">
            {team.teammates.map(temmate => {
              return <Teammate key={temmate.id} {...temmate} />
            })}
          </div>
        </div>
      </Section>
    </AboutStyled>
  )
}

export default About
