import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// Data
import { TeammateType } from '@data/team.data'
import { Paragraph } from '@config/themeConfig'

const TeammateStyled = styled.div`
  display: grid;
  gap: 20px;

  .teammate__content {
    display: grid;
    padding: 7px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
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

  .teammate__photo {
    position: relative;
    height: 100%;
    min-height: 450px;
  }
`

const Teammate: React.FC<TeammateType> = ({ ...props }) => {
  const { names, position, photo } = props
  return (
    <TeammateStyled>
      <div className="teammate__content">
        <h3 className="teammate__name">{names}</h3>
        <Paragraph className="teammate__position">{position}</Paragraph>
      </div>
      <div className="teammate__photo">
        {photo &&
          <Image
            src={photo}
            alt={names}
            aria-label={names}
            layout="fill"
            objectFit="cover"
            priority={true}
            objectPosition="top"
          />
        }
      </div>
    </TeammateStyled>
  )
}

export default Teammate
