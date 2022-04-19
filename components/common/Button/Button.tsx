import * as React from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean,
  onClick: () => void
}

const ButtonStyled = styled.button<ButtonProps>`
  width: ${({ width }) => width ? `${width}px` : 'max-content'};
`

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  active,
  type,
  width,
  loading,
  disabled,
  onClick,
}) => {
  return (
    <ButtonStyled
      aria-pressed={active}
      className={className}
      disabled={disabled}
      width={width}
      type={type}
      loading={loading}
      href={href}
      onClick={onClick}
    >
      {children}
      {loading &&
        <span>Cargando</span>
      }
    </ButtonStyled>
  )
}

export default Button
