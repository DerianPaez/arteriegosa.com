import * as React from 'react'
import styled from 'styled-components'


const InputStyled = styled.input`
  width: max-content;
  padding: 10px 20px;
  border: 2px solid rgba(37, 114, 62, 0.3);
  color: ${({ theme }) => theme.colors.primary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <InputStyled { ...props } />
  )
}

export default Input
