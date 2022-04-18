import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// Config
import { Wrapper } from '@config/themeConfig'

type StyledProps = {
  reverse?: boolean
}

type Props = {
  aboutUsTitle: string
  aboutUsText: string
  aboutImage: string
  reverse?: boolean
  className?: string
}

const AboutUsStyled = styled.div<StyledProps>`
  padding: 50px 0;
  flex-direction: ${({ reverse }) => reverse ? 'column-reverse': 'column'};

  .aboutUs__container {
    display: grid;
    gap: 20px;
  }

  .aboutUs__content {
    display: grid;
    grid-auto-rows: max-content;
    align-self: center;
    gap: 6px;
  }

  .aboutUs__image {
    max-height: 400px;
  }

  @media (min-width: 768px) {
    .aboutUs__container {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`

const AboutUs: React.FC<Props> = ({ aboutUsTitle, aboutUsText, aboutImage, reverse, className }) => {
  return (
    <AboutUsStyled reverse={reverse} className={className}>
      <Wrapper>
        <div className="aboutUs__container">
          <div className="aboutUs__content">
            <h1>{aboutUsTitle}</h1>
            <p>{aboutUsText}</p>
          </div>
          <Image
            src={aboutImage}
            alt="Image"
            width="1080"
            height="1080"
            aria-label="Image"
            objectFit="cover"
            className="aboutUs__image"
          />
        </div>
      </Wrapper>
    </AboutUsStyled>
  )
}

export default AboutUs
