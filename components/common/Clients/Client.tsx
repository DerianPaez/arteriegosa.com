import * as React from 'react'
import styled from 'styled-components'

// Data
import { ClientType } from '@data/clients.data'
import Image from 'next/image'

const ClientStyled = styled.div`
  height: 150px;
  position: relative;
  z-index: ${({ theme }) => theme.positions.image};
`

const Client: React.FC<ClientType> = ({ id, name, image }) => {
  return (
    <ClientStyled id={id}>
      <Image
        src={image}
        alt={name}
        aria-label={name}
        layout="fill"
        objectFit="contain"
        priority={true}
      />
    </ClientStyled>
  )
}

export default Client
