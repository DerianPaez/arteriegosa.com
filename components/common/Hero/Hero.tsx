import * as React from 'react'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

type StyledProps = {
  imageLabel?: string
  imageUrl?: string
  videoLabel?: string
  videoUrl?: string
}

type Props = {
  headline: string
  description: string
  className?: string
  imageLabel?: string
  imageUrl?: string
  videoLabel?: string
  videoUrl?: string
}

const HeroStyled = styled.section<StyledProps>`
  width: 100%;
  display: grid;
  align-items: center;
  height: calc(100vh - 64px);
  padding: 0 ;
  background-color: ${({ theme }) => theme.primary};

  .hero__content {
    display: grid;
    gap: 15px;
  }

  .hero__title {
    font-size: 32px;
    color: ${({ theme }) => theme.secundaryLight};
  }

  .hero__description {
    max-width: 500px;
    color: ${({ theme }) => theme.secundaryDark};
  }

  @media (min-width: 768px) {
    .hero__title {
      font-size: 45px;
    }

    .hero__description {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    .hero__title {
      font-size: 60px;
    }
  }

  /* Hero with background image */
  /* background: ${({ theme, imageUrl }) => imageUrl ? imageUrl : theme.primary}; */
`

const Hero: React.FC<Props> = ({ className, headline, description, imageUrl,  videoUrl, imageLabel, videoLabel }) => {
  return (
    <HeroStyled className={className}>
      <Wrapper>
        <div className="hero__content">
          <h2 className='hero__title'>{headline}</h2>
          <p className='hero__description'>{description}</p>
        </div>

        {/* Hero with video */}
        {/* <div className="hero__video">
          <video src={videoUrl} muted={true} aria-label="videoLabel"></video>
        </div> */}

        {/* Hero with image */}
        {/* <div className="hero__image">
          <img src={imageUrl} alt={imageLabel} aria-label={imageLabel} />
        </div> */}
      </Wrapper>
    </HeroStyled>
  )
}

export default Hero
