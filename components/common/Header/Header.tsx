import * as React from 'react'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

// Icons
import Logo from '@components/common/Logo'
import Phone from '@components/icons/Phone'
import Mail from '@components/icons/Mail'
import Clock from '@components/icons/Clock'
import Menu from '@components/icons/Menu'
import useUi from '@hooks/useUi'
import Link from 'next/link'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: ${({ theme }) => theme.positions.header};
  background: ${({ theme }) => theme.colors.secundaryLight};

  .header__mainContainer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  .header__button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contactInfo {
    display: none;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 20px;
  }

  .contactInfo__item {
    display: grid;
    grid-template-areas:
      "icon title"
      "icon text";
    gap: 1px 12px;
    color: ${({ theme }) => theme.colors.paragraph};

    svg {
      grid-area: icon;
      width: 16px;
      height: 100%;
    }

    .contactInfo__title {
      grid-area: title;
      font-size: 13px;
      font-weight: 400;
    }

    .contactInfo__text {
      grid-area: text;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    position: static;

    .contactInfo {
      display: grid;
    }

    .header__button {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .contactInfo {
      gap: 40px;
    }
  }
`

const Header: React.FC = () => {
  const { isSidebarOpen, toogleSidebar } = useUi()
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header__mainContainer">
          <Logo />
          <button onClick={() => toogleSidebar(isSidebarOpen)} className="header__button">
            <Menu />
          </button>
          <div className="contactInfo">
            <Link href="tel:04 603 6546">
              <a>
                <div className="contactInfo__item">
                  <Phone />
                  <h5 className="contactInfo__title">Llamanos:</h5>
                  <p className="contactInfo__text">04 603 6546</p>
                </div>
              </a>
            </Link>

            <Link href="mailto:arteriego@hotmail.com">
              <a>
                <div className="contactInfo__item">
                  <Mail />
                  <h5 className="contactInfo__title">Email:</h5>
                  <p className="contactInfo__text">arteriego@hotmail.com</p>
                </div>
              </a>
            </Link>

            <div className="contactInfo__item">
              <Clock />
              <h5 className="contactInfo__title">Abierto:</h5>
              <p className="contactInfo__text">Lun-Vie 8am - 4pm</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
