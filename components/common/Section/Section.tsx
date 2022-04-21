import { Wrapper } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'

type StyledProps = {
  background?: string
}

type Props = {
  children: React.ReactNode
  className?: string
}

const SectionStyled = styled.section<StyledProps>`
  padding: 90px 0;
`

const Section: React.FC<Props> = ({ children, ...props }) => {
  return (
    <SectionStyled {...props}>
      <Wrapper>
        {children}
      </Wrapper>
    </SectionStyled>
  )
}

export default Section
