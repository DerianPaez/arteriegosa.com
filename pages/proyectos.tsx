import * as React from 'react'
import styled from 'styled-components'

// Components
import { Banner, Project, Section } from '@components/common'
import { projects } from '@data/projects.data'

type Props = {
  
}

const ProjectsStyled = styled.div`
  /*  */
  .projects {
    .projects__list {
      display: grid;
      gap: 20px;
    }

    @media (min-width: 500px) {
      .projects__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .projects__list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`

const Projects: React.FC<Props> = () => {
  return (
    <ProjectsStyled>
      <Banner
        title="Proyectos"
      />
      <Section className="projects">
        <div className="projects__list">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                { ...project }
              />
            )
          })}
        </div>
      </Section>
    </ProjectsStyled>
  )
}

export default Projects
