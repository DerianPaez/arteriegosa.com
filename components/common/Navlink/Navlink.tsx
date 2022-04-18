import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  id: string,
  name: string,
  url: string,
  // closeSidebar: () => void
}

const NavlinkStyled = styled.li`
  a {
    color: ${({ theme }) => theme.black};
    :hover {
      color: ${({ theme }) => theme.black};
    }
  }

  @media (min-width: 768px) {

  }
`

const Navlink: React.FC<Props> = ({ id, name, url }) => {
  return (
    <NavlinkStyled id={id} onClick={() => {}}>
      <Link href={url}>
        <a aria-label={name}>
          {name}
        </a>
      </Link>
    </NavlinkStyled>
  )
}

export default Navlink
