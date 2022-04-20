import * as React from 'react'
import styled from 'styled-components'

// Data
import { ProjectType } from '@data/projects.data'
import { Wrapper } from '@config/themeConfig'
import Project from './Project'

type Props = {
  projectList: any[]
}

const FeaturedProjectsStyled = styled.section`
  padding: 50px 0;

  .featuredProjects__container {
    display: grid;
    gap: 15px;
  }

  .featuredProjects__title {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  .featuredProjects__list {
    display: grid;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .featuredProjects__title {
      font-size: 32px;
    }

    .featuredProjects__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .featuredProjects__title {
      font-size: 40px;
    }

    .featuredProjects__list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

const FeaturedProjects: React.FC<Props> = ({ projectList }) => {
  const filterByProjectImportance = (project: ProjectType) => project.importance
  const featuredProjects: ProjectType[] = projectList.filter(filterByProjectImportance)

  return (
    <FeaturedProjectsStyled>
      <Wrapper>
        <div className="featuredProjects__container">
          <h2 className="featuredProjects__title">Proyectos Destacados</h2>
          <div className="featuredProjects__list">
            {featuredProjects.map((project) => {
              return (
                <Project
                  key={project.id}
                  { ...project }
                />
              )
            })}
          </div>
        </div>
      </Wrapper>
    </FeaturedProjectsStyled>
  )
}

export default FeaturedProjects
