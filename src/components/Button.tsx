import { ButtonComponent, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonComponent variant={variant}>Entrar</ButtonComponent>
}
