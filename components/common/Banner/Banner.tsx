import * as React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const BannerStyled = styled.section`
  background-image: url('/assets/Banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  display: grid;
  justify-content: center;
  align-items: center;

  .banner__title {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  @media (min-width: 425px) {
    .banner__title {
      font-size: 32px;
    }
  }

  @media (min-width: 768px) {
    .banner__title {
      font-size: 40px;
    }
  }
`

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <BannerStyled>
      <h1 className="banner__title">{title}</h1>
    </BannerStyled>
  )
}

export default Banner
