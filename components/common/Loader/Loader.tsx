import * as React from 'react'
import styled from 'styled-components'

const LoaderStyled = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
`

const Loader: React.FC = () => {
  return (
    <LoaderStyled>
      <p>Cargando...</p>
    </LoaderStyled>
  )
}

export default Loader
