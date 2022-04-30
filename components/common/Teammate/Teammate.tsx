import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// Data
import { TeammateType } from '@data/team.data'
import { Paragraph } from '@config/themeConfig'
import Man from '@components/icons/Man'

const TeammateStyled = styled.div`
  display: grid;
  gap: 20px;

  .teammate__content {
    display: grid;
    padding: 7px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  .teammate__name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  .teammate__position {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .teammate__icon {
    justify-self: center;
    height: 100%;
  }
`

const Teammate: React.FC<TeammateType> = ({ ...props }) => {
  const { names, position } = props
  return (
    <TeammateStyled>
      <div className="teammate__icon">
        <Man />
      </div>
      <div className="teammate__content">
        <h3 className="teammate__name">{names}</h3>
        <Paragraph className="teammate__position">{position}</Paragraph>
      </div>
    </TeammateStyled>
  )
}

export default Teammate
