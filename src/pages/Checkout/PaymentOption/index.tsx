import { ReactNode } from 'react'
import { PaymentOptionContainer } from './styles'

interface PaymentOptionProps {
  icon: ReactNode
  text: string
}

export function PaymentOption({ icon, text }: PaymentOptionProps) {
  return (
    <PaymentOptionContainer>
      {icon}
      <p>{text}</p>
    </PaymentOptionContainer>
  )
}
