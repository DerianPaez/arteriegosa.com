import * as React from 'react'
import styled from 'styled-components'

// Icons
import Advisory from '@components/icons/Advisory'
import Design from '@components/icons/Design'
import Maintenance from '@components/icons/Maintenance'
import Supply from '@components/icons/Supply'

type Props = {
  id: string
  name: string
  description: string
  icon: string
}

const ServiceItemStyled = styled.article`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.22);

  .service__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service__itemContent {
    display: grid;
    gap: 10px;
    text-align: center;
  }

  .service__title {
    font-size: 18px;
    font-weight: 500;
  }

  .service__description {
    color: ${({ theme }) => theme.colors.paragraph};
  }

`

const ServiceItem: React.FC<Props> = ({ id, name, description, icon }) => {
  const switchIcon = (icon: string) => {
    switch(icon) {
      case "Advisory":
        return <Advisory width="100" height="100" />
      case "Design":
        return <Design width="100" height="100" />
      case "Maintenance":
        return <Maintenance width="100" height="100" />
      case "Supply":
        return <Supply width="100" height="100" />
    }
  }
  return (
    <ServiceItemStyled id={id}>
      <div className="service__icon">
        {switchIcon(icon)}
      </div>
      <div className="service__itemContent">
        <h3 className="service__title">{name}</h3>
        <p className="service__description">{description}</p>
      </div>
    </ServiceItemStyled>
  )
}

export default ServiceItem
