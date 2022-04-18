import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Helpers
import { mapLinks } from 'lib/mapLinks'

// Config
import { Wrapper } from '@config/themeConfig'

// Data
import { legalLinks } from '@data/legalLinks.data'
import { navLinks } from '@data/navLinks.data'

// Components
import Logo from '../Logo'

type Props = {

}

const FooterStyled = styled.footer`
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.stroke};
  background: ${({ theme }) => theme.primary};

  .footer__container {
    display: grid;
    gap: 20px;
  }

  .footer__title {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.secundaryLight};
  }

  .footer__contentLinks {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    gap: 10px;

    ul {
      display: grid;
      gap: 6px;
    }

    a {
      color: ${({ theme }) => theme.secundaryDark};
    }
  }

  @media (min-width: 768px) {
    .footer__container {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer__container">
          <Logo className="footer__logo"/>
          <div className="footer__contentLinks">
            <h3 className="footer__title">Enlaces</h3>
            <ul>
              {mapLinks(navLinks)}
            </ul>
          </div>
          <div className="footer__contentLinks">
            <h3 className="footer__title">Legal</h3>
            <ul>
              {mapLinks(legalLinks)}
            </ul>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  )
}

export default Footer
