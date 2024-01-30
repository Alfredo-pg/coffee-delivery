import { ReactNode } from 'react'
import { FormSubtitleContainer, TextContainer } from './styles'

interface FormSubtitleProps {
  icon: ReactNode
  variant: 'yellow-dark' | 'purple'
  titulo: string
  descricao: string
}

export function FormSubtitle({
  icon,
  variant,
  titulo,
  descricao,
}: FormSubtitleProps) {
  return (
    <FormSubtitleContainer $variant={variant}>
      {icon}
      <TextContainer>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </TextContainer>
    </FormSubtitleContainer>
  )
}
