import * as React from 'react'
import styled from 'styled-components'

// Icons
import Mision from '@components/icons/Mision'
import Vision from '@components/icons/Vision'
import { Paragraph } from '@config/themeConfig'

export enum StrategicMapIcons {
  mision = "Mision",
  vision = "Vision"
}

type Props = {
  icon: StrategicMapIcons.mision | StrategicMapIcons.vision
  title: string
  text: string
}

const StrategicMapStyled = styled.div`
  display: grid;
  gap: 10px;

  .strategicMap__title {
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }

  .strategicMap__text {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: max-content 1fr;
    gap: 20px;
    align-items: center;

    svg {
      width: 80px;
      height: 80px;
    }

    .strategicMap__title {
      font-size: 24px;
    }
  }
`

const StrategicMap: React.FC<Props> = ({ icon, title, text }) => {
  const switchIcon = (icon: string) => {
    switch(icon) {
      case "Mision":
        return <Mision width="50" height="50" />
      case "Vision":
        return <Vision width="50" height="50" />
    }
  }
  return (
    <StrategicMapStyled>
      {switchIcon(icon)}
      <div className="strategicMap__content">
        <h3 className="strategicMap__title">{title}</h3>
        <Paragraph className="strategicMap__text">{text}</Paragraph>
      </div>
    </StrategicMapStyled>
  )
}

export default StrategicMap

