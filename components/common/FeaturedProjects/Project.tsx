import * as React from 'react'
import styled from 'styled-components'

// Data
import { ProjectType } from '@data/projects.data'
import Image from 'next/image'

const ProjectStyled = styled.article`
  height: 450px;
  position: relative;
  z-index: ${({ theme }) => theme.positions.image};

  .project__content {
    display: grid;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    position: absolute;
    box-shadow: 0px -85px 23px -20px rgba(0, 0, 0, 0.5) inset;
  }

  .project__name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }
`

const Project: React.FC<ProjectType> = ({ id, name, image }) => {
  return (
    <ProjectStyled id={id}>
      <div className="project__image">
        {image &&
          <Image
            src={image}
            alt={name}
            aria-label={name}
            width="737.41"
            height="1080"
            layout="fill"
            objectFit="cover"
          />
        }
      </div>
      <div className="project__content">
        <h3 className="project__name">{name}</h3>
      </div>
    </ProjectStyled>
  )
}

export default Project
