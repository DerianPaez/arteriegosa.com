import * as React from 'react'
import styled from 'styled-components'

// Icons
import Commitment from '@components/icons/Commitment'
import Quality from '@components/icons/Quality'
import Orientation from '@components/icons/Orientation'
import Puntuality from '@components/icons/Puntuality'

// Theme
import { Paragraph } from '@config/themeConfig'

type Props = {
  icon: string
  title: string
  text: string
}

const ChooseUsItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .chooseUs__title {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 5px;
    font-weight: 500;
  }

  .chooseUs__icon {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    padding: 10px;
    position: relative;
  }

  .chooseUs__triangle {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.secundaryLight};
  }

  @media (min-width: 1024px) {
    gap: 30px;

    .chooseUs__title {
      font-size: 24px;
    }

    svg {
      width: 75px;
      height: 75px;
    }

    .chooseUs__icon {
      padding: 15px;
    }

    .chooseUs__triangle {
      border-bottom: 15px solid ${({ theme }) => theme.colors.secundaryLight};
    }
  }
`

const ChooseUsItem: React.FC<Props> = ({ title, text, icon }) => {
  const switchIcon = (icon: string) => {
    switch(icon) {
      case "Commitment":
        return <Commitment width="70" height="70" />
      case "Quality":
        return <Quality width="70" height="70" />
      case "Orientation":
        return <Orientation width="70" height="70" />
      case "Puntuality":
        return <Puntuality width="70" height="70" />
    }
  }

  return (
    <ChooseUsItemStyled>
      <div className="chooseUs__content">
        <h3 className="chooseUs__title">{title}</h3>
        <Paragraph className="chooseUs__text">{text}</Paragraph>
      </div>
      <div className="chooseUs__icon">
        {switchIcon(icon)}
        <div className="chooseUs__triangle"></div>
      </div>
    </ChooseUsItemStyled>
  )
}

export default ChooseUsItem
