import * as React from 'react'
import styled from 'styled-components'

const TextareaStyled = styled.textarea<TextareaStyledType>`
  width: max-content;
  padding: 10px 18px;
  font-size: 16px;
  border: 2px solid ${({ error, theme }) => error ? theme.colors.error : "rgba(37, 114, 62, 0.3)"};
  color: ${({ theme }) => theme.colors.black};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`

type TextareaStyledType = {
  error?: any
}
interface FormikTextareaType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  form: any
}

const Textarea: React.FC<FormikTextareaType> = ({ children, form, ...props }) => {
  const { name } = props
  const error = form.errors[name]
  return (
    <TextareaStyled
      error={error ?? false}
      onChange={form.handleChange}
      value={form.values[name]}
      { ...props }
    >
      {children}
    </TextareaStyled>
  )
}

export default Textarea
