import * as React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

// Data
import { ProjectType } from '@data/projects.data'

const ProjectStyled = styled.div<ProjectType>`
  width: 100%;
  min-height: 450px;
  position: relative;

  .project__content {
    position: absolute;
    display: grid;
    align-self: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    box-shadow: 0px -85px 23px -20px rgba(0, 0, 0, 0.5) inset;
    transition: 0.2s;
    background-color: rgb(0 0 0 / 13%);

    &:hover {
      background-color: transparent;
    }
  }

  .project__content__container {
    display: grid;
    gap: 5px
  }

  .project__name {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  .project__date {
    color: ${({ theme }) => theme.colors.secundaryLight};
  }
`

const Project: React.FC<ProjectType> = ({ ...props }) => {
  const { name, date, image, worksDone } = props
  return (
    <ProjectStyled { ...props }>
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
      <div className="project__content">
        <div className="project__content__container">
          <h3 className="project__name">{name}</h3>
          <hr />
        </div>
      </div>
    </ProjectStyled>
  )
}

export default Project
