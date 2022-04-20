import * as React from 'react'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

// Components
import Brand from '@components/common/Clients/Client'

// Data
import { ClientsType, ClientType } from '@data/clients.data'


const ClientsStyled = styled.section`
  padding: 50px 0;

  .clients__container {
    display: grid;
    gap: 20px;
  }

  .clients__header {
    display: grid;
    gap: 15px;
    text-align: center;
  }

  .clients__title {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  .clients__description {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  .clients__list {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 425px) {
    .clients__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .clients__title {
      font-size: 32px;
    }

    .clients__description {
      font-size: 20px;
      width: 690px;
      justify-self: center;
    }

    .clients__list {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .clients__title {
      font-size: 40px;
    }
  }
`

type Props = {
  clientsData: ClientsType
}

const Clients: React.FC<Props> = ({ clientsData }) => {
  return (
    <ClientsStyled>
      <Wrapper>
        <div className="clients__container">
          <div className="clients__header">
            <h2 className="clients__title">{clientsData.title}</h2>
            <p className="clients__description">{clientsData.description}</p>
          </div>
          <div className="clients__list">
            {clientsData.clientList.map((client: ClientType) => {
              return (
                <Brand key={client.id} { ...client } />
              )
            })}
          </div>
        </div>
      </Wrapper>
    </ClientsStyled>
  )
}

export default Clients
