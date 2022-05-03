import * as React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux';

// Data
import { navLinks } from '@data/navLinks.data'

// Components
import Navlink from '@components/common/Navlink'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { Wrapper } from '@config/themeConfig';
import Facebook from '@components/icons/Facebook';
import Link from 'next/link';
import Instagram from '@components/icons/Instagram';
import WhatsApp from '@components/icons/WhatsApp';
import useUi from '@hooks/useUi';
import { socialMedia } from '@data/socialMedia.data';

type StyledProps = {
  isOpen: boolean
}

const NavbarStyled = styled.nav<StyledProps>`
  display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
  position: fixed;
  top: 62px;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: ${({ theme }) => theme.positions.navbar};
  background-color: ${({ theme }) => theme.colors.primary};

  .navbar__container {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr max-content;
    padding: 40px 0 20px;
  }

  ul {
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    gap: 30px;
    text-align: center;
    align-self: center;
    margin-bottom: 42px;
  }

  .navbar__socialMedia {
    width: max-content;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    gap: 20px;
    justify-self: center;
  }

  .navbar__socialMedia a {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  .navbar__socialMedia svg {
    height: 22px;
    width: max-content;
  }

  @media (min-width: 768px) {
    display: grid;
    position: sticky;
    top: 0;

    .navbar__container {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      grid-template-rows: auto;
    }

    ul {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      margin-top: 0;
      margin-bottom: 0;
      gap: 40px;
    }
  }
`

const Navbar: React.FC = () => {
  const { isSidebarOpen, toogleSidebar } = useUi()

  return (
    <NavbarStyled isOpen={isSidebarOpen}>
      <Wrapper>
        <div className="navbar__container">
          <ul>
            {navLinks.map((link) => {
              return (
                <Navlink
                  key={link.id}
                  id={link.id}
                  name={link.name}
                  url={link.url}
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toogleSidebar}
                />
              )
            })}
          </ul>

          <div className="navbar__socialMedia">
            <a href="" aria-label="facebook arteriego" target="_blank">
              <Facebook />
            </a>
            <a href="" aria-label="facebook arteriego" target="_blank">
              <Instagram />
            </a>
            <a href={socialMedia.WhatsApp.url} aria-label="facebook arteriego" target="_blank">
              <WhatsApp />
            </a>
          </div>
        </div>
      </Wrapper>
    </NavbarStyled>
  )
}

export default Navbar
