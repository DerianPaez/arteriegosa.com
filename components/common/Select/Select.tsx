import * as React from 'react'
import styled from 'styled-components'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'

const SelectStyled = styled(ReactSelect)`
  .react__select__control {
    width: 100%;
    padding: 10px 18px;
    font-size: 16px;
    border: 2px solid rgba(37, 114, 62, 0.3);
    color: ${({ theme }) => theme.colors.primary};
    min-height: auto;
    margin: 0;
    border-radius: 0;
    box-shadow: none;

    &:hover {
      border-color: rgba(37, 114, 62, 0.3);
    }

    .react__select__single-value {
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
    }

    .react__select__value-container {
      padding: 0;
      margin: 0;
    }

    .react__select__input-container {
      padding: 0;
      margin: 0;
    }

    .react__select__indicator {
      padding: 0;
      margin: 0;
    }

    .react__select__indicator {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .react__select__option:active {
    background-color: rgba(37, 114, 62, 0.3);
  }

  .react__select__option--is-focused {
      background: rgba(37, 114, 62, 0.3);
    }

  .react__select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secundaryLight};
  }
`

interface SelectProps extends ReactSelectProps {
  name: string,
  form: any
}

const Select: React.FC<SelectProps> = ({ name, placeholder, className, options, form }) => {
  return (
    <SelectStyled
      className={className}
      classNamePrefix="react__select"
      placeholder={placeholder}
      name={name}
      options={options}
      onChange={(option: any) => {
        form.setFieldValue(name, option.value)
      }}
    />
  )
}

export default Select
