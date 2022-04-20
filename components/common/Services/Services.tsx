import * as React from 'react'
import styled from 'styled-components'

// Data
import { ServicesType, ServiceType } from '@data/services.data'

// Config
import { Wrapper } from '@config/themeConfig'

// Components
import ServiceItem from './ServiceItem'

type Props = {
  serviceData: ServicesType
}

const ServicesStyled = styled.section`
  padding: 50px 0;

  .services__container {
    display: grid;
    gap: 50px;
  }

  .services__header {
    display: grid;
    gap: 15px;
    text-align: center;
  }

  .services__title {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryDark};
  }

  .services__text {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  .services__grid {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 425px) {
    .services__grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
    .services__title {
      font-size: 32px;
    }

    .services__text {
      font-size: 20px;
      width: 690px;
      justify-self: center;
    }

    .services__grid {
      grid-template-columns: none;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }

  @media (min-width: 1024px) {
    .services__title {
      font-size: 40px;
    }
  }
`

const Services: React.FC<Props> = ({ serviceData }) => {
  return (
    <ServicesStyled>
      <Wrapper>
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">{serviceData.title}</h2>
            <p className="services__text">{serviceData.text}</p>
          </div>
          <div className="services__grid">
            {serviceData.servicesList.map((service: ServiceType) => {
              return (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              )
            })}
          </div>
        </div>
      </Wrapper>
    </ServicesStyled>
  )
}

export default Services
