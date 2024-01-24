import { IconContainer } from './styles'
import { ReactNode } from 'react'

interface IntroIconProps {
  variant: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
  icon: ReactNode
  text: string
}

export function IntroIcon({ variant, icon, text }: IntroIconProps) {
  return (
    <IconContainer $variant={variant}>
      <span>{icon}</span>
      <p>{text}</p>
    </IconContainer>
  )
}
