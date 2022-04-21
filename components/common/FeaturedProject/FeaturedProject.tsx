import * as React from 'react'
import styled from 'styled-components'

// Data
import { ProjectType } from '@data/projects.data'
import Image from 'next/image'

const FeaturedProjectStyled = styled.article`
  height: 450px;
  position: relative;

  .featuredProject__content {
    position: absolute;
    display: grid;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    box-shadow: 0px -85px 23px -20px rgba(0, 0, 0, 0.5) inset;
  }

  .featuredProject__name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }
`

const FeaturedProject: React.FC<ProjectType> = ({ id, name, image }) => {
  return (
    <FeaturedProjectStyled id={id}>
      {image &&
        <Image
          src={image}
          alt={name}
          aria-label={name}
          layout="fill"
          objectFit="cover"
          priority={false}
        />
      }
      <div className="featuredProject__content">
        <h3 className="featuredProject__name">{name}</h3>
      </div>
    </FeaturedProjectStyled>
  )
}

export default FeaturedProject
