import * as React from 'react'
import styled from 'styled-components'

// Components
import Header from '@components/common/Header'
import Navbar from '@components/common/Navbar'
import Footer from '@components/common/Footer'

type Props = {
  children: React.ReactNode,
}

const LayoutStyles = styled.div`
  min-height: 100vh;

  main {
    padding-top: 66px;
  }

  @media (min-width: 768px) {
    main {
      padding-top: 0;
    }
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
