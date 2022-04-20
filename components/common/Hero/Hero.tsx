import * as React from 'react'
import styled from 'styled-components'

// data
import { HeroType } from '@data/hero.data'

// Components
import Button from '@components/common/Button'

// Config
import { Wrapper } from '@config/themeConfig'

type StyledProps = {
  backgroundImage: string
}

type Props = {
  heroData: HeroType
  className?: string
}

const HeroStyled = styled.section<StyledProps>`
  height: calc(100vh - 62px);
  width: 100%;
  display: grid;
  align-items: center;
  padding: 0 ;
  background-image: linear-gradient(to right, rgb(0 0 0 / 59%), rgba(37, 114, 62, 0.3)), url(${({ backgroundImage }) => backgroundImage});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  .hero__content {
    display: grid;
    gap: 15px;
  }

  .hero__title {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  .hero__description {
    max-width: 500px;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  @media (min-width: 768px) {
    height: calc(100vh - 116px);

    .hero__title {
      font-size: 45px;
    }

    .hero__description {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    .hero__title {
      font-size: 70px;
    }
  }
`

const Hero: React.FC<Props> = ({ className, heroData}) => {
  return (
    <HeroStyled className={className} backgroundImage={heroData.backgroundImage}>
      <Wrapper>
        <div className="hero__content">
          <h2 className='hero__title'>{heroData.headline}</h2>
          <p className='hero__description'>{heroData.description}</p>
          <Button onClick={() => {}}>Cotizar</Button>
        </div>
      </Wrapper>
    </HeroStyled>
  )
}

export default Hero
