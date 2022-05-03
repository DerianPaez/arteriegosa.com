import styled from "styled-components";

export const defaultTheme = {
  colors: {
    primary: '#25723E',
    secundaryLight: '#ffffff',
    secundaryDark: '#205A33',
    black: '#000000',
    paragraph: '#5F5F5F',
    accent: '#05FF00',
    stroke: '#333333',
    shadow: '',
    error: '#f16565',
  },
  positions: {
    header: 1000,
    navbar: 900,
    controllers: 600,
    image: 500,
  }
}

export const Wrapper = styled.div`
  padding: 0 5%;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secundaryDark};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraph};
  line-height: 22px;
`