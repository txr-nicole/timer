import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const variantButton = {
  primary: 'purple',
  secondary: 'orange',
  success: 'yellow',
  danger: 'red',
}

export const ButtonComponent = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  /* ${({ variant }) =>
    css`
      background-color: ${variantButton[variant]};
    `} */
`
