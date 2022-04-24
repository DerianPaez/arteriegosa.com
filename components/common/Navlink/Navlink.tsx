import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  id: string,
  name: string,
  url: string,
  isSidebarOpen: boolean
  toggleSidebar(isSidebarOpen: boolean): void
}

const NavlinkStyled = styled.li`
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secundaryLight};
    transition: color .2s;

    &:hover {
      color: #d4d4d4;
    }
  }
`

const Navlink: React.FC<Props> = ({ id, name, url, toggleSidebar, isSidebarOpen }) => {
  return (
    <NavlinkStyled id={id} onClick={() => toggleSidebar(isSidebarOpen)}>
      <Link href={url}>
        <a aria-label={name}>
          {name}
        </a>
      </Link>
    </NavlinkStyled>
  )
}

export default Navlink
