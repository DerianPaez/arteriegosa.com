import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

// Components
import Logo from '../Logo'
import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import WhatsApp from '@components/icons/WhatsApp'

const FooterStyled = styled.footer`
  padding-top: 50px;
  background: ${({ theme }) => theme.colors.secundaryDark};

  .footer__container {
    padding-bottom: 50px;
    display: grid;
    grid-template-areas:
      "main"
      "contactInfo"
      "socialMedia";
    gap: 40px;
  }

  .footer__main {
    grid-area: main;
    display: grid;
    gap: 20px;
  }

  .footer__logo {
    path {
      fill: ${({ theme }) => theme.colors.secundaryLight};
    }
  }

  .footer__paragraph {
    color: ${({ theme }) => theme.colors.secundaryLight};
    text-align: center;
  }

  .footer__subTitle {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  .footer__contactInfo {
    grid-area: contactInfo;
    display: grid;
    gap: 15px;
    text-align: center;
  }

  .contactInfo__list {
    display: grid;
    gap: 3px;
    li {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }
  }

  .footer__socialMedia {
    grid-area: socialMedia;
    display: grid;
    gap: 15px;
    color: ${({ theme }) => theme.colors.secundaryLight};
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .socialMedia__list {
    width: max-content;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    justify-self: center;
    gap: 20px;
  }

  .legal {
    background-color: #042710;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  @media (min-width: 768px) {
    .footer__container {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
`

type Props = {

}

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer__container">
          <div className="footer__main">
            <Logo className="footer__logo"/>
            <p className="footer__paragraph">Riego de jardines y áreas verdes con más de 29 años en el mercado local</p>
          </div>

          <div className="footer__contactInfo">
            <h3 className="footer__subTitle">Contáctanos</h3>
            <ul className="contactInfo__list">
              <li>+04 603 6546</li>
              <li>arteriego@hotmail.com</li>
              <li>Metropolis II Etapa E Mz 1369 V 06</li>
            </ul>
          </div>

          <div className="footer__socialMedia">
            <h3 className="footer__subTitle">Redes Sociales</h3>
            <p>Siguenos en nuestras redes sociales</p>
            <div className="socialMedia__list">
              <a href="" aria-label="facebook arteriego" target="_blank">
                <Facebook />
              </a>
              <a href="" aria-label="facebook arteriego" target="_blank">
                <Instagram />
              </a>
              <a href="" aria-label="facebook arteriego" target="_blank">
                <WhatsApp />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="legal">
        <p>© 2022 Copyright ArteRiego | Todos los derechos reservados</p>
        <p>
          <Link href="/">
            <a aria-label="Políticas de privacidad ArteRiego">
              Políticas de privacidad
            </a>
          </Link>
            |
          <Link href="/">
            <a aria-label="Términos y condiciones ArteRiego">
              Términos y condiciones
            </a>
          </Link>
        </p>
      </div>
    </FooterStyled>
  )
}

export default Footer
