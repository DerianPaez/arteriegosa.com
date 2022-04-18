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

type StyledProps = {
  isOpen: boolean
}

const NavbarStyled = styled.nav<StyledProps>`
  display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
  position: fixed;
  top: 66px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 4px 4px 0px #00000040;

  ul {
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    gap: 20px;
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    display: grid;
    position: sticky;
    padding: 10px 0;
    top: 0;
    background-color: ${({ theme }) => theme.primary};

    ul {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      margin-top: 0px;
      gap: 40px;
    }

    li a {
      color: ${({ theme }) => theme.secundaryLight};
    }
  }
`

const Navbar: React.FC = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen)

  return (
    <NavbarStyled isOpen={isSidebarOpen}>
      <Wrapper>
        <ul>
          {navLinks.map((link) => {
            return (
              <Navlink
                key={link.id}
                id={link.id}
                name={link.name}
                url={link.url}
              />
            )
          })}
        </ul>
      </Wrapper>
    </NavbarStyled>
  )
}

export default Navbar
