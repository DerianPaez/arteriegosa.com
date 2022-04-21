import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// Data
import { ClientType } from '@data/clients.data'

const BrandStyled = styled.div`
  height: 150px;
  position: relative;
  z-index: ${({ theme }) => theme.positions.image};
`

const Brand: React.FC<ClientType> = ({ id, name, image }) => {
  return (
    <BrandStyled id={id}>
      <Image
        src={image}
        alt={name}
        aria-label={name}
        layout="fill"
        objectFit="contain"
        priority={false}
      />
    </BrandStyled>
  )
}

export default Brand
