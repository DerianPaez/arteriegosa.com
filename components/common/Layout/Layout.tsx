import * as React from 'react'
import styled from 'styled-components'

// Components
import Header from '@components/common/Header'
import Navbar from '@components/common/Navbar'
import Footer from '@components/common/Footer'
import useUi from '@hooks/useUi'

type StyledProps = {
  isSidebarOpen: boolean
}

type Props = {
  children: React.ReactNode,
}

const LayoutStyles = styled.div<StyledProps>`
  min-height: 100vh;
  /* overflow-y: ${({ isSidebarOpen }) => isSidebarOpen ? "hidden" : "scroll"}; */

  main {
    padding-top: 62px;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    main {
      padding-top: 0;
    }
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  const { isSidebarOpen } = useUi()
  return (
    <LayoutStyles isSidebarOpen={isSidebarOpen}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
