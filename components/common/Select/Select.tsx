import * as React from 'react'
import styled from 'styled-components'

const SelectStyled = styled.select`
  width: max-content;
  padding: 10px 18px;
  font-size: 16px;
  border: 2px solid rgba(37, 114, 62, 0.3);
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
`

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, ...props }) => {
  return (
    <SelectStyled { ...props }>
      {children}
    </SelectStyled>
  )
}

export default Select
