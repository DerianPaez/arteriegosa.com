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
    a {
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
    padding: 20px 0;
    background-color: #042710;
    text-align: center;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  .legal__container {
    display: grid;
    gap: 5px;

    p {
      font-size: 14px;
    }
  }

  .legal__links {
    color: ${({ theme }) => theme.colors.secundaryLight};
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .footer__container {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }

  @media (min-width: 1024px) {
    .footer__container {
      grid-template-areas:
        "contactInfo main socialMedia";
    }

    .legal__container {
      grid-template-columns: repeat(2, max-content);
      justify-content: space-between;
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
              <li>
                <Link href="tel:+04 603 6546">
                  <a>
                    +04 603 6546
                  </a>
                </Link>
              </li>
              <li>
                <Link href="mailto:arteriego@hotmail.com">
                  <a>
                    arteriego@hotmail.com
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?ll=-2.063393,-79.91684&z=17&t=m&hl=es&gl=EC&mapclient=embed&cid=14727954764109037702"
                  target="_blank"
                >
                  Metropolis II Etapa E Mz 1369 V 06
                </a>
              </li>
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
        <Wrapper>
          <div className="legal__container">
            <p>© 2022 Copyright ArteRiego | Todos los derechos reservados</p>
            <p>
              <Link href="/privacidad">
                <a className="legal__links" aria-label="Políticas de privacidad ArteRiego">
                  Políticas de privacidad
                </a>
              </Link>
              {" | "}
              <Link href="/terminos">
                <a className="legal__links" aria-label="Términos y condiciones ArteRiego">
                  Términos y condiciones
                </a>
              </Link>
            </p>
          </div>
        </Wrapper>
      </div>
    </FooterStyled>
  )
}

export default Footer
