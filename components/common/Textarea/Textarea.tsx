import * as React from 'react'
import styled from 'styled-components'

const TextareaStyled = styled.textarea`
  width: max-content;
  padding: 10px 18px;
  font-size: 16px;
  border: 2px solid rgba(37, 114, 62, 0.3);
  color: ${({ theme }) => theme.colors.black};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ children, ...props }) => {
  return (
    <TextareaStyled { ...props }>{children}</TextareaStyled>
  )
}

export default Textarea
