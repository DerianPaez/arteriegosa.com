import * as React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
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

interface FormikInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  form: any
}

const Input: React.FC<FormikInputType> = ({ form, ...props }) => {
  const { name } = props
  const error = form.errors[name]
  const touched = form.touched[name]
  return (
    <InputStyled
      onChange={form.handleChange}
      value={form.values[name]}
      { ...props }
    />
  )
}

export default Input
