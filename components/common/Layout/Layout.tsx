import * as React from 'react'
import styled from 'styled-components'

// Components
import { Header, Navbar, Footer } from '@components/common'
import useUi from '@hooks/useUi'

type StyledProps = {
  isSidebarOpen: boolean
}

type Props = {
  children: React.ReactNode
}

const LayoutStyles = styled.div<StyledProps>`
  min-height: 100vh;
  /* overflow-y: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'hidden' : 'scroll'}; */

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
    <>
      {/* <Head>
        <title>ArteRiego S.A.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <LayoutStyles isSidebarOpen={isSidebarOpen}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LayoutStyles>
    </>
  )
}

export default Layout
